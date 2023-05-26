

function handleSubmit() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('message');


    if (firstName.length === 0) {
        message.innerText = "Please enter your first name"
        message.style.display = "block";
        return false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        message.innerText = "Please enter valid email"
        message.style.display = "block";
        return false;
    }
    else if (password.length < 8) {
        message.innerText = "Password must be greater than 8 characters"
        message.style.display = "block";
        return false;
    }
    else if (password !== confirmPassword) {
        message.innerText = "Password doesn't match"
        message.style.display = "block";
        return false;
    }
    else {
        alert("Verified")
    }
    return;
}