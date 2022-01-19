import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header';
import RoutersComponent from './components/Content/RoutesComponent';

import {darkTheme, lightTheme} from './components/Themes'
import { AppWrapper, Global } from './styledComponents/styledComponents';

import { ThemeProvider } from 'styled-components';
import {useDarkMode} from './hooks/useDarkMode'


function App() { 
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <BrowserRouter> 
    <AppWrapper>
     <ThemeProvider theme={themeMode}>
     <Global/>
     <div className='App'>

    <Header  theme={theme} themeToggler={themeToggler}/> 
    <RoutersComponent/>
    </div>
     </ThemeProvider>
     </AppWrapper>
    </BrowserRouter>
  )
}

export default App;
