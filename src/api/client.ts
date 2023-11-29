import axios from "axios"

export const client = axios.create({
	// baseURL: 'https://jsonplaceholder.typicode.com/',
	baseURL: 'http://127.0.0.1:3000/api',
	headers: {
		'Content-Type': 'application/json',
	},
});


