import axios from "axios"

import { BASE_URL } from "../constants/apiConstants"
import { goToBrowseMusic, goToManageMusic } from "../routes/coordinator"

export const login = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/user/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        
        setLogged(true)
        goToBrowseMusic(history)
    }).catch(() => {
        alert("Email or password incorret")
    })
}

export const signup = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        
        setLogged(true)
        goToManageMusic(history)
    }).catch(error => {
        console.log(error.message)
    })
}

export const search = (body, history, setLogged) => {
    axios.get(`${BASE_URL}/search`, body).then(response => {
        localStorage.getItem("token", response.data.token)
        // goToManageMusic(history)
    }).catch(error => {
        console.log(error.message)
    })
}