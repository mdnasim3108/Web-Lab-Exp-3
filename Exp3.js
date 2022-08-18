var digits = /[0-9]/g;
var mailchars=['@','.']
function isString(s) {
    return s.match(digits)===null ? true: false;
}

function isNameValid(name) {
    return (name.value.length >= 5 && isNaN(name.value) && isString(name.value)) ? true : errorThrow(name);
}

function isMailValid(mail) {
    var count=0;
    for(var i of mailchars){
        if(mail.value.includes(i)){
            count++;
        }
    }
    return count===2?true:errorThrow(mail);
}

function errorThrow(element) {
    element.classList.add("error");
    setTimeout(function () {
        element.classList.remove("error");
    }, 200);
}

function myfunc(event) {
    event.preventDefault();
    var email = document.getElementById("Emailip");
    var name = document.getElementById("Textip");
    if (name.value === "") {
        if  (email.value === ""){
            errorThrow(email);
        }
           errorThrow(name);
    }
    if (isNameValid(name) && isMailValid(email)) {
        name.value = "";
        email.value="";
        alert("form submitted");
    }
}