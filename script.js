//TMDB

const API_KEY = "api_key=0b4d21390b4055fbcc3094f6a945b02b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500"

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then((responsive) => responsive.json()).then((data) => {
   console.log(data.results)
     showMovies(data.results);
})

}

function showMovies(data) {
 data.forEach(movie => {
  const moviEl = document.createElement("div");
  moviEl.classList.add("movie");
  moviEl.innerHTML = `
  
  `
 })
}