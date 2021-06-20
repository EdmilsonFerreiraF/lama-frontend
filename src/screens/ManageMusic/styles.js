import styled from "styled-components";
import { Box, Typography } from '@material-ui/core';

export const ManageMusicItem = styled(Box)`
background: lightblue;
color: #3894FF;
cursor: pointer;

&:hover {
    color: #348bf0;
}

&:active {
color: #4898f4;
}
`

export const SubtitleContainer = styled(Typography)`
    margin: 0 0 20px 0;
    text-align: center;
    box-sizing: content-box;

    @media screen and (max-width: 850px) {
        margin: 10px 0 35px;
        font-size: 1.4rem;
    }
`

export const BoxContainer = styled(Box)`
    display: flex;
    max-width: 1200px;
    justify-content: space-evenly;
    margin: 100px auto 0 auto
;`