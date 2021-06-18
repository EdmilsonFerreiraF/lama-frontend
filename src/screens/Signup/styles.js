import styled from "styled-components"
import { Typography, Button } from '@material-ui/core';

export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    padding: 70px 0 0;
    margin: 0 auto;
`

export const FormContainer = styled.form`
    display: grid;
    grid: auto/1fr 5fr;
    grid-gap: 30px;
    align-items: center;
`
export const TitleContainer = styled(Typography)`
    margin: 20px;
    text-align: center;
`

export const SubtitleContainer = styled(Typography)`
    margin: 0 0 50px 0;
    text-align: center;
    box-sizing: content-box;
`

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    grid-area: 5/1/5/3;
    margin: 60px 0 0;
`

export const ButtonContainer = styled(Button)`
    padding: 10px 20px;
`