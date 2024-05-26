import { Button } from "@mui/material"

export default function ContactComponent() {
  return (
    <div className="gap-[36px]">
      <div
        className="flex w-full items-center justify-between rounded-[20px] p-1 px-[24px] py-[28px]"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.2) 100%)",
          borderTop: "1px solid #6168FA66",
        }}
      >
        <div>
          <div style={{ color: "linear-gradient(91.22deg, #A1B4F2 0%, #5F65E3 100%)" }}>Are you a startup?</div>
          <div>Get started with a discount on any plan.</div>
        </div>
        <div>
          <Button>Contact Sales</Button>
        </div>
      </div>
    </div>
  )
}
