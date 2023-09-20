const pass = document.getElementById('pwd');
const logo = document.getElementsByClassName('pwd-logo')[0];

logo.addEventListener('click', () => {
    if (pass.type === 'password') {
        pass.type='text'
        logo.innerHTML = '<i class="far fa-eye-slash"></i>';
    } else {
        pass.type = 'password';
        logo.innerHTML = '<i class="far fa-eye"></i>';
    }
});
