import React, { useState } from 'react'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './constants/theme';
import MainAppBar from './components/MainAppBar/MainAppBar'
import LoggedContext from './context/LoggedContex';

const Container = styled.div`
  padding-top: 64px;
`

const App = () => {
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

  const loggedContext = {logged, setLogged}

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LoggedContext.Provider value={loggedContext} >
          <MainAppBar />
          <Container>
            <Router />
          </Container>
        </LoggedContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;