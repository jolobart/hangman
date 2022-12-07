// Hangman game
var gameForm = document.getElementById("gameForm");
var letter = gameForm.elements["letter"];
var categoryContainer = document.getElementById("container--category");

// Create an array of words
var category = {
  fruits: ["apple", "banana"],
  cars: ["honda", "toyota"],
  games: ["valorant", "league of legends"],
};

var chosenCategory;

// Display categories
for (let i = 0; i < Object.keys(category).length; i++) {
  let buttonCategory = document.createElement("button");
  buttonCategory.classList.add("button--category");
  buttonCategory.innerText = Object.keys(category)[i];
  categoryContainer.appendChild(buttonCategory);
}

// Initialize category
categoryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  chosenCategory = target.innerText;
});

gameForm.addEventListener("submit", (event) => {
  // handle the form data
  event.preventDefault();
  if (letter.value.length > 1) {
    alert("Input only 1 letter!");
    letter.value = "";
  }
});
