import { popularFilms } from "./popularFilms";
import { root } from "./rootOfMainPage";
import { getSrcImg } from "../universal/getSrcImg";
import { initAllRatings } from "../universal/initAllRatings";

export async function setInfoOfMostPopularFilm() {
  const {
    poster_path: src,
    vote_average: rating,
    title: name,
    overview: text,
  } = popularFilms[0];

  const srcOfImg = await getSrcImg(src);

  root.mostPopularFilm.img.src = srcOfImg;
  root.mostPopularFilm.name.textContent = name;
  root.mostPopularFilm.text.textContent = text;

  const ratingValue = document.querySelector(".most-popular-rating__value");
  ratingValue.textContent = Math.round(rating * 10) / 10;
  initAllRatings([root.mostPopularFilm.rating]);
}
