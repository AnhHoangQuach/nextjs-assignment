import { AppHeader } from "containers"
import { PropsWithChildren } from "react"

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <AppHeader />
      {children}
    </main>
  )
}

export default AppLayout
