const allBtns = document.querySelectorAll(".js-more-btn");
const allDots = document.querySelectorAll(".js-dots");
const allMore = document.querySelectorAll(".js-more");

allBtns.forEach(btn => btn.addEventListener('click', toggleMoreText));

function toggleMoreText() {
    const dots = allDots[[...allBtns].indexOf(this)];
    const moreText = allMore[[...allBtns].indexOf(this)];

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}