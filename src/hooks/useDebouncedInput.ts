import { useEffect, useState } from 'react'

const USER_INPUT_DEBOUNCE_TIME = 150

export const useDebouncedInput = (
  input: string,
  debounceTime = USER_INPUT_DEBOUNCE_TIME
) => {
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input)
    }, debounceTime)
    return () => {
      clearTimeout(handler)
    }
  }, [input, debounceTime])

  return { debouncedValue }
}
