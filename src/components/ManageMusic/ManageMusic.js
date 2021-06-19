import React from 'react';
import { Box } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import { ManageMusicItem, BoxContainer, SubtitleContainer } from './styles';

const ManageMusic = () => {
    return (
        <BoxContainer>
            <Box>
            <SubtitleContainer variant="h5" component="h2">Create a new music</SubtitleContainer>
            <ManageMusicItem>
                <MusicNoteIcon style={{ fontSize: 250 }}/>
            </ManageMusicItem>
            </Box>
            <Box>
            <SubtitleContainer variant="h5" component="h2">Browse music</SubtitleContainer>
            <ManageMusicItem>
                <AlbumIcon style={{ fontSize: 250 }}/>
            </ManageMusicItem>
            </Box>
        </BoxContainer>
    )
}

export default ManageMusic;