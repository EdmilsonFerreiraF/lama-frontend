import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';

import { BASE_URL } from "../../constants/apiConstants"
import { goToCreateMusic } from '../../routes/coordinator';

import MusicItem from '../../components/MusicItem/MusicItem';

import { FabStyled, TitleContainer, SubtitleContainer, MusicList } from './styles';

const Search = () => {
    useProtectPage()

    const params = useParams()
    const history = useHistory()

    const music = useRequestData(`${BASE_URL}/music/title/${params.title}`, [])

    return (
        <>
            <TitleContainer variant="h3" component="h1">
                Search
            </TitleContainer>

            <SubtitleContainer variant="h4" component="h2">
                Search results for "{params.title}"
            </SubtitleContainer>

            <MusicList>
                {music && music && music.map(music => (
                    <MusicItem 
                        key={music.id}
                        id={music.id}
                        title={music.title}
                        author={music.author}
                    />
                ))}
            </MusicList>
            <FabStyled color="primary" onClick={() => goToCreateMusic(history)}>
                +
            </FabStyled>
        </>
    )
}

export default Search;