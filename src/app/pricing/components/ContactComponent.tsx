import { Button } from "@mui/material"

const ContactComponent = () => {
  return (
    <div className="mt-12 flex flex-col gap-9">
      <div
        className="flex w-full flex-col items-center justify-between gap-8 rounded-[20px] p-1 px-6 py-7 md:flex-row md:gap-16"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.2) 100%)",
          borderTop: "1px solid #6168FA66",
        }}
      >
        <div className="gap-[10px] space-y-6">
          <div className="gradient-text-1 text-2xl md:text-[31px] md:leading-[48px]">Are you a startup?</div>
          <div className="text-lg">Get started with a discount on any plan.</div>
        </div>
        <Button className="w-full bg-custom-gradient-1 px-20 py-4 text-sm text-black md:w-auto md:min-w-[248px]">
          Contact Sales
        </Button>
      </div>
      <div
        className="flex w-full flex-col items-center justify-between gap-8 rounded-[20px] p-1 px-6 py-7 md:flex-row md:gap-16"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(181, 131, 23, 0.2) 100%)",
          borderTop: "1px solid #FFAA224D",
        }}
      >
        <div className="gap-[10px] space-y-6">
          <div className="gradient-text-2 text-2xl md:text-[31px] md:leading-[48px]">Threads Enterprise</div>
          <div className="text-lg">
            For enterprises who want to scale with confidence, Threads Enterprise offers advanced security, additional
            admin controls, dedicated customer support, and more.
          </div>
        </div>
        <Button className="w-full bg-custom-gradient-2 px-20 py-4 text-sm text-black md:w-auto md:min-w-[248px]">
          Contact Sales
        </Button>
      </div>
      <div
        className="flex w-full flex-col items-center justify-between gap-8 rounded-[20px] p-1 px-6 py-7 md:flex-row md:gap-16"
        style={{
          background: "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.2) 100%)",
          borderTop: "1px solid #6168FA66",
        }}
      >
        <div className="gap-[10px] space-y-6">
          <div className="gradient-text-3 text-2xl md:text-[31px] md:leading-[48px]">Threads Community</div>
          <div className="text-lg">
            Threads Community offers communities the same tools that Threads Professional provides at a more achievable
            price point.
          </div>
          <div className="text-lg">This plan is currently invite-only. </div>
        </div>
        <Button className="w-full bg-custom-gradient-3 px-20 py-4 text-sm text-black md:w-auto md:min-w-[248px]">
          Contact Sales
        </Button>
      </div>
    </div>
  )
}

export default ContactComponent
