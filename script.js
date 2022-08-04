const API = "https://api.adviceslip.com/advice/";
const MAX_ID = 200;
const dice = document.querySelector(".card-dice");
const id = document.getElementById("id");
const adviceText = document.querySelector(".card-text p q");

const getAdvice = async () => {
    const randomId = Math.floor(Math.random() * MAX_ID);
    const response = await fetch(API + randomId);
    const data = await response.json();
    const advice = data.slip;

    // change the dom
    id.textContent = advice.id;
    adviceText.innerHTML = advice.advice;
};

getAdvice();

dice.addEventListener("click", () => getAdvice());
