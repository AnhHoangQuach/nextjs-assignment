import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AppLayout, AppProvider } from "containers"
import { Roboto } from "next/font/google"
import { PropsWithChildren } from "react"
import "styles/App.scss"

const appFont = Roboto({ display: "swap", subsets: ["latin"], weight: ["300", "400", "500", "700"] })

export const metadata: Metadata = {
  description: `Threads Gallery`,
  title: `Threads Gallery`,
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={appFont.className}>
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
