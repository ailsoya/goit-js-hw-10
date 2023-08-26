import axios from "axios"

function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

    return axios
        .get(BASE_URL)
        .then(response => response.data)
        .catch(err => error(err))
}

export { fetchBreeds }