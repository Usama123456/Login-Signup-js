function signUp(){
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var pass = document.getElementById("userPass").value;
    var p = document.getElementById("demo");
    if(name == ""){
        p.innerHTML = "You Must Enter Your Name";
    }
    else if(email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        p.innerHTML = "You Must Enter Your Password";
    }
    else if(pass.length < 8){
        p.innerHTML = "Your Password is too short";
    }
    else{
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPass", pass);

        alert("Registration Completed");
        return document.location.href = "login.html";
    }
}

var myVar = setInterval(function (){setColor()}, 300);

function setColor() {
    var x = document.getElementById('demo')
    x.style.color = x.style.color == "rgba(255, 255, 255, 0)" ? "wheat" : "rgba(255, 255, 255, 0)";
}


function logIn(){
    var email = document.getElementById("usrEmail").value;
    var pass = document.getElementById("usrPass").value;
    var p = document.getElementById("demo");
    var usrEmail = localStorage.getItem("userEmail");
    var usrPass = localStorage.getItem("userPass");
    if(email == ""){
        p.innerHTML = "You must Enter Your Email";
    }
        else if(email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        p.innerHTML = "You Must Enter Your Password";
    }
    else if(email != usrEmail || pass != usrPass){
        p.innerHTML = "LOGIN FAILED! You Entered Wrong Details.";
    }
    else if (email === usrEmail && pass === usrPass){
        alert("Login Successfully......!")
        return document.location.href = "thanks.html";
    }
            
}