import axios from "axios"
import { BASE_URL } from "./api"

export const getAllprod = async () => {
    let res = await axios.get(BASE_URL)
    return res.data
}

export const getById = async (id) => {
    let res = await axios.get(BASE_URL + id)
    return res.data
}
export const postData = async (obj) => {
    let res = await axios.post(BASE_URL, obj)
    return res.data
}

export const deleteById = async (id) => {
    let res = await axios.delete(BASE_URL + id)
    return res.data
}


export const patchById = async (id, obj) => {
    let res = await axios.patch(BASE_URL + id, obj)
    return res.data
}
export const puthById = async (id, obj) => {
    let res = await axios.put(BASE_URL + id, obj)
    return res.data
}