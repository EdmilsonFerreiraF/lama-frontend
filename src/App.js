import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import styled from 'styled-components'

import Router from './routes/Router';
import theme from './constants/theme';
import LoggedContext from './context/LoggedContex';

import MainAppBar from './components/MainAppBar/MainAppBar'

import './App.css'

const Container = styled.div`
  padding: 120px 20px 40px 20px;
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