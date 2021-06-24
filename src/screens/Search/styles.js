import styled from "styled-components"
import { Typography, Fab } from '@material-ui/core';

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
export const MusicList = styled.div`
    display: grid;
    grid: auto/repeat(4, max-content);
    margin: 100px 0 0;
`

export const FabStyled = styled(Fab)`
    position: fixed;
    right: 20px;
    bottom: 20px;
`