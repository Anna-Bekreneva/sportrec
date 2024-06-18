import { PropsWithChildren } from 'react'

import { Header, Main } from '@/widgets'

export const BaseAppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header></Header>
      <Main>{children}</Main>
    </>
  )
}
