import styled from "styled-components"
import { Typography } from '@material-ui/core';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const LogoContainer = styled.img`
    max-width: fit-content;
    display: flex;
    margin: 50px 0 80px 0;
`

export const TitleContainer = styled(Typography)`
    margin: 0 0 40px;
`