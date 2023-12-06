//TMDB

const API_KEY = "api_key=0b4d21390b4055fbcc3094f6a945b02b";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY + "&query=";
console.log(SEARCH_URL);

const form = document.getElementById("form");
const search = document.getElementById("search");
const cancelButton = document.getElementById("cancelButton");
const main = document.getElementById("main");

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((responsive) => responsive.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}
let cancel = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    cancel = true;
    getMovies(SEARCH_URL + encodeURIComponent(searchTerm));
    search.value = "";
  } else {
    window.location.reload();
  }
});

cancelButton.addEventListener("click", () => {
  if (cancel) {
    cancel = false;
    window.location.reload();
  }
});

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
  <img src="${IMG_URL + poster_path}" alt="${title}">

   <div class="movie_info">
    <h3>${title}</h3>
    <span class="${getColor(vote_average)}">${vote_average}</span>
   </div>

   <div class="movie_overview">
   <h3>${title}<small>Overview</small></h3>
   <p>
   ${overview}
   </p>
   </div>
  `;
    main.appendChild(movieEl);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "blue";
  } else {
    return "red";
  }
}
