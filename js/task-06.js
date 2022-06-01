const inputForm = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length]');

inputForm.addEventListener("blur", () => {
    if (inputLength.value.length === Number(inputLength.dataset.length)) {
        inputForm.classList.remove("invalid");
        inputForm.classList.add("valid");
    } else {

        inputForm.classList.remove("valid");
        inputForm.classList.add("invalid");
    }
});