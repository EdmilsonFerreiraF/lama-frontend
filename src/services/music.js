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
    }).then(() => {
        goToBrowseMusic(history)
    }).catch(() => {
        alert("Email or password invalid")
    })
}

export const deleteMusic = (id, history) => {
    const token = localStorage.getItem("token")

    axios.delete(`${BASE_URL}/music/${id}`, {
        headers: {
            Authorization: token,
        }
    }).then(() => {
        goToBrowseMusic(history)
    }).catch(() => {
        alert("Email or password invalid")
    })
}