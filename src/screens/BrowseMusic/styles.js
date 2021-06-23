import styled from "styled-components"
import Fab from '@material-ui/core/Fab';

export const BrowseMusicContainer = styled.div`
    display: grid;
    grid: auto/repeat(4, max-content);
    margin: 100px 0 0;
`

export const FabStyled = styled(Fab)`
    position: fixed;
    right: 20px;
    bottom: 20px;
`