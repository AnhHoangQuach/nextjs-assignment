"use client"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Roboto_Slab } from "next/font/google"
import { PropsWithChildren } from "react"

const appFont = Roboto_Slab({ subsets: ["vietnamese"] })

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1200,
      md: 900,
      sm: 600,
      xl: 1600,
      xs: 0,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
        disableElevation: true,
        size: "medium",
        variant: "contained",
      },
      styleOverrides: {
        sizeLarge: { fontSize: 18, minHeight: 48, minWidth: 48 },
        sizeMedium: { fontSize: 16, minHeight: 40, minWidth: 40 },
        sizeSmall: { fontSize: 14, minHeight: 32, minWidth: 32 },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },

    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "sm",
      },
    },
    MuiPagination: {
      defaultProps: {
        shape: "rounded",
        size: "large",
        variant: "outlined",
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
        size: "medium",
        variant: "outlined",
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#725dff",
    },
    secondary: {
      main: "#009688",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: { fontWeight: 700, textTransform: "none" },
    fontFamily: appFont.style.fontFamily,
  },
})

const AppTheme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppTheme
