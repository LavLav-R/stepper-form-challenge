//Selection
const nextButton = document.getElementById('js-nextButton');
const backButton = document.getElementById('js-backButton');
const steps = document.getElementsByTagName('p');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

//Manipulation
nextButton.addEventListener('click', nextStep);
backButton.addEventListener('click', backStep);

function nextStep(){
  if(steps[1].classList.value === 'active'){
    steps[1].classList.toggle('active');
    steps[2].classList.toggle('active');
    content2.classList.toggle('noDisplay');
    content3.classList.toggle('noDisplay');
    nextButton.innerText = "Submit";
    nextButton.removeEventListener('click', nextStep);
    nextButton.addEventListener('click', submit);
  } else {
    steps[0].classList.toggle('active');
    steps[1].classList.toggle('active');
    backButton.classList.remove('noDisplay');
    content1.classList.toggle('noDisplay');
    content2.classList.toggle('noDisplay');
  };
};

function backStep(){
  if(steps[2].classList.value === 'active'){
    steps[2].classList.toggle('active');
    steps[1].classList.toggle('active');
    content3.classList.toggle('noDisplay');
    content2.classList.toggle('noDisplay');
    nextButton.innerText = "Next";
    nextButton.removeEventListener('click', submit);
    nextButton.addEventListener('click', nextStep);
  } else {
    steps[1].classList.toggle('active');
    steps[0].classList.toggle('active');
    backButton.classList.add('noDisplay');
    content2.classList.toggle('noDisplay');
    content1.classList.toggle('noDisplay');
  };
};

function submit(){
  alert('Form Submitted');
};