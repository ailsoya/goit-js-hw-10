import axios from "axios"
import Notiflix from 'notiflix'
const selector = document.querySelector("#selectElement")
const infoblock = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')

function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds'
    selector.style.display = 'none'
    loader.style.display = 'block'

    return axios
        .get(BASE_URL)
        .then(function (response) {
            const markup = response.data
                .map((responsi) => {
                    return `<option value="${responsi.id}">${responsi.name}</option>`
                })
                .join("")
                selector.innerHTML = markup
                loader.style.display = 'none'
                selector.style.display = 'block'
                return response.data
        })
        .catch((err) => {
            loader.style.display = 'none'
            selector.style.display = 'block'
            Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`)
        })
}

function fetchCatByBreed(breedId) {
    let fullURL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    loader.style.display = 'block'
    
    return axios
        .get(fullURL)
        .then(function (response) {
            const markup = `<img src="${response.data[0].url}">
                            <div class="text-part"><h2>${response.data[0].breeds[0].name}</h2>
                            <p class="descr">${response.data[0].breeds[0].description}</p>
                            <span class="temp"><b>Temperament: </b>${response.data[0].breeds[0].temperament}</span></div>`
            infoblock.innerHTML = markup
            loader.style.display = 'none'
        })
        .catch((err) => {
            Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`)
            loader.style.display = 'none'
        })
}

export { fetchBreeds, fetchCatByBreed }
