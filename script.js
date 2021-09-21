//TMDB

const API_KEY = "api_key=0b4d21390b4055fbcc3094f6a945b02b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then((responsive) => responsive.json()).then((data) => {
   console.log(data.results)
     showMovies(data.results);
})

}

function showMovies(data) {
 main.innerHTML = "";

 data.forEach(movie => {
  const { title, poster_path, vote_average, release_date} = movie
  const moviEl = document.createElement("div");
  moviEl.classList.add("movie");
  moviEl.innerHTML = `
  <img src="${IMG_URL+poster_path}" alt="${title}">

   <div class="movie_info">
    <h3>${title}</h3>
    <span class="${getColor(vote_average)}">${vote_average}</span>
   </div>

   <div class="movie_date">
    ${release_date}
   </div>
  `

  main.appendChild(moviEl);
 })
}

function getColor(vote) {
 if(vote >= 8){
  return "green"
 }else if(vote >=6){
  return "blue"
 }else {
  return "red"
 }
}