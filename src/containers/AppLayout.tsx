import { AppFooter, AppHeader } from "containers"
import { PropsWithChildren } from "react"

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="pb-6 pt-0 sm:py-5">
      <AppHeader />
      {children}
      <AppFooter />
    </main>
  )
}

export default AppLayout
