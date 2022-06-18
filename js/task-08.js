const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (mail === "" || password === "") {
        return alert("Введіть всі дані")
    };
    console.log('e-mail:', mail, "password", password);
    console.log(formElements);
    event.currentTarget.reset();
}
    
