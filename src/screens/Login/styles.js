import styled from "styled-components"
import { Typography, Button, InputLabel } from '@material-ui/core';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    padding: 20px 0 0;
    margin: 0 auto;
`

export const LogoContainer = styled.img`
    width: fit-content;
    margin: auto;
    cursor: pointer;
    margin: 0 auto 40px auto;

    @media screen and (max-width: 850px) {
        max-width: 200px;
    }
`

export const FormContainer = styled.form`
    display: grid;
    grid: auto/1fr 5fr;
    grid-gap: 35px 15px;
    align-items: center;
    margin: 70px 0 0;

    @media screen and (max-width: 770px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        grid-gap: 20px 30px;
    }
`
export const TitleContainer = styled(Typography)`
    margin: 0 0 40px;
    text-align: center;

    @media screen and (max-width: 850px) {
        font-size: 2em;
        margin: 20px;
    }
`

export const SubtitleContainer = styled(Typography)`
    text-align: center;
    box-sizing: content-box;

    @media screen and (max-width: 850px) {
        font-size: 1.4rem;
    }
`

export const InputLabelContainer = styled(InputLabel)`
    @media screen and (max-width: 770px) {
        display: none;
    }
`

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    grid-area: 5/1/5/3;
    align-items: flex-end;
    margin: 20px 0 0;
`

export const LoginSpanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
`

export const ButtonContainer = styled(Button)`
    padding: 10px 20px;
`