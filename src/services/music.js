import axios from "axios"

import { BASE_URL } from "../constants/apiConstants"
import { goToBrowseMusic } from "../routes/coordinator"

export const createMusic = (body, history) => {
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/music/create`, body, {
        headers: {
            Authorization: token,
            "Content-Type": `multipart/form-data; boundary=${body._boundary}`
        }
    }).then((response) => {
        console.log(response)
        goToBrowseMusic(history)
    }).catch(error => {
        alert("Email or password invalid")
        console.log(error.message)
    })
}