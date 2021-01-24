var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
var user1 = document.getElementById("user1");
user1.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if(user1.value.length == 0 || user1.value.length < 6){
        user1.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    }
    else{
        user1.style.border = '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})
var pass1 = document.getElementById("pass1");
pass1.addEventListener('keyup', function(){
    var p_times = document.querySelector('.p_times');
    var p_check = document.querySelector('.p_check');
    if(pass1.value.length == 0 || pass1.value.length < 8){
        pass1.style.border = '1px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
        return false;
    }
    else{
        pass1.style.border = '1px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';
        return false;
    }
})
function validate(){
    if(user1.value.length == 0 || user1.value.length < 6){
        document.getElementById("erroru").innerHTML = '**Please fill the required fields!';
        return false;
        }
    if(pass1.value.length == 0 || pass1.value.length < 8){
        document.getElementById("errorp").innerHTML = '**Please fill the required fields!';
        return false;
    }
    else{
        alert('logged In successfull');
        window.location.replace("../client page/client.html",'_self');
        return false;
    }
}
var user2 = document.getElementById("user2");
user2.addEventListener('keyup', function(){
    var userR = document.getElementById("userR");
    if(user2.value.length == 0 || user2.value.length < 6){
        user2.style.border = '1px solid red';
        userR.innerHTML = 'username cannot smaller than 6 digits!';
        return false;
    }
    else{
        user2.style.border = '1px solid green';
        userR.innerHTML = "";
        return false;
    }
})
var email2 = document.getElementById("email2");
email2.addEventListener('keyup', function(){
    var emailR = document.getElementById("emailR");
    if(email2.value.length == 0 || email2.value.length < 8){
        email2.style.border = '1px solid red';
        emailR.innerHTML = "Please enter valid email Id!";
        return false;
    }
    else if(email2.value.indexOf('@')<=0){
        email2.style.border = '1px solid red';
        emailR.innerHTML = "Please enter valid email Id!";
    }
    else{
        email2.style.border = '1px solid green';
        emailR.innerHTML = "";
        return false;
    } 
})
var pass2 = document.getElementById("pass2");
pass2.addEventListener('keyup', function(){
    var passR = document.getElementById("passR");
    if(pass2.value.length == 0 || pass2.value.length < 8){
        pass2.style.border = '1px solid red';
        passR.innerHTML = "password must be 8 digit long!";
        return false;
    }
    else{
        pass2.style.border = '1px solid green';
        passR.innerHTML = "";
        return false;
    }
})
var cnfpass = document.getElementById("cnfpass");
cnfpass.addEventListener('keyup', function(){
    var cnfpassR = document.getElementById("cnfpassR");
    if(cnfpass.value.length == 0 || cnfpass.value.length < 8){
        cnfpass.style.border = '1px solid red';
        cnfpassR.innerHTML = "password must be 8 digit long!";
        return false;
    }
    else if(cnfpass.value!=pass2.value){
      cnfpass.style.border = '1px solid red';
      cnfpassR.innerHTML = "passsword do not matched!";
      return false;
    }
    else{
        cnfpass.style.border = '1px solid green';
        cnfpassR.innerHTML = "";
        return false;
    }
})

var state = false;
function toggle1(){
    if(state){
        document.getElementById("pass2").setAttribute("type", "password");
        document.getElementById("eye1").style.color = "#7a797e";
        state = false;
    }
    else{
        document.getElementById("pass2").setAttribute("type", "text");
        document.getElementById("eye1").style.color = '#5887ef';
        state = true;
    }
}
function toggle2(){
    if(state){
        document.getElementById("cnfpass").setAttribute("type", "password");
        document.getElementById("eye2").style.color = "#7a797e";
        state = false;
    }
    else{
        document.getElementById("cnfpass").setAttribute("type", "text");
        document.getElementById("eye2").style.color = '#5887ef';
        state = true;
    }
} 

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz7EJoWrRwF_Rjsfu8JJ2xwZWNN8rBcS_XrIUf2Lj4Lyy6orxOHrxuy/exec'
    const form = document.forms['google-sheet']
              
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>  {alert("Successfully Submited!.."), window.location.replace("../final page/final.html","_self");})
            .catch(error => console.error('Error!', error.message))
        })
    
