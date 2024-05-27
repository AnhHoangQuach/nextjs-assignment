import { Container } from "@mui/material"
import Image from "next/image"

const AppFooter = () => {
  return (
    <Container className="flex flex-col items-center justify-center md:flex-row md:justify-between ">
      <div className="space-y-4 text-sm md:space-y-8">
        <Image alt="Logo" className="mx-auto md:mx-0" height={25} priority src="/assets/footer.png" width={48} />
        <Image alt="Logo" className="mx-auto md:mx-0" height={38} priority src="/logo.svg" width={100} />
        <div className="hidden items-center space-x-2 text-[#9B9FAA] md:flex">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
        <div className="hidden text-center text-[#7A7F90] md:block md:text-left">©2023 Threads, Inc.</div>
      </div>
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-16 md:space-y-0">
        <div className="hidden space-y-3 text-center text-sm text-[#9B9FAA] md:block md:text-right">
          <div>For Engineers</div>
          <div>For Designers</div>
          <div>For Product Managers</div>
          <div>For Customer Experience</div>
          <div>For Leaders</div>
          <div>Gallery</div>
        </div>
        <div className="space-y-3 text-center text-sm text-[#9B9FAA] md:text-right">
          <div>Blog</div>
          <div>AI</div>
          <div>Case Studies</div>
          <div>Pricing</div>
          <div>Twitter</div>
          <div>Log in</div>
        </div>
        <div className="block text-sm md:hidden">
          <div className="my-6 flex items-center space-x-2 text-[#9B9FAA]">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
          <div className="text-center text-[#7A7F90] md:text-left">©2023 Threads, Inc.</div>
        </div>
      </div>
    </Container>
  )
}

export default AppFooter
