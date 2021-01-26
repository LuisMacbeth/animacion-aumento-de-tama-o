var left = document.querySelector('.left');
var right = document.querySelector('.right');
var container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('slider_left')
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('slider_left')
});

right.addEventListener('mouseenter', () => {
    container.classList.add('slider_right')
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('slider_right')
});

