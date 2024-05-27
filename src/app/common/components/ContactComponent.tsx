import { Button } from "@mui/material"

export default function ContactComponent() {
  return (
    <div className="flex flex-col gap-[36px]">
      <div
        className="flex w-full items-center justify-between gap-[36px] rounded-[20px] p-1 px-6 py-7"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.2) 100%)",
          borderTop: "1px solid #6168FA66",
        }}
      >
        <div className="gap-[10px]">
          <div className="gradient-text-1 text-[31px] leading-[48px]">Are you a startup?</div>
          <div className="mt-4 text-lg">Get started with a discount on any plan.</div>
        </div>
        <div>
          <Button className="min-w-[258px] bg-custom-gradient-1 px-20 py-4 text-sm text-black">Contact Sales</Button>
        </div>
      </div>
      <div
        className="flex w-full items-center justify-between gap-[36px] rounded-[20px] p-1 px-6 py-7"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(181, 131, 23, 0.2) 100%)",
          borderTop: "1px solid #FFAA224D",
        }}
      >
        <div className="gap-[10px]">
          <div className="gradient-text-2 text-[31px] leading-[48px]">Threads Enterprise</div>
          <div className="mt-4 text-lg">
            For enterprises who want to scale with confidence, Threads Enterprise offers advanced security, additional
            admin controls, dedicated customer support, and more.
          </div>
        </div>
        <div>
          <Button className="min-w-[258px] bg-custom-gradient-2 px-20 py-4 text-sm text-black">Contact Sales</Button>
        </div>
      </div>
      <div
        className="flex w-full items-center justify-between gap-[36px] rounded-[20px] p-1 px-6 py-7"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.2) 100%)",
          borderTop: "1px solid #6168FA66",
        }}
      >
        <div className="gap-[10px]">
          <div className="gradient-text-3 text-[31px] leading-[48px]">Threads Community</div>
          <div className="mt-4 text-lg">
            Threads Community offers communities the same tools that Threads Professional provides at a more achievable
            price point.{" "}
          </div>
        </div>
        <div>
          <Button className="min-w-[258px] bg-custom-gradient-3 px-20 py-4 text-sm text-black">Contact Sales</Button>
        </div>
      </div>
    </div>
  )
}
