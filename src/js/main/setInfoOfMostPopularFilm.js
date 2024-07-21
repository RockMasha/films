import { root } from "./rootOfMainPage";
import { getSrcImg } from "../universal/getSrcImg";
import { initAllRatings } from "../universal/initAllRatings";
import { fetchPopularMovies } from "../service/api";

export async function setInfoOfMostPopularFilm() {
  const info = await getInfoOfMostPopularFilm();

  setContent(info);
  setRating(info.rating);
}

async function getInfoOfMostPopularFilm() {
  const popularFilms = await fetchPopularMovies();
  const {
    poster_path: src,
    vote_average: rating,
    title: name,
    overview: text,
  } = popularFilms[0];

  const srcOfImg = await getSrcImg(src);

  return { srcOfImg, rating, name, text };
}

function setContent(info) {
  const { srcOfImg, name, text } = info;

  root.mostPopularFilm.img.src = srcOfImg;
  root.mostPopularFilm.name.textContent = name;
  root.mostPopularFilm.text.textContent = text;
}

function setRating(rating) {
  const ratingValue = document.querySelector(".most-popular-rating__value");
  ratingValue.textContent = Math.round(rating * 10) / 10;
  initAllRatings([root.mostPopularFilm.rating]);
}
