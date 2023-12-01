import { createTheme, ThemeProvider } from '@mui/material/styles';

// Chủ đề sáng
const lightTheme = createTheme({
  palette: {
    mode: 'light', // Chỉ định chủ đề là chủ đề sáng
    primary: {
      main: '#2196f3', // Màu chính cho chủ đề sáng
    },
    secondary: {
      main: '#f44336', // Màu phụ cho chủ đề sáng
    },
    // Các thiết lập màu sắc khác ở đây...
  },
 
 
});

// Chủ đề tối
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Chỉ định chủ đề là chủ đề tối
    primary: {
      main: '#90caf9', // Màu chính cho chủ đề tối
    },
    secondary: {
      main: '#f48fb1', // Màu phụ cho chủ đề tối
    },
    // Các thiết lập màu sắc khác ở đây...
  },

  // Các thiết lập khác cho chủ đề tối ở đây...
});

export { lightTheme, darkTheme };
