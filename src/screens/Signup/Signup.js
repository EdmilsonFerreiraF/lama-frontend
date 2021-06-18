import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, InputLabel  } from '@material-ui/core';
import { signup } from "../../services/user"
import { useForm } from "../../hooks/useForm"
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import LoggedContext from '../../context/LoggedContex';
import { FormContainer, SignupContainer, TitleContainer, SubtitleContainer, ButtonContainer, RegisterContainer } from './styles';

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

    return (
        <SignupContainer>
            <TitleContainer variant="h3" component="h1">
                Signup
            </TitleContainer>
            
            <SubtitleContainer variant="h5" component="h2">
                Create a new account
            </SubtitleContainer>

            <FormContainer onSubmit={handleSubmission} >
                <InputLabel>Name</InputLabel>
                <TextField 
                    label="Name"
                    variant="filled"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                />

                <InputLabel>Nickname</InputLabel>
                <TextField 
                    label="Nickname"
                    variant="filled"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleInputChange}
                />

                <InputLabel>Email</InputLabel>
                <TextField 
                    label="E-mail"
                    variant="filled"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />

                <InputLabel>Password</InputLabel>
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
                    <ButtonContainer
                        variant="outlined"
                        color="primary"
                    >
                        Login
                    </ButtonContainer>
                </RegisterContainer>
            </FormContainer>
        </SignupContainer>
    )
}

export default Signup;