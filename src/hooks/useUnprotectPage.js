import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { goToMusicPaylists } from '../routes/coordinator';

export const useUnprotectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToMusicPaylists(history)
        }
    }, [history])
}