const form = document.getElementById('form')
const username = document.getElementById('username')  
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', e => {
    e.preventDefault();

    validatesInputs()
})
const isValidEmail = email => {
    const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase())
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ' ';
    inputControl.classList.add('success')
    inputControl.classList.remove('.error')
}   

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
}

const validatesInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === '') {
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }
    
    if(passwordValue === ' ') {
        setError(password, 'Password is required')
    }else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character. ')
    } else {
        setSuccess(password)
    }

    if(password2Value === ' ') {
        setError(password2, 'Please confirm your password')
    } else if (password2Value !== passwordValue) {
        setError(password2, "Password doesn't match")
    }else {
        setSuccess(password2)
    }
    
}
