import { Button } from "@mui/material"
import Image from "next/image"

type RegistrationPackageProps = {
  backgroundColor: string
  border: string
  colorButton: string
  colorTitle: string
  listContent: string[]
  listItems: string[]
}

const RegistrationPackage = ({
  backgroundColor,
  border,
  colorButton,
  colorTitle,
  listContent,
  listItems,
}: RegistrationPackageProps) => {
  return (
    <div
      className="rounded-2xl p-8 md:p-4"
      style={{
        background: backgroundColor,
        borderTop: border,
      }}
    >
      <div className="md:min-h-[470px]">
        <div className="flex flex-col gap-4 pb-4 text-center">
          <div
            className="text-left text-2xl leading-[30px] md:text-center md:text-[19px]"
            style={{ color: colorTitle }}
          >
            {listContent[0]}
          </div>
          <div className="flex flex-row items-center gap-4 md:flex-col">
            <div className="text-[51px] leading-[54px]">{listContent[1]}</div>
            <div className="text-left text-sm">
              <div>{listContent[2]}</div>
              <div className="text-xs">{listContent[3]}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-5">
          {listItems.map((item, index) => (
            <div className="flex items-center gap-3 text-xs" key={index}>
              <Image alt="Logo" height={24} priority src="/check-icon.svg" width={24} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <Button className="mt-4 w-full text-sm text-black md:mt-0" style={{ backgroundColor: colorButton }}>
        Sign up today
      </Button>
    </div>
  )
}

export default RegistrationPackage
