burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
   // rightNav.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
   // navbar.classList.toggle('h-nav-resp');


})

const buttons = document.querySelectorAll('.rotate-button');
const images = document.querySelectorAll('.hover-image');
const button = document.getElementsByClassName('link-blog');
const box = document.getElementsByClassName('bg-arrow-white');

function applyHoverRotate(index) {
  buttons[index - 1].classList.add('hovered');
  images[index - 1].classList.add('hovered2');
  button[index - 1].classList.add('hovered3');
  box[index - 1].classList.add('hovered4');
}

function removeHoverRotate(index) {
  buttons[index - 1].classList.remove('hovered');
  images[index - 1].classList.remove('hovered2');
  button[index - 1].classList.remove('hovered3');
  box[index - 1].classList.remove('hovered4');
}




let activeBox = null;

function toggleBox(box) {
  const arrow = box.querySelector('.arrow');
  const content = box.querySelector('.box-content');

  if (box === activeBox) {
    box.classList.remove('active');
    arrow.style.transform = 'none';
    content.style.display = 'none';
    activeBox = null;
  } else {
    if (activeBox) {
      activeBox.classList.remove('active');
      activeBox.querySelector('.arrow').style.transform = 'none';
      activeBox.querySelector('.box-content').style.display = 'none';
    }
    box.classList.add('active');
    arrow.style.transform = 'translateY(-50%) rotate(90deg)';
    content.style.display = 'block';
    activeBox = box;
  }
}




