function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function ValidateForm(){
    var returnVal = true;
    clearErrors();

    var name = document.forms['admissionform']["fname"].value;
    if(name.length <2)
    {
        seterror("name", "*Name is too short!");
        returnVal = false;
    }
    if(name.length == 0)
    {
        seterror("name", "*Length of name can't be zero!");
        returnVal = false;
    }
    
    var age = document.forms['admissionform']["fage"].value;
    if(age.length > 25)
    {
        seterror("age", "*Admission not for older than 25!");
        returnVal = false;
    }

    var email = document.forms['admissionform']["femail"].value;
    if(email.length > 50)
    {
        seterror("email", "*Email id too long!");
        returnVal = false;
    }

    var mob = document.forms['admissionform']["fmob"].value;
    if(mob.length >= 10)
    {
        seterror("mob", "*Mob. No. is of 10 digits!");
        returnVal = false;
    }
    
    return returnVal;
}
