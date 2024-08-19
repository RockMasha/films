const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

export function getSrcImg(srcOfImg) {
  if(srcOfImg){
    return `${imageBaseUrl}${srcOfImg}`;
  }
  return "./img/default_img.svg"
}