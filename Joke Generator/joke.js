const jokeElement = document.getElementById("joke");
const btn = document.getElementById("btn");
const line = document.getElementById("line");

async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    return data;
}

btn.addEventListener("click", async () => {
    const jokeData = await getJoke();
    jokeElement.innerText  = jokeData.setup;
    line.textContent = jokeData.punchline;
});
