import axios from "axios"

function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

    return axios.get(BASE_URL).then(resp => {
        if(resp.ok == false) {
            throw new Error(resp.status)
        }
        return resp
    })
}

function fetchCatByBreed(breedId) {
    let fullURL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`

    return axios.get(fullURL).then(resp => {
        if(resp.ok === false) {
            throw new Error(resp.status)
        }
        return resp
    })
}

export { fetchBreeds, fetchCatByBreed }
