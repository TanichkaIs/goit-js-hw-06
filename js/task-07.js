const refs = {
    input: document.querySelector("#font-size-control"),
    outputText: document.querySelectorAll("#text"),
};

function useInput() {
    const fontSize = refs.input.value;
    refs.outputText.style.fontSize = `${fontSize}px`;
}
refs.input.addEventListener("input", useInput);
document.addEventListener("DOMContentLoaded", useInput, { once: true });