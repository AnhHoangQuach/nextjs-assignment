import { Container } from "@mui/material"
import AllRegistrationPackage from "app/common/components/AllRegistrationPackage"
import ContactComponent from "app/common/components/ContactComponent"

const newFile = () => {
  return (
    <Container className="gap-[48px] px-[130px]">
      <AllRegistrationPackage />
      <ContactComponent />
    </Container>
  )
}

export default newFile
