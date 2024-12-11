// Get Info
const nameInput=document.querySelector("#fname");
const email=document.querySelector("#email");
const subject=document.querySelector("#subject");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

// Data Validation
function validateForm(){
    
    clearMessages();
    let errorFlag=false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Please fill-in your name";
        nameInput.classList.add("error-border");
        errorFlag=true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email Address";
        email.classList.add("error-border");
        errorFlag=true;
    }

    if(subject.value.length <1){
        errorNodes[2].innerText = "Please enter your subject";
        subject.classList.add("error-border");
        errorFlag=true;
    }

    if(message.value.length <1){
        errorNodes[3].innerText = "Please enter your message";
        message.classList.add("error-border");
        errorFlag=true;
    }
    if (!errorFlag){
        success.innerText = "Success!";
    }
}

// Message error and success
function clearMessages(){
    for (let i=0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    subject.classList.remove("error-border");
    message.classList.remove("error-border");
}

// Email Validation
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test (email);
}
