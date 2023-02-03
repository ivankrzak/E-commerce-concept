import { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type PropsWithChildrenRequired<P = {}> = P & { children: ReactNode }

// eslint-disable-next-line @typescript-eslint/ban-types
export type PropsWithChildrenOptional<P = {}> = P & {
  children?: ReactNode | undefined
}
