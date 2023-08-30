import axios from "axios"
import { fetchBreeds, fetchCatByBreed } from './cat-api.js'

const infoblock = document.querySelector('.cat-info')
const selector = document.querySelector("#selectElement")
axios.defaults.headers.common["x-api-key"] = "live_3L7cmA1jlPkmLCXojWnqLheo3EXPT3mir7WVPIJflud3GvXiLa4XjpTB9jFNiGPR"
  

fetchBreeds()
selector.addEventListener('change', function() {
    fetchCatByBreed(this.value)
})