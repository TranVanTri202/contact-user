import { useState } from "react"
import Navbar from "../components/Navbar"
import TableData from "../components/TableData"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { lightTheme, darkTheme } from "../components/ModeTheme"


const LandingPage = () =>{
  const [valueSearch, setValueSearch] = useState("")
  const [modeDark , setModeDark] = useState(false)
    const handleSearchChange = (value) =>{
      setValueSearch(value)
    }
    const handleChangeMode = (mode) =>{
      setModeDark(!mode)
    }
    return (
        <ThemeProvider theme={modeDark ? darkTheme : lightTheme} >
          <CssBaseline  />
        <Navbar onSearchChange={handleSearchChange} modeTheme={handleChangeMode}/>
        <TableData valueSearch={valueSearch} />
        </ThemeProvider>
    )
}

export default LandingPage