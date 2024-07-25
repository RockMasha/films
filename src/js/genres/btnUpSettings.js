import { root } from "./rootOfGenresPage";

window.onscroll = checkBtn;
root.scrollToTopBtn.addEventListener("click", scrollUp);

function checkBtn() {
  if (isEnoughBottom()) {
    root.scrollToTopBtn.style.display = "block";
    return;
  }

  root.scrollToTopBtn.style.display = "none";
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function isEnoughBottom() {
  return (
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
  );
}
