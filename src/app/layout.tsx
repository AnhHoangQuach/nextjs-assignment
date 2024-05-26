import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AppLayout, AppProvider } from "containers"
import { Roboto_Serif } from "next/font/google"
import { PropsWithChildren } from "react"
import "styles/App.scss"

const appFont = Roboto_Serif({ subsets: ["vietnamese"] })

export const metadata: Metadata = {
  description: `Airdata là hệ thống quản lý bán vé máy bay hàng đầu tại Việt Nam mang đến một loạt các tính năng và tiện ích độc đáo, nhằm tạo lợi ích tối đa cho doanh nghiệp trong việc quản lý và điều hành bán vé máy bay.`,
  title: `Airdata - Hệ thống đặt vé đại lý hiện đại`,
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
