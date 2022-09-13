// let username = document.getElementById("username");  
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// target element using id, get all getElementById() using arrow function

let id = (id) => document.getElementById(id);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form");

// targer element using class, using arrow funtion
let classes = (classes) => document.getElementsByClassName(classes);

let errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


// Adding event listener into submit button
/*form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if(username.value === ""){
        errorMsg[0].innerHTML="Username cannot be blank";
        failureIcon[0].style.opacity = 1;
        successIcon[0].style.opacity = 0;
    }else{
        errorMsg[0].innerHTML = "";
        failureIcon[0].style.opacity = 0;
        successIcon[0].style.opacity = 1;
    }
});*/


// Better way to write event handler logic 
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    //calling engine() event handler
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password,2, "Password cannot be blank");
});

//engine() event handler
let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = 1;
        successIcon[serial].style.opacity = 0;
    }else{
        errorMsg[serial].innerHTML="";
        failureIcon[serial].style.opacity=0;
        successIcon[serial].style.opacity=1;
    }
};