import { root } from "./rootOfGenresPage";

window.onscroll = checkBtn;
root.scrollToTopBtn.addEventListener("click", scrollUp);

function checkBtn() {
  if (isEnoughBottom()) {
    activeBtn();
    updateProgressBar();
    return;
  }

  hiddenBtn();
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function updateProgressBar() {
  const progress = getScrollProgress();

  root.BtnTopProgressLine.style.strokeDasharray = `${progress}, 100`;
}

function isEnoughBottom() {
  return (
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
  );
}

function activeBtn() {
  root.scrollToTopBtn.style.display = "block";
}

function hiddenBtn() {
  root.scrollToTopBtn.style.display = "none";
}

function getScrollProgress() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollDistanceFromTop = scrollTop || document.body.scrollTop;
  const allDistance = scrollHeight - clientHeight;

  return (scrollDistanceFromTop / allDistance) * 100;
}
