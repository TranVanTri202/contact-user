import { createTheme } from "@mui/material/styles";

// Chủ đề sáng
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

// Chủ đề tối
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#000", 
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#444", 
          color: "#fff", 
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
