import RegistrationPackageComponent from "./RegistrationPackageComponent"

export default function AllRegistrationPackage() {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <RegistrationPackageComponent
        listContent={["Starter", "Free", "Unlimited users", "and guests"]}
        listItems={[
          "Unlimited users",
          "All integrations and APIs",
          "50 threads",
          "500 chat messages",
          "SOC2 + GDPR compliance",
        ]}
        border="1px solid #7351C899"
        backgroundColor="linear-gradient(0deg, rgba(66, 66, 66, 0) 0%, rgba(112, 112, 178, 0.2) 100%)"
        colorButton="#F2F2F2"
        colorTitle="#FFFFFF"
      />
      <RegistrationPackageComponent
        listContent={["Professional", "$10", "per user/month", "billed monthly"]}
        listItems={[
          "Unlimited users",
          "All integrations and APIs",
          "Unlimited threads & chats",
          "SOC2 + GDPR compliance",
        ]}
        border="1px solid #70FF884D"
        backgroundColor="linear-gradient(0deg, rgba(66, 66, 66, 0) 0%, rgba(34, 103, 46, 0.3) 100%)"
        colorButton="#70FF88"
        colorTitle="#6FFF88"
      />
      <RegistrationPackageComponent
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
        border="1px solid #75EFFF66"
        backgroundColor="linear-gradient(0deg, rgba(66, 66, 66, 0) 0%, rgba(8, 124, 140, 0.3) 100%)"
        colorButton="#75EFFF"
        colorTitle="#75EFFF"
      />
    </div>
  )
}
