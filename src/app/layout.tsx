import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AppLayout, AppProvider } from "containers"
import { Roboto_Slab } from "next/font/google"
import { PropsWithChildren } from "react"

import "./globals.scss"

const appFont = Roboto_Slab({ subsets: ["vietnamese"] })

export const metadata: Metadata = {
  description: `Airdata là hệ thống quản lý bán vé máy bay hàng đầu tại Việt Nam mang đến một loạt các tính năng và tiện ích độc đáo, nhằm tạo lợi ích tối đa cho doanh nghiệp trong việc quản lý và điều hành bán vé máy bay.`,
  title: `Airdata - Hệ thống đặt vé đại lý hiện đại`,
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={appFont.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider>
            <AppLayout>{children}</AppLayout>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
