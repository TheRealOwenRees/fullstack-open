import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => axios.get(baseUrl)

export const createPerson = newObject => axios.post(baseUrl, newObject)

export const deletePerson = id => axios.delete(`${baseUrl}/${id}`)

export const editNumber = (id, { name, number }) => axios.put(`${baseUrl}/${id}`, {
    'name': name,
    'number': number
})