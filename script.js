const button = document.querySelector('.button').addEventListener('click', email)
const input = document.querySelector('.email-input')
const errorMessage =document.querySelector('.error-message')
const iconError = document.querySelector('.icon-error')


 function email(){
    const emailValue = input.value.trim();

            if (validateEmail(emailValue)) {
                errorMessage.textContent = "";
            input.style.border = '1px solid #ced4da'; 
            iconError.style.display = "none";
            alert("Valid Email Address" )

    }else{
        errorMessage.textContent = "Please provide a valid email",
        input.style.border = '2px solid red';
        iconError.style.display = "block"
       
    }

}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}