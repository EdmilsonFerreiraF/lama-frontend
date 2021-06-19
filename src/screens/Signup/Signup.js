import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';
import { signup } from "../../services/user"
import { useForm } from "../../hooks/useForm"
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import LoggedContext from '../../context/LoggedContex';
import { FormContainer, SignupContainer, TitleContainer, SubtitleContainer, ButtonContainer, RegisterContainer, LogoContainer, InputLabelContainer, LoginSpanContainer } from './styles';
import logo from '../../assets/logo.png'
import { goToLogin, goToIndex } from '../../routes/coordinator'

const Signup = () => {
    useUnprotectPage()

    const history = useHistory()
    const loggedContext = useContext(LoggedContext)

    const { form, onChange } = useForm({ name: "", email: "", password: "" })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        
        signup(form, history, loggedContext.setLogged)
    }

    const handleLoginButton = () => {
        goToLogin(history)
    }

    const handleLogoButton = () => {
        goToIndex(history)
    }

    return (
        <SignupContainer>
            <LogoContainer src={logo} onClick={handleLogoButton}/>

            <TitleContainer variant="h3" component="h1">
                Signup
            </TitleContainer>

            <SubtitleContainer variant="h4" component="h2">
                Create a new account
            </SubtitleContainer>

            <FormContainer onSubmit={handleSubmission} >
                <InputLabelContainer>Name</InputLabelContainer>
                <TextField 
                    label="Name"
                    variant="filled"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                />

                <InputLabelContainer>Nickname</InputLabelContainer>
                <TextField 
                    label="Nickname"
                    variant="filled"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleInputChange}
                />

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
                        Signup
                    </ButtonContainer>
                    <LoginSpanContainer>
                    <Typography variant="body">
                            Is already registered?
                        </Typography>
                        <ButtonContainer
                            variant="outlined"
                            color="primary"
                            onClick={() => handleLoginButton(history)}
                        >
                            Login
                        </ButtonContainer>
                    </LoginSpanContainer>
                </RegisterContainer>
            </FormContainer>
        </SignupContainer>
    )
}

export default Signup;