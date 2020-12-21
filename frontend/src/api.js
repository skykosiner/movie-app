import axios from "axios"

export default axios.create({
  baseURL: "https://imdb-api.com/en/API/Top250Movies/k_t3mv9452",
})
