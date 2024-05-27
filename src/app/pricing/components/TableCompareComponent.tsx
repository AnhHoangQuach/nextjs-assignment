import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Image from "next/image"

const TableCompareComponent = () => {
  const tableCellLayout = [
    {
      id: 1,
      title: (
        <div className="flex min-h-[155px] flex-col justify-between">
          <div className="text-center text-white">
            <div className="mb-2 text-[30px] leading-8">Free</div>
            <div className="text-sm font-semibold">for everyone</div>
          </div>
          <Button className="w-full bg-white py-5 text-[14px] leading-4 text-[#0A0517]">Sign up today</Button>
        </div>
      ),
    },
    {
      id: 2,
      title: (
        <div className="flex min-h-[155px] flex-col justify-between">
          <div className="text-center text-white">
            <div className="mb-2 text-[30px] leading-8">$10</div>
            <div>
              <div className="text-sm font-semibold">per user/month</div>
              <div className="text-xs">billed monthly</div>
            </div>
          </div>
          <Button className="w-full bg-[#70FF88] py-5 text-[14px] leading-4 text-[#0A0517]">Sign up today</Button>
        </div>
      ),
    },
    {
      id: 3,
      title: (
        <div className="flex min-h-[155px] flex-col justify-between">
          <div className="text-center text-white">
            <div className="mb-2 text-[30px] leading-8">$18</div>
            <div>
              <div className="text-sm font-semibold">per user/month</div>
              <div className="text-xs">billed monthly</div>
            </div>
          </div>
          <Button className="w-full bg-[#75EFFF] py-5 text-[14px] leading-4 text-[#0A0517]">Sign up today</Button>
        </div>
      ),
    },
    {
      id: 4,
      title: (
        <div className="flex min-h-[155px] flex-col justify-between">
          <div className="text-center text-white">
            <div className="mb-4 flex justify-center">
              <Image alt="Logo" height={36} priority src="/contact.png" width={25} />
            </div>
            <div className="text-sm font-semibold">Contact for pricing</div>
          </div>
          <Button className="w-full bg-[#FEB445] py-5 text-[14px] leading-4 text-[#0A0517]">Contact Sales</Button>
        </div>
      ),
    },
  ]
  const createData = (
    name: string,
    value1: React.ReactNode | string,
    value2: React.ReactNode | string,
    value3: React.ReactNode | string,
    value4: React.ReactNode | string,
  ) => {
    return { name, value1, value2, value3, value4 }
  }
  const rows = [
    createData("Users & Guests", "Starter", "Professional", "Organization", "Enterprise"),
    createData("Guests", "Unlimited", "Unlimited", "Unlimited", "Unlimited"),
    createData("Members", "Unlimited", "Unlimited", "Unlimited", "Unlimited"),
    createData("Fundamentals", "Starter", "Professional", "Organization", "Enterprise"),
    createData("Threads", "500", "Unlimited", "Unlimited", "Unlimited"),
    createData("Chat Messages", "5", "Unlimited", "Unlimited", "Unlimited"),
    createData(
      "Slack Import",
      <div className="flex justify-center">
        <Image alt="Logo" className="rounded-t-xl" height={24} priority src="/check-icon.svg" width={24} />
      </div>,
      <div className="flex justify-center">
        <Image alt="Logo" className="rounded-t-xl" height={24} priority src="/check-icon.svg" width={24} />
      </div>,
      <div className="flex justify-center">
        <Image alt="Logo" className="rounded-t-xl" height={24} priority src="/check-icon.svg" width={24} />
      </div>,
      <div className="flex justify-center">
        <Image alt="Logo" className="rounded-t-xl" height={24} priority src="/check-icon.svg" width={24} />
      </div>,
    ),
  ]

  return (
    <TableContainer
      className="table-custom rounded-[20px] p-6 text-white"
      component={Paper}
      style={{
        background: "linear-gradient(0deg, rgba(66, 66, 66, 0.15) 0%, rgba(112, 112, 178, 0.2) 100%)",
        borderTop: "1px solid #7351C899",
      }}
    >
      <Table aria-label="simple-data" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell className="w-[160px]"></TableCell>
            <TableCell align="center">{tableCellLayout[0].title}</TableCell>
            <TableCell align="center">{tableCellLayout[1].title}</TableCell>
            <TableCell align="center">{tableCellLayout[2].title}</TableCell>
            <TableCell align="center">{tableCellLayout[3].title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="custom-body-table">
          {rows.map((row) => (
            <TableRow
              className={`${["Fundamentals", "Users & Guests"].includes(row.name) ? "table-row-custom" : ""}`}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={`${["Fundamentals", "Users & Guests"].includes(row.name) ? "gradient-text-table" : ""}`}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="center">{row.value1}</TableCell>
              <TableCell align="center">{row.value2}</TableCell>
              <TableCell align="center">{row.value3}</TableCell>
              <TableCell align="center">{row.value4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCompareComponent
