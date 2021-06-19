import axios from "axios"
import { BASE_URL } from "../constants/apiConstants"
import { goToMusicPaylists } from "../routes/coordinator"

export const login = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/user/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        setLogged(true)
        goToMusicPaylists(history)
    }).catch(error => {
        alert("Email ou senha inválidos!")
        console.log(error.message)
    })
}

export const signup = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        console.log(response)
        console.log(response.data)
        console.log(response.data.token)
        setLogged(true)
        goToMusicPaylists(history)
    }).catch(error => {
        console.log(error.message)
    })
}

export const search = (body, history, setLogged) => {
    axios.get(`${BASE_URL}/search`, body).then(response => {
        localStorage.getItem("token", response.data.token)
        // goToMusicPaylists(history)
    }).catch(error => {
        console.log(error.message)
    })
}