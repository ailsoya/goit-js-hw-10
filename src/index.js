import axios from "axios"
import { fetchBreeds } from './cat-api'

const selector = document.querySelector('.breed-select')
axios.defaults.headers.common["x-api-key"] = "live_3L7cmA1jlPkmLCXojWnqLheo3EXPT3mir7WVPIJflud3GvXiLa4XjpTB9jFNiGPR"