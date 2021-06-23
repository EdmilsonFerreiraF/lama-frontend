import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { goToBrowseMusic, goToCreateMusic } from '../../routes/coordinator';

import { ManageMusicItem, BoxContainer, SubtitleContainer, MusicNoteIconContainer, AlbumIconContainer } from './styles';

const ManageMusic = () => {
    const history = useHistory()

    const handleCreateMusic = () => {
        goToCreateMusic(history)
    }

    const handleBrowseMusic = () => {
        goToBrowseMusic(history)
    }

    return (
        <BoxContainer>
            <Box>
                <SubtitleContainer variant="h5" component="h2">Create a new music</SubtitleContainer>
                <ManageMusicItem onClick={handleCreateMusic}>
                    <MusicNoteIconContainer/>
                </ManageMusicItem>
            </Box>
            <Box>
                <SubtitleContainer variant="h5" component="h2">Browse music</SubtitleContainer>
                <ManageMusicItem onClick={handleBrowseMusic}>
                    <AlbumIconContainer/>
                </ManageMusicItem>
            </Box>
        </BoxContainer>
    )
}

export default ManageMusic;