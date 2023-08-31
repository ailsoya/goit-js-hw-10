import axios from "axios"
import { Notify } from "notiflix"
import { fetchBreeds, fetchCatByBreed } from './cat-api.js'
axios.defaults.headers.common["x-api-key"] = "live_3L7cmA1jlPkmLCXojWnqLheo3EXPT3mir7WVPIJflud3GvXiLa4XjpTB9jFNiGPR" 

const select = document.querySelector("#single")
const infoblock = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')

fetchBreedsRender()
select.addEventListener('change', function() {
    fetchCatByBreedRender(this.value)
})  

function renderSelect(breeds) {
    const markup = breeds
        .map((breed) => {
            return `<option value="${breed.id}">${breed.name}</option>`
        })
        .join("")
    select.innerHTML = markup
}

function fetchBreedsRender() {
    select.style.display = 'none'
    loader.style.display = 'block'
    fetchBreeds()
        .then(breeds => renderSelect(breeds.data))
        .catch(error => {
            console.log(error)
            Notify.failure('Oops! Something went wrong! Try reloading the page!')
        })
        .finally(() => {
            loader.style.display = 'none'
            select.style.display = 'block'
        })
}

function renderCatDescription(breed) {
    const markup = `<img src="${breed.url}">
                    <div class="text-part"><h2>${breed.breeds[0].name}</h2>
                    <p class="descr">${breed.breeds[0].description}</p>
                    <span class="temp"><b>Temperament: </b>${breed.breeds[0].temperament}</span></div>`
    infoblock.innerHTML = markup
}

function fetchCatByBreedRender(value) {
    infoblock.style.display = 'none'
    loader.style.display = 'block'
    fetchCatByBreed(value)
        .then(breeds => {
            renderCatDescription(breeds.data[0])
            loader.style.display = 'none'
            infoblock.style.display = 'flex'
        })
        .catch(error => {
            console.log(error)
            Notify.failure('Oops! Something went wrong! Try reloading the page!')
            loader.style.display = 'none'
            infoblock.style.display = 'none'
        })
}