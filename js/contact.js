const fullName = /^[a-zA-Z0-9 åæø]{5,30}$/;
const subject = /^[a-zA-Z0-9 åæø]{15,50}$/;
const email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
const message = /^[a-zA-Z0-9 åæø]{25,200}$/;


const regexTester = (input, rule) => {
    return rule.test(input);
};

const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const userSubject = document.querySelector("#subject");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
const popupmessage = document.querySelector(".parapopup");
const main = document.querySelector(".contactpage"); 
const clientMsg = document.querySelector("#clientmsg");

form.onsubmit = (e) => {
    e.preventDefault();
    if (!regexTester(userName.value, fullName) || 
    !regexTester(userSubject.value, subject) ||
    !regexTester(userEmail.value, email) ||
    !regexTester(userMessage.value, message)
    ){
        clientMsg.innerHTML = `One of the inputs are in the wrong format. Check again <br> Username: ${regexTester(userName.value, fullName)} <br> Subject: ${regexTester(userSubject.value, subject)} <br>
        Email: ${regexTester(userEmail.value, email)} <br> Message: ${regexTester(userMessage.value, message)} `
        return; 
    }else if (!regexTester(userName.value, fullName)){

    } else {
        clientMsg.innerHTML = "Success! :)";
        popupmessage.innerHTML = `<p>Thanks a lot for submitting! I will come back to you via email shortly!<p/>`
    }
}