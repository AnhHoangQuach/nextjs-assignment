import { Button } from "@mui/material"

export default function SignUpTodayComponent() {
  return (
    <div
      className="rounded-[20px] py-12"
      style={{
        backgroundImage: "url(./background.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div>
        <div>Make the switch to Threads</div>
        <Button>Sign up today</Button>
      </div>
    </div>
  )
}
