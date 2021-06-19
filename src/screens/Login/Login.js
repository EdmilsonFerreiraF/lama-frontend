import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core'
import { useForm } from "../../hooks/useForm"
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import LoggedContext from '../../context/LoggedContex';
import { login } from '../../services/user';
import { goToSignup, goToIndex } from '../../routes/coordinator'
import { FormContainer, LoginContainer, TitleContainer, SubtitleContainer, ButtonContainer, RegisterContainer, LogoContainer, InputLabelContainer, LoginSpanContainer } from './styles';
import logo from '../../assets/logo.png'

const Login = () => {
    useUnprotectPage()

    const history = useHistory()
    const loggedContext = useContext(LoggedContext)
    const { form, onChange } = useForm({ email: "", password: "" })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        
        login(form, history, loggedContext.setLogged)
    }

    const handleSignupButton = () => {
        goToSignup(history)
    }

    const handleLogoButton = () => {
        goToIndex(history)
    }

    return (
            <LoginContainer>
                <LogoContainer src={logo} onClick={handleLogoButton}/>
                <TitleContainer variant="h3" component="h1">
                    Login
                </TitleContainer>

                <SubtitleContainer variant="h5" component="h2">
                    Create a new account
                </SubtitleContainer>

                <FormContainer onSubmit={handleSubmission}>
                    <InputLabelContainer>Email</InputLabelContainer>
                    <TextField 
                        label="E-mail"
                        variant="filled"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                    />

                    <InputLabelContainer>Password</InputLabelContainer>
                    <TextField  
                        label="Password"
                        variant="filled"                
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                    />
                    <RegisterContainer>
                    <ButtonContainer
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </ButtonContainer>
                    <LoginSpanContainer>
                    <Typography variant="body2">
                        Don't have an account yet?
                    </Typography>
                    <ButtonContainer
                        variant="outlined"
                        color="primary"
                        onClick={() => handleSignupButton(history)}
                    >
                        Sign up
                    </ButtonContainer>
                    </LoginSpanContainer>
                </RegisterContainer>
            </FormContainer>
        </LoginContainer>
    )
}

export default Login;