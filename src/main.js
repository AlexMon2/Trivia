//hidden
const btnInstruc = document.getElementById("instructions");
const rules = document.querySelector(".rules");

function reglas() {
    rules.classList.remove("hidden");
}

btnInstruc.addEventListener("click", reglas);

//API
const trivia = document.getElementById("trivia");

async function questions() {
    const answer = await fetch ("https://opentdb.com/api.php?amount=10");
    const data = await answer.json();
    //console.log(data);
    showQuestions(data.results[0]);
}

function showQuestions(data) {
    
}

questions();

