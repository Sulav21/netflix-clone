const API_KEY = "f20e58a977f24155f6456ad1666e45e0"
const baseURL="https://api.themoviedb.org/3"

export const request ={
    fetchTrending : baseURL+`/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals :baseURL+`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : baseURL+`/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies : baseURL+`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : baseURL+`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : baseURL+`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : baseURL+`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies :baseURL+`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}