
// Bank login js

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click',function(){
    // console.log('clicked');
    const loginInput = document.getElementById('login-input');
    const loginInputValue = loginInput.value;

    const loginPassword = document.getElementById('login-password');
    const loginPasswordValue = loginPassword.value ;

    if(loginInputValue == 'barun@gmail.com' && loginPasswordValue == 'password'){
        window.location.href = 'banking.html';
    }
    else{
      alert('Invalid email or password');
    }
});