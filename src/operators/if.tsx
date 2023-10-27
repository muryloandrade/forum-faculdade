import type { FC, PropsWithChildren } from 'react'

interface IProps {
  condition: boolean
}

const If: FC<PropsWithChildren<IProps>> = ({
  condition,
  children,
}: PropsWithChildren<IProps>) => {
  if (condition) {
    return <>{children}</>
  }
  return null
}

export default If
