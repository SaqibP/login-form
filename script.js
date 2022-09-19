const loginPass = document.getElementById('loginPassword');

const loginUser = document.getElementById('username');

const showPass = document.querySelector('i.fa-eye-slash');

const loginCon = document.querySelector('.login-con');

const loginForm = document.getElementById('login-form');

const alert = document.querySelector('.alert-mes');

const alerts = document.querySelector('.alert-mess');

showPass.addEventListener('click', function () {
  if (loginPass.type === 'password') {
    loginPass.type = 'text';
  } else {
    loginPass.type = 'password';
  }

  if (showPass.classList.contains('fa-eye-slash')) {
    showPass.classList.remove('fa-eye-slash');
    showPass.classList.add('fa-eye');
  } else {
    showPass.classList.remove('fa-eye');
    showPass.classList.add('fa-eye-slash');
  }
});

loginForm.addEventListener('submit', submitValidation);
function submitValidation(event) {
  event.preventDefault();
  if (loginUser.value === '' || loginUser.value.length < 3) {
    alert.style.visibility = 'visible';
    alert.style.color = 'red';
    alert.innerHTML = 'Must be more than 3 words';
  } else {
    alert.style.visibility = 'hidden';
  }
  if (loginPass.value === '' || loginPass.value.length < 6) {
    alerts.style.visibility = 'visible';
    alerts.style.color = 'red';
    alerts.innerHTML = 'Must be more than 6 words';
  } else {
    alerts.style.visibility = 'hidden';
  }
}

const requestForm = document.querySelector('.form-req');

const alertMessage = document.querySelector('.alert-message')



requestForm.style.display = 'none';

const showReq = document.querySelector('.reset-pass');

showReq.addEventListener('click', function () {
  if (requestForm.style.display !== 'block') {
    loginCon.style.minHeight = '600px';
    requestForm.style.display = 'block';
  } else {
    requestForm.style.display = 'none';
    loginCon.style.minHeight = 'initial';
  }
});

