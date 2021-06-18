import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/core/styles';

import theme from './constants/theme';
import LoggedContext from './context/LoggedContex';
import './App.css'

const App = () => {
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

  const loggedContext = {logged, setLogged}

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
      <BrowserRouter>
        <LoggedContext.Provider value={loggedContext} >
          <Router />
        </LoggedContext.Provider>
      </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
