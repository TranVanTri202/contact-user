// Import các components từ Material-UI
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, InputBase, Button, createTheme, ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import avatar from "../asset/img/avatar.png"
import { Search, Settings } from '@mui/icons-material';
import { useState } from 'react';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
function Navbar({onSearchChange, modeTheme}) {
  const [modeDark, setModeDark] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const handleChangeValue = (e) =>{
      const newValue = e.target.value
      setSearchValue(newValue)
      onSearchChange(newValue)
  }
  const handleChangMode = () =>{
    setModeDark(!modeDark)
    modeTheme(modeDark)
  }

  return (
    <>

    <AppBar position="static">
      <Toolbar>
        <Box sx={{display:'flex', alignItems:'center', gap:1}}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{fontWeight:'bold'}}>Word</Typography>
          <Typography variant="h6">Frontend Task</Typography>
        </Box>
        <Box sx={{margin:'auto'}}>
          <div style={{ position: 'relative', backgroundColor: 'rgb(220, 240, 255)', borderRadius: '4px' }}>
            <InputBase
              placeholder="Search…"
              startAdornment={<Search sx={{marginRight:'10px'}} />}
              sx={{ marginLeft: '8px', width: '400px' }}
              value={searchValue}
              onChange={handleChangeValue}
            />
          </div>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button sx={{color:"white"}} onClick={handleChangMode}>{modeDark ? <WbSunnyIcon /> : <ModeNightIcon />}</Button>
          <Settings />
          <Avatar src={avatar} sx={{ width: 35, height: 35 }} />
        </Box>
      </Toolbar>
    </AppBar>
    </>

  );
}

export default Navbar;
