import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Button } from '@material-ui/core'
import LoggedContext from '../../context/LoggedContex'
import SearchBar from '../SearchBar/SearchBar'
import { goToLogin, goToIndex } from '../../routes/coordinator'
import { ButtonsContainer, LogoContainer, ToolbarContainer } from "./styles"
import logo from '../../assets/logo.png'

const MainAppBar = () => {
    const history = useHistory()
    const loggedContext = useContext(LoggedContext)

    const handleLoginOrLogoutClick = () => {
      const token = localStorage.getItem("token")

      if (token) {
        localStorage.removeItem("token")
        loggedContext.setLogged(false)
      }

      goToLogin(history)
    }

    const handleLogoButton = () => {
      goToIndex(history)
    }

    return (
        <AppBar color="transparent">
          <ToolbarContainer>
            <LogoContainer src={logo} onClick={handleLogoButton}/>
            <ButtonsContainer>
              <Button color="inherit" onClick={handleLoginOrLogoutClick}>
                {loggedContext.logged ? "Signup" : "Login"}
              </Button>
              <SearchBar />
            </ButtonsContainer>
          </ToolbarContainer>
        </AppBar>
    )
}

export default MainAppBar;