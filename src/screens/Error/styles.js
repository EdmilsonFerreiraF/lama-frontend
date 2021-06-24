import styled from "styled-components"
import { Typography } from '@material-ui/core';

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
export const LogoContainer = styled.img`
    display: flex;
    max-width: fit-content;
    margin: 50px 0 80px 0;
`

export const TitleContainer = styled(Typography)`
    margin: 0 0 40px;
`