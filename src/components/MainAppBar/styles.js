import styled from "styled-components";
import { Toolbar } from '@material-ui/core';

export const LogoContainer = styled.img`
    cursor: pointer;
    padding: 5px 0;
    width: 90px;

    @media screen and (max-width: 850px) {
        max-width: 200px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
`

export const ToolbarContainer = styled(Toolbar)`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    border: 1px solid darkgrey;
    background: #fafafa;
`