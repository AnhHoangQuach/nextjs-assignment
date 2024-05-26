"use client"

import { CloseOutlined, Home, MenuOutlined } from "@mui/icons-material"
import { AppBar, Button, Container, IconButton, ListItemButton, styled, Toolbar } from "@mui/material"
import { AppMenu } from "containers"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { authRoute } from "routes"

const StyledListItem = styled(ListItemButton)({
  fontSize: "14px",
  fontWeight: 500,
})

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <AppBar
      className="my-0 rounded-b-[20px] sm:my-5 sm:rounded-[20px]"
      component={Container}
      elevation={0}
      position="sticky"
      style={{ background: "linear-gradient(180deg, rgba(209, 209, 209, 0.15) 0%, rgba(102, 102, 102, 0.05) 100%)" }}
    >
      <Toolbar className="h-[80px] px-0">
        <div className="flex w-full items-center justify-between">
          <div className="mobile-nav flex-1" style={{ display: showMenu ? "flex" : "none" }}>
            <AppMenu />
          </div>

          <div className="flex-1">
            <Image alt="Logo" className="mx-auto" height={38} priority src="/logo.svg" width={100} />
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Link className="hidden sm:block" href={authRoute.login.path}>
              <StyledListItem>Login</StyledListItem>
            </Link>
            <Button
              className="rounded-xl"
              color="primary"
              style={{ background: "linear-gradient(180deg, #7D66F5 0%, #4A29C2 100%)" }}
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
          <IconButton className="hamburger-icon ml-3" onClick={() => setShowMenu((prev) => !prev)}>
            {showMenu ? <CloseOutlined /> : <MenuOutlined />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
