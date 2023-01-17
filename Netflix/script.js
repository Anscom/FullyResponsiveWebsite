const plus = document.querySelector(".plus");
const questions = document.querySelector(".questions");
const answer = document.querySelector(".question-description");
const line = document.querySelector(".line");

questions.addEventListener("click", () => {
  answer.classList.toggle("active");
  plus.classList.toggle("active");
});
