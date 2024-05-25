import Link from "next/link"

const AppHeader = () => {
  return (
    <div className="sticky top-0 flex w-screen">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center px-6">
        <div>Airdata</div>

        <div className="ml-auto flex gap-4">
          <Link href="/">
            <span className="text-blue-400">Trang chủ</span>
          </Link>
          <span>Tính năng</span>
          <span>Phiên bản</span>
          <Link href="/prices">
            <span style={{ color: "blue" }}>Bảng giá</span>
          </Link>
          <span>Liên hệ</span>
        </div>
      </div>
    </div>
  )
}

export default AppHeader
