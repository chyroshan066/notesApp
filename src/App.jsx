import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './Pages/Notes'
import Create from './Pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { pink, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    // secondary: pink
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Notes />}></Route>
            <Route path='/create' element={<Create />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
