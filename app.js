let rating = 0;
const ratingNum = document.querySelectorAll(".rating-num");
const button = document.querySelector("#btn-1");
const value = document.querySelector("#rating-value");
const cardOne = document.querySelector("#card-1");
const cardTwo = document.querySelector("#card-2");

const clearActiveStates = () => {
  for (let i = 0; i < ratingNum.length; i++) {
    const item = ratingNum[i];
    item.classList.remove("active");
  }
};

for (let i = 0; i < ratingNum.length; i++) {
  const item = ratingNum[i];
  item.addEventListener("click", (e) => {
    const { target } = e;
    clearActiveStates();
    target.classList.add("active");
    rating = target.innerHTML;
  });
}

button.addEventListener("click", (e) => {
  if (rating) {
    value.innerHTML = rating;
    cardOne.classList.add("hidden");
    cardTwo.classList.remove("hidden");
  }
});
