
const slider = document.querySelector('.slider');
const destinations = document.querySelectorAll('.destination');
const dots = document.querySelectorAll('.dot');

let isPaused = false;
let currentIndex = 0;
const visibleItems = Math.floor(slider.parentElement.offsetWidth / destinations[0].offsetWidth);
const totalDots = dots.length;

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex % totalDots].classList.add('active');
}

function slideLeft() {
    if (isPaused) return;

    const firstItem = slider.children[0];
    const itemWidth = firstItem.offsetWidth;

    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${itemWidth}px)`;

    setTimeout(() => {
        slider.style.transition = 'none';
        slider.appendChild(firstItem);
        slider.style.transform = 'translateX(0)';
        currentIndex++;
        updateDots();
    }, 500);
}

setInterval(slideLeft, 3000);

destinations.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    item.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});

