import { Container } from "@mui/material"
import AllRegistrationPackage from "app/common/components/AllRegistrationPackage"
import CompareComponent from "app/common/components/CompareComponent"
import ContactComponent from "app/common/components/ContactComponent"
import SignUpTodayComponent from "app/common/components/SignUpTodayComponent"

const newFile = () => {
  return (
    <Container className="flex flex-col gap-[48px] px-[130px] pb-20">
      <AllRegistrationPackage />
      <ContactComponent />
      <CompareComponent />
      <SignUpTodayComponent />
    </Container>
  )
}

export default newFile
