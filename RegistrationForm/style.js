const secondsection = document.querySelector(".second-section");
const thirdsection = document.querySelector(".third-section");
const secondpage2 = document.querySelector(".page2-second-section");
const secondpage3 = document.querySelector(".page2-third-section");
const nextPage = document.querySelector(".nextPage");
const backPage = document.querySelector(".backPage");
const Submit = document.querySelector(".Submit");
const fourthsection = document.querySelector(".fourth-section");

nextPage.addEventListener("click", () => {
  secondsection.classList.add("hidden");
  thirdsection.classList.add("hidden");
  secondpage2.classList.remove("hidden");
  secondpage3.classList.remove("hidden");
  nextPage.classList.add("hidden");
  backPage.classList.remove("hidden");
  Submit.classList.remove("hidden");
});

backPage.addEventListener("click", () => {
  secondsection.classList.remove("hidden");
  thirdsection.classList.remove("hidden");
  secondpage2.classList.add("hidden");
  secondpage3.classList.add("hidden");
  nextPage.classList.remove("hidden");
  backPage.classList.add("hidden");
  Submit.classList.add("hidden");
});
