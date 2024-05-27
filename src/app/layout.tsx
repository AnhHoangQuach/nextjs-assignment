import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AppLayout, AppProvider } from "containers"
import { PropsWithChildren } from "react"
import "styles/App.scss"

export const metadata: Metadata = {
  description: `Threads Gallery`,
  title: `Threads Gallery`,
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <AppProvider>
            <AppLayout>{children}</AppLayout>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
