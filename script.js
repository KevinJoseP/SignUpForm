let password1 = "";
let password2 = "";

const pw1 = document.querySelector('#password');
const pw2 = document.querySelector('#password2');

function matchPw ()
{
    if (password1 != password2)
    {
        alert ("Passwords dont match");
    }
}

pw1.addEventListener('input', e => {
    password1 = e.target.value;
    console.log(password1);

});
pw2.addEventListener('input', e => {
    password2 = e.target.value;
    console.log(password2);
});

function validate(e)
{
    matchPw();
}
const btn = document.querySelector('button');
btn.addEventListener('click', validate);
