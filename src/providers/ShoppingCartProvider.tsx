import { createContext, FunctionComponent, ReactNode, useContext } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

type LocalStorageCartItem = {
  id: number
  quantity: number
}

interface ShoppingCartContextType {
  getItemQuantity: ({ id }: { id: number }) => number
  addToCart: ({ id }: { id: number }) => void
  decreaseCartQuantity: ({ id }: { id: number }) => void
  removeFromCart: ({ id }: { id: number }) => void
  cartItems: LocalStorageCartItem[]
  cartQuantity: number
}

interface Props {
  children: ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useCounter = () => useContext(ShoppingCartContext)

const ShoppingCartProvider: FunctionComponent<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<LocalStorageCartItem[]>(
    'shopping-cart',
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const getItemQuantity = ({ id }: { id: number }) =>
    cartItems.find((item) => item.id === id)?.quantity || 0

  function addToCart({ id }: { id: number }) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      }
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    })
  }

  const decreaseCartQuantity = ({ id }: { id: number }) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id)
      }
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    })
  }

  const removeFromCart = ({ id }: { id: number }) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        removeFromCart,
        addToCart,
        decreaseCartQuantity,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
