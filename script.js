const slidePage = document.querySelector('.slide-one');
const inputGender = document.querySelector('.inputGender');
const btnMail = document.querySelector('.nextBtnMail');
const btnFemail = document.querySelector('.nextBtnFemail');

/*****first-page***** */

btnMail.addEventListener('click',function(event){
event.preventDefault();
inputGender.value = this.dataset.gender;
slidePage.style.marginLeft = '-20%';
});

btnFemail.addEventListener('click',function(event){
    event.preventDefault();
    inputGender.value = this.dataset.gender;
    slidePage.style.marginLeft = '-20%';   
});

/******secound-page******/
