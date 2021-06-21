import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from "../../constants/apiConstants"
import MusicItem from '../../components/MusicItem/MusicItem';
import { goToCreateMusic } from '../../routes/coordinator';
import { FabStyled, BrowseMusicContainer } from './styles';

const BrowseMusic = () => {
    const history = useHistory()
    useProtectPage()

    const music = useRequestData(`${BASE_URL}/music/all`, [])
console.log(music)
    return (
        <BrowseMusicContainer>
            {music && music && music.map(music => (
                 <MusicItem 
                    key={music.id}
                    title={music.title}
                    author={music.author}
                />
            ))}
            <FabStyled color="primary" onClick={() => goToCreateMusic(history)}>
                +
            </FabStyled>
        </BrowseMusicContainer>
    )
}

export default BrowseMusic;