import React from "react"
import { ListItemText } from '@material-ui/core';
import { ListItemContainer } from "./styles";

const MusicCard = (props) => {
    return (
        <ListItemContainer>
          <ListItemText primary={props.title} secondary={props.author}/>
        </ListItemContainer>
    );
}

export default MusicCard