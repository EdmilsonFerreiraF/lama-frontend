import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/apiConstants"

import { MusicDetailPageContainer, ButtonContainer } from "./styles"
import { deleteMusic } from '../../services/music';

const MusicDetailPage = () => {
    useProtectPage()

    const params = useParams()
    const history = useHistory()
    const music = useRequestData(`${BASE_URL}/music/${params.id}/details`, [])

    const handleDeleteButton = (id) => {
        deleteMusic(id, history)
    }

    return (
        <>
            <MusicDetailPageContainer>
                <Typography variant="h5" color="primary" align="center">
                    {music && music.title}
                </Typography>
                <Typography align="center">
                    Author: {music && music.author}
                </Typography>
                <Typography align="center">
                    Date: {music && music.date}
                </Typography>
                <Typography align="center">
                    Genre: {music && music.genre}
                </Typography>
                <Typography align="center">
                    Album: {music && music.album}
                </Typography>

                <audio src={`${BASE_URL}/music/${params.id}`} preload="auto" controls>
                    <p>Your browser doesn't support audio element</p>
                </audio>

                <ButtonContainer
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteButton(params.id)}
                >
                    <DeleteIcon></DeleteIcon>
                    Delete music
                </ButtonContainer>
            </MusicDetailPageContainer>
        </>
    )
}

export default MusicDetailPage;