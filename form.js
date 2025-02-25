const form = document.getElementById("form")
const formMessage = document.getElementById("formMessage")
const submitButton = document.getElementById("submit")



function onSubmit() {
    event.preventDefault(); 
    const inputField = document.getElementById("email")

    if (inputField.checkValidity()) {
        console.log(inputField.value)
        window.location.href = "success.html";
    }
    else {
        inputField.style.backgroundColor = "hsl(4, 100%, 67%)";
        formMessage.innerHTML = "Invalid Email"
        formMessage.style.color = "hsl(4, 100%, 67%)"
    }
    
}


submitButton.addEventListener("click",onSubmit) 
