import { root } from "./rootOfMainPage";
import { getSrcImg } from "../universal/getSrcImg";
import { fetchPopularMovies } from "../service/api";

export async function setInfoOfMostPopularFilm() {
  const info = await getInfoOfMostPopularFilm();

  setContent(info);
  setRating(info.rating);
}

async function getInfoOfMostPopularFilm() {
  const requestAnswer = await fetchPopularMovies();
  const { results: popularFilms } = requestAnswer;
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
  root.mostPopularFilm.ratingValue.textContent = Math.round(rating * 10) / 10;
  root.mostPopularFilm.ratingStar.style.width = `${rating / 0.1}%`;
}
