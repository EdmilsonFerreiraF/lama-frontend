import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/apiConstants"

import { MusicDetailPageContainer, MusicImage } from "./styles"

const MusicDetailPage = () => {
    useProtectPage()

    const params = useParams()
    const data = useRequestData(`${BASE_URL}/music/${params.id}`, [])
    const music = data[0]

    return (
        <>
            <MusicDetailPageContainer>
                <MusicImage src={music && music.image} />
                
                <Typography variant="h5" color="primary" align="center">
                    {music && music.title}
                </Typography>
                <Typography align="center">
                    {music && music.description}
                </Typography>

                <audio src={`${BASE_URL}/music/${params.id}`} preload="auto" controls>
                    <p>Your browser doesn't support audio element</p>
                </audio>
            </MusicDetailPageContainer>
        </>
    )
}

export default MusicDetailPage;