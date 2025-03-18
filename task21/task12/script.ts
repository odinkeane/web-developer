const passwordView: HTMLButtonElement | null = document.querySelector("#password-view")
const emailInput: HTMLInputElement | null = document.querySelector("#email-input")
const passwordInput: HTMLInputElement | null = document.querySelector("#password-input")
const registration: HTMLButtonElement | null = document.querySelector("#registration")
const emailErrorsBlock: HTMLDivElement | null = document.querySelector("#email-errors-block")
const passwordErrorsBlock: HTMLDivElement | null = document.querySelector("#password-errors-block")

if (passwordView) {
    passwordView.addEventListener("mousedown", () => {
        if (passwordInput)
            passwordInput.setAttribute("type", "text")
    })
    passwordView.addEventListener("mouseup", () => {
        if (passwordInput)
            passwordInput.setAttribute("type", "password")
    })
}

if (registration) {
    registration.addEventListener("click", () => {
        const email: string | undefined = emailInput?.value
        const password: string | undefined = passwordInput?.value
        if (emailErrorsBlock && email != undefined) {
            emailErrorsBlock.innerHTML = ""
            if (email.trim().length == 0) {
                emailErrorsBlock.innerHTML += "<p>Логин не был введен</p>"
            }
        }
        if (passwordErrorsBlock && password != undefined) {
            passwordErrorsBlock.innerHTML = ""
            const more8: boolean = password.trim().length >= 8
            const hasNumber: boolean = /\d/.test(password)
            const hasUpperCase: boolean = /[A-Z]/.test(password)
            if (!more8)
                passwordErrorsBlock.innerHTML += "<p>Пароль должен содержать 8 символов</p>"
            if (!hasNumber)
                passwordErrorsBlock.innerHTML += "<p>Пароль должен содержать хотя бы одну цифру</p>"
            if (!hasUpperCase)
                passwordErrorsBlock.innerHTML += "<p>Пароль должен содержать хотя бы одну заглавную букву</p>"
            if (more8 && hasNumber && hasUpperCase)
                alert("Вы успешно зарегистрированы")
        }
    })

}