const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// define the filtercard function
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    card.classList.add("hide");
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
};

// add click event listener to each filter button
filterButtons.forEach((button) => button.addEventListener("click", filterCards));
