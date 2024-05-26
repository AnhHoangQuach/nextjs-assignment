import CheckIcon from "../assets/check-icon"
import { Button } from "@mui/material"

type Props = {
  listItems: string[]
  listContent: string[]
  border: string
  backgroundColor: string
  colorButton: string
  colorTitle: string
}

export default function RegistrationPackageComponent({
  listItems,
  listContent,
  border,
  backgroundColor,
  colorButton,
  colorTitle,
}: Props) {
  const color = "#6FFF88"
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
            <div key={index} className="flex items-center gap-3 text-xs">
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
