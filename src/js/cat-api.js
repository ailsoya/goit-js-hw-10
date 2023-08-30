import axios from "axios"
const infoblock = document.querySelector('.cat-info')
const selector = document.querySelector('.breed-select')

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
            const markup = `<img src="${response.data[0].url}">
                            <div class="text-part"><h2>${response.data[0].breeds[0].name}</h2>
                            <p>${response.data[0].breeds[0].description}</p>
                            <span><b>Temperament: </b>${response.data[0].breeds[0].temperament}</span></div>`
            infoblock.innerHTML = markup
            console.log(response.data[0].breeds[0])
        })
        .catch(err => console.log(err))
}

export { fetchBreeds, fetchCatByBreed }
