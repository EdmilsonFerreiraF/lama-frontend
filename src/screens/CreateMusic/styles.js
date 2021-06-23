import styled from "styled-components"
import { Typography, Button, InputLabel } from '@material-ui/core';

export const CreateMusicContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    padding: 20px 0 0;
    margin: 0 auto;

    .react-datepicker__tab-loop {
        position: absolute;
        z-index: 2;
    }
`

// export const LogoContainer = styled.img`
//     width: fit-content;
//     margin: 40px auto;
//     cursor: pointer;
    
//     @media screen and (max-width: 850px) {
//         max-width: 200px;
//     }
// `

export const FormContainer = styled.form`
    display: grid;
    grid: auto/1fr 5fr;
    align-items: center;
    grid-gap: 35px 15px;
    margin: 70px 0 0;

    @media screen and (max-width: 770px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        grid-gap: 20px 30px;
    }
`
export const TitleContainer = styled(Typography)`
    text-align: center;
    margin: 0 0 40px;
    font-size: 2.4rem;

    @media screen and (max-width: 850px) {
        font-size: 2em;
        margin: 20px;
    }
`

export const SubtitleContainer = styled(Typography)`
    text-align: center;
    box-sizing: content-box;
    font-size: 1.3rem;

    @media screen and (max-width: 850px) {
        font-size: 1.2rem;
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
    grid-area: 8/1/8/3;
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