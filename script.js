// [Changing input group text on focus]
$(function () {
    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
    });
});

function register(){
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var email=document.getElementById("email");
    var job=document.getElementById("job");
    var password=document.getElementById("password");
    var confirmpassword=document.getElementById("confirmpassword");

    if(firstName.value==""){
        firstName.style.borderColor="red";
        firstName.focus();
    }

    if(lastName.value==""){
        lastName.style.borderColor="red";
        lastName.focus();
        
    }

    if(email.value=="" || !email.value.includes("@")){
        email.style.borderColor="red";
        email.focus();
    }

    
    if(job.value==""){
        job.style.borderColor="red";
        job.focus();
    }

    if(password.value==""){
        password.style.borderColor="red";
        password.focus();
    }

    if(confirmpassword.value==""){
        confirmpassword.style.borderColor="red";
        confirmpassword.focus();
    }

}