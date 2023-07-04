const jokeele = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", fetchJoke);

fetchJoke();

async function fetchJoke() {
  try{
    const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  if(!response.ok){
    throw new Error("Error - failed to fetch")
  }
  const data = await response.json();
  jokeele.textContent = data.joke;
  }catch(err){

    jokeele.textContent = "Failed to fetch joke. Please try again later.";

    console.log("An error occurred:", err);
   
  }
}
