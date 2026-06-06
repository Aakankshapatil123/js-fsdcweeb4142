import axios from "axios";

const baseURL = 'https://6a229f4d5c610353286a1696.mockapi.io'

const instance = axios.create({
   baseURL,
   timeout: 1000,
   headers: {
    'Content-Type': 'application/json'
   },
});

export default instance;