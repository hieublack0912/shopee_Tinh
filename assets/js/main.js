var btnRegister = document.querySelector('.register-btn');
var btnLogin = document.querySelector('.login-btn');
var formRegister = document.querySelector('.auth-form-register');
var formLogin = document.querySelector('.auth-form-login');
var liLogin = document.querySelector('.header__navbar-user');
var formSwitch = document.querySelectorAll('.auth-form__switch-btn');
var btnBack = document.querySelectorAll('.auth-form__controls-back');
var btnSubmitLogin = document.querySelector('.btn-submit-login');
var liLogout = document.querySelector('.header__navbar-user-item--separate');



liLogin.style.display = 'none';

var modal = document.querySelector('.modal');

btnRegister.onclick = function() {
    modal.style.display = 'flex';
    formRegister.style.display = 'block';
}

btnLogin.onclick = function() {
    modal.style.display = 'flex';
    formLogin.style.display = 'block';
}

formSwitch[0].onclick = function() {
    formRegister.style.display = 'none';
    formLogin.style.display = 'block';
}

formSwitch[1].onclick = function() {
    formLogin.style.display = 'none';
    formRegister.style.display = 'block';
}

btnBack[0].onclick = function() {
    modal.style.display = 'none';
    formRegister.style.display = 'none';
}

btnBack[1].onclick = function() {
    modal.style.display = 'none';
    formLogin.style.display = 'none';
}

btnSubmitLogin.onclick = function() {
    modal.style.display = 'none';
    formLogin.style.display = 'none';
    liLogin.style.display = 'flex';
    btnRegister.style.display = 'none';
    btnLogin.style.display = 'none';
}

liLogout.onclick = function() {
    liLogin.style.display = 'none';
    btnRegister.style.display = 'flex';
    btnLogin.style.display = 'flex';
}