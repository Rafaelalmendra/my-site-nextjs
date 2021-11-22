import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

import GlobalStyle from '../styles/global';
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
//import { usePersistedState } from '../utils/usePersistedState';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 })
  }, [])

  
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme}/>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;