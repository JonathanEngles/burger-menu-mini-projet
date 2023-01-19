console.log('Hello World');


const icone = document.querySelector('.navbar-mobile i');

console.log(icone);



const modal = document.querySelector('.modal');

console.log(modal);

icone.addEventListener('click', () => {
  console.log('click');
  modal.classList.toggle('change-modal');
  icone.classList.toggle('fa-times');
});