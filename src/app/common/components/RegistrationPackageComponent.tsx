import { Button } from "@mui/material"

import CheckIcon from "../assets/check-icon"

type Props = {
  backgroundColor: string
  border: string
  colorButton: string
  colorTitle: string
  listContent: string[]
  listItems: string[]
}

export default function RegistrationPackageComponent({
  backgroundColor,
  border,
  colorButton,
  colorTitle,
  listContent,
  listItems,
}: Props) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background: backgroundColor,
        borderTop: border,
      }}
    >
      <div className="min-h-[470px]">
        <div className="flex flex-col gap-4 pb-4 text-center">
          <div className={`text-[19px] leading-[30px] text-[${colorTitle}]`}>{listContent[0]}</div>
          <div className="text-[51px] leading-[54px]">{listContent[1]}</div>
          <div className="text-sm">
            <div className="">{listContent[2]}</div>
            <div>{listContent[3]}</div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] pt-5">
          {listItems.map((item, index) => (
            <div className="flex items-center gap-3 text-xs" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <Button className={`w-full bg-[${colorButton}] text-sm text-black`}>Sign up today</Button>
    </div>
  )
}
