let slide_scrollX = document.querySelector('.slide_scrollX');
let slide_prev_btn = document.querySelector('.slide_prev_btn');
let slide_next_btn = document.querySelector('.slide_next_btn');


slide_prev_btn.onclick = function () {
    slide_scrollX.scrollBy({
        top: 0,
        left: -150,
        behavior: 'smooth'
    });
}

slide_next_btn.onclick = function () {
    slide_scrollX.scrollBy({
        top: 0,
        left: 150,
        behavior: 'smooth'
    });
}