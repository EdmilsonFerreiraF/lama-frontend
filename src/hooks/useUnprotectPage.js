import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

export const useUnprotectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

    }, [history])
}