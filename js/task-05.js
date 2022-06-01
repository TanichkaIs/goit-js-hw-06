
const refs = {
input: document.querySelector("#name-input"),
output: document.querySelector("#name-output"),
};

const DEFAULF_USERNAME = "Anonymous";

function useInput(event) {
    const userInput = event.currentTarget.value;

    if (userInput === "") {
        refs.output.textContent = DEFAULF_USERNAME
    } else {
        refs.output.textContent = userInput
    }
}

refs.input.addEventListener("input", useInput);