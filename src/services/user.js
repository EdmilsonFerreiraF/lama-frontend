import axios from "axios"
import { BASE_URL } from "../constants/apiConstants"

export const signup = (body, history, setLogged) => {
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        setLogged(true)
    }).catch(error => {
        console.log(error.message)
    })
}

