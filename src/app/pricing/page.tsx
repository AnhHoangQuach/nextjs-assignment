import { ArrowCircleRightOutlined } from "@mui/icons-material"
import { Button, Container, Grid } from "@mui/material"
import { ContactComponent, RegistrationPackage, TableCompareComponent } from "app/pricing/components"
import { Inter } from "next/font/google"

const pricingFont = Inter({ display: "swap", subsets: ["latin"], weight: ["300", "400", "500", "700"] })

const Pricing = () => {
  return (
    <div className={pricingFont.className}>
      <Container className="flex flex-col items-center justify-center py-20">
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <RegistrationPackage
              backgroundColor="linear-gradient(0deg, rgba(66, 66, 66, 0) 0%, rgba(112, 112, 178, 0.2) 100%)"
              border="1px solid #7351C899"
              colorButton="#F2F2F2"
              colorTitle="#FFFFFF"
              listContent={["Starter", "Free", "Unlimited users", "and guests"]}
              listItems={[
                "Unlimited users",
                "All integrations and APIs",
                "50 threads",
                "500 chat messages",
                "SOC2 + GDPR compliance",
              ]}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <RegistrationPackage
              backgroundColor="linear-gradient(0deg, rgba(66, 66, 66, 0) 0%, rgba(34, 103, 46, 0.3) 100%)"
              border="1px solid #70FF884D"
              colorButton="#70FF88"
              colorTitle="#6FFF88"
              listContent={["Professional", "$10", "per user/month", "billed monthly"]}
              listItems={[
                "Unlimited users",
                "All integrations and APIs",
                "Unlimited threads & chats",
                "SOC2 + GDPR compliance",
              ]}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <RegistrationPackage
              backgroundColor="linear-gradient(0deg, rgba(66, 66, 66, 0) 0%, rgba(8, 124, 140, 0.3) 100%)"
              border="1px solid #75EFFF66"
              colorButton="#75EFFF"
              colorTitle="#75EFFF"
              listContent={["Organization", "$18", "per user/month", "billed monthly"]}
              listItems={[
                "Unlimited users",
                "All integrations and APIs",
                "SOC2 + GDPR compliance",
                "Unlimited threads & chats",
                "Advanced invitation controls for members",
                "SCIM",
                "SSO",
              ]}
            />
          </Grid>
        </Grid>
        <ContactComponent />
        <div className="hidden w-full md:block">
          <div className="my-12 text-center text-[48px] font-semibold leading-[58px]">Compare plans & features</div>
          <TableCompareComponent />
        </div>
        <div
          className="mt-12 flex flex-col items-center justify-center space-y-12 p-6 md:px-12 md:py-20 md:pt-12"
          style={{
            backgroundImage: "url(/assets/background.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="text-center text-3xl md:text-4xl">Make the switch to Threads</div>
          <div className="rounded-xl border-[#A18AFF3D] p-1" style={{ background: "#A18AFF3D" }}>
            <Button
              className="h-14 w-48"
              color="primary"
              endIcon={<ArrowCircleRightOutlined fontSize="large" />}
              variant="contained"
            >
              Sign up today
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Pricing
