import React from 'react';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import { goToBrowseMusic, goToCreateMusic } from '../../routes/coordinator';
import { ManageMusicItem, BoxContainer, SubtitleContainer } from './styles';

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
                    <MusicNoteIcon style={{ fontSize: 250 }}/>
                </ManageMusicItem>
            </Box>
            <Box>
                <SubtitleContainer variant="h5" component="h2">Browse music</SubtitleContainer>
                <ManageMusicItem onClick={handleBrowseMusic}>
                    <AlbumIcon style={{ fontSize: 250 }}/>
                </ManageMusicItem>
            </Box>
        </BoxContainer>
    )
}

export default ManageMusic;