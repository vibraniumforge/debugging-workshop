document.addEventListener("DOMContentLoaded", () => {
  // const username = document.getElementById("name-input").value;
  let joke;

  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchJoke();
  });
});

const form = document.getElementById("joke-form");
const jokeList = document.getElementById("joke-list");
const username = document.getElementById("name-input").value;

function fetchJoke() {
  const username = document.getElementById("name-input").value;
  if (username === "") return;
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(joke => appendJoke(joke))
    // .then(jokeData => (joke = jokeData.joke))
    .catch(err => console.log(err));
}

function appendJoke(joke) {
  const username = document.getElementById("name-input").value;
  const newJokeLi = document.createElement("li");
  newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke.joke}
    `;
  jokeList.appendChild(newJokeLi);
}

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   if (username === "") return;
//   fetchJoke();
// newJokeLi.innerHTML = `
//   <span class="username">${username} says:</span> ${joke}
//   `;
// jokeList.appendChild(newJokeLi);
// });
