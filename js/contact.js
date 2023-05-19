const fullName = /^[a-zA-Z0-9 åæø]{5,30}$/;
const subject = /^[a-zA-Z0-9 åæø]{15,50}$/;
const email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
const message = /^[a-zA-Z0-9 åæø]{25,200}$/;

import {backToTop} from "./backtotop.js";


const regexTester = (input, rule) => {
    return rule.test(input);
};

const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const userSubject = document.querySelector("#subject");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
const main = document.querySelector(".contactpage"); 
const clientMsg = document.querySelector("#clientmsg");

form.onsubmit = (e) => {
    e.preventDefault();
    if (!regexTester(userName.value, fullName) || 
    !regexTester(userSubject.value, subject) ||
    !regexTester(userEmail.value, email) ||
    !regexTester(userMessage.value, message)
    ){
        clientMsg.style.cssText = "display:block;"
        clientMsg.innerHTML = `One of the inputs are in the wrong format. Check again <br> Username: ${regexTester(userName.value, fullName)} <br> Subject: ${regexTester(userSubject.value, subject)} <br>
        Email: ${regexTester(userEmail.value, email)} <br> Message: ${regexTester(userMessage.value, message)} `
        return; 
    }else if (!regexTester(userName.value, fullName)){

    } else {
        clientMsg.style.cssText = "display:block;"
        clientMsg.innerHTML = "Success! Thanks for submitting your message, I will reply via email shortly!";
        
    }
}