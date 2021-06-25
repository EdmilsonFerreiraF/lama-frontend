import React from "react"
import { useHistory } from "react-router-dom";
import { ListItemText } from '@material-ui/core';

import { goToMusicDetails } from "../../routes/coordinator";

import { ListItemContainer } from "./styles";

const MusicItem = (props) => {
  const history = useHistory()

    return (
        <ListItemContainer onClick={() => goToMusicDetails(history, props.id)}>
          {console.log(props.id)}
          <ListItemText primary={props.title} secondary={props.author}/>
        </ListItemContainer>
    );
}

export default MusicItem