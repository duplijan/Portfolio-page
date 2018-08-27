
const toggleBtn = document.querySelector('.toggle');
const rightSide =document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');

function openSide(){
  rightSide.classList.toggle('right-side-open');
  leftSide.classList.toggle('left-side-open');
}

toggleBtn.addEventListener('click', openSide);
