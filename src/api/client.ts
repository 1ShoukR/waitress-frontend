import axios from "axios"

export const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
})


