import styled from "styled-components";
import { Toolbar } from '@material-ui/core';

export const LogoContainer = styled.img`
    width: 90px;
    padding: 5px 0;
    cursor: pointer;

    @media screen and (max-width: 850px) {
        max-width: 200px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
`

export const ToolbarContainer = styled(Toolbar)`
    display: flex;
    border: 1px solid darkgrey;
    background: #fafafa;
    flex-grow: 1;
    justify-content: space-between;
`