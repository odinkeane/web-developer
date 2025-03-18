var passwordView = document.querySelector("#password-view");
var emailInput = document.querySelector("#email-input");
var passwordInput = document.querySelector("#password-input");
var registration = document.querySelector("#registration");
var emailErrorsBlock = document.querySelector("#email-errors-block");
var passwordErrorsBlock = document.querySelector("#password-errors-block");
if (passwordView) {
    passwordView.addEventListener("mousedown", function () {
        if (passwordInput)
            passwordInput.setAttribute("type", "text");
    });
    passwordView.addEventListener("mouseup", function () {
        if (passwordInput)
            passwordInput.setAttribute("type", "password");
    });
}
if (registration) {
    registration.addEventListener("click", function () {
        var email = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value;
        var password = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value;
        if (emailErrorsBlock && email != undefined) {
            emailErrorsBlock.innerHTML = "";
            if (email.trim().length == 0) {
                emailErrorsBlock.innerHTML += "<p>Логин не был введен</p>";
            }
        }
        if (passwordErrorsBlock && password != undefined) {
            passwordErrorsBlock.innerHTML = "";
            var more8 = password.trim().length >= 8;
            var hasNumber = /\d/.test(password);
            var hasUpperCase = /[A-Z]/.test(password);
            if (!more8)
                passwordErrorsBlock.innerHTML += "<p>Пароль должен содержать 8 символов</p>";
            if (!hasNumber)
                passwordErrorsBlock.innerHTML += "<p>Пароль должен содержать хотя бы одну цифру</p>";
            if (!hasUpperCase)
                passwordErrorsBlock.innerHTML += "<p>Пароль должен содержать хотя бы одну заглавную букву</p>";
            if (more8 && hasNumber && hasUpperCase)
                alert("Вы успешно зарегистрированы");
        }
    });
}
