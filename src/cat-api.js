import axios from "axios"
const selector = document.querySelector('.breed-select')
const infoblock = document.querySelector('.cat-info')

function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

    return axios
        .get(BASE_URL)
        .then(function (response) {
            const markup = response.data
                .map((responsi) => {
                    return `<option value="${responsi.id}">${responsi.name}</option>`
                })
                .join("")
                selector.innerHTML = markup
                return response.data
        })
        .catch(err => console.log(err))
}

function fetchCatByBreed(breedId) {
    let fullURL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    return axios
        .get(fullURL)
        .then(function (response) {
            const markup = `<img src="${response.url}">
                            <h2>${response[0].breeds[0].name}</h2>`
            infoblock.innerHTML = markup
        })
        .catch(err => console.log(err))
}

fetchBreeds()
selector.addEventListener('change', function() {
    fetchCatByBreed(this.value)
})