document.addEventListener("DOMContentLoaded", function() {
const loginContainer = document.getElementById("formContainer");
const registerContainer = document.getElementById("registerContainer");
const subtitle = document.getElementById("secondSubtitle");
const container = document.getElementById("mainContainer");
function displayLogin(){
    formContainer.style.display = "block";
    registerContainer.style.display = "none";
    mainContainer.classList.add("modal-blur");
    secondSubtitle.classList.add("modal-blur");
}
function displayRegister(){
    registerContainer.style.display = "block";
    formContainer.style.display = "none";
    mainContainer.classList.add("modal-blur");
    secondSubtitle.classList.add("modal-blur");
}

function closeModal() {
    formContainer.style.display = "none";
    registerContainer.style.display = "none";
    container.classList.remove("modal-blur");
    subtitle.classList.remove("modal-blur"); 
    console.log("Test"); 
}

    // You can attach the event listeners to buttons here if needed, like this:
    document.getElementById("loginButton").onclick = displayLogin;
    document.getElementById("registerButton").onclick = displayRegister;
    document.getElementById("closeLogin").onclick = closeModal;
    document.getElementById("closeRegister").onclick = closeModal;
});