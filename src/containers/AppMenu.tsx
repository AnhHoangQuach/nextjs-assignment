"use client"

import { ListItemButton, styled } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { publicRoute } from "routes"

const StyledListItem = styled(ListItemButton)({
  fontSize: "14px",
  fontWeight: 500,
})

const NavItem = ({ name, path }: { name: string; path: string }) => {
  const pathname = usePathname()
  const isHome = path === "/"
  return (
    <Link href={path}>
      <StyledListItem selected={isHome ? pathname === path : pathname.startsWith(path)}>
        {name}
        {path === "/solutions" && <span className="ml-2">+</span>}
      </StyledListItem>
    </Link>
  )
}

const AppMenu = () => {
  const { gallery, pricing, solutions } = publicRoute

  return (
    <>
      <NavItem {...gallery} />
      <NavItem {...solutions} />
      <NavItem {...pricing} />
    </>
  )
}

export default AppMenu
