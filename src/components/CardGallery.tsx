import { Box } from "@mui/material"
import Image from "next/image"

type CardGalleryProps = {
  description: string
  image: string
  links: string
  title: string
}

const CardGallery = ({ description, image, links, title }: CardGalleryProps) => {
  return (
    <Box className="rounded-xl">
      <Image alt="Logo" className="rounded-t-xl" height={256} priority src={image} width={374} />
      <div className="min-h-[225px] bg-[#201F29] p-8 text-center">
        <div className="text-[27px] font-bold">{title}</div>
        <div className="mt-4 text-[#E0E0E0]">{description}</div>
      </div>
      <div className="rounded-b-xl bg-[#16151E] p-5 text-center text-sm text-[#9D9AB7]">{links}</div>
    </Box>
  )
}

export default CardGallery
