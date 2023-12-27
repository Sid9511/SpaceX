const btn = document.getElementById('ham-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('ham-menu');
const counters = document.querySelectorAll('.counter');
let scrollStart = false;


btn.addEventListener('click', hamToggle);

function hamToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}



document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPostn = window.scrollY;
    
    if (scrollPostn > 100 && !scrollStart) {
        countUp();
        scrollStart = true;
    } else if (scrollPostn < 100 && scrollStart){
        reset();
        scrollStart = false;
    }
}


function countUp() {
    counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target'); // convert target to number using '+'
        let count = 0; // set count to 0

        const updateCounter = () => {
            count = Math.min(count + target / 100, target); 
            counter.innerText = Math.ceil(count);

            if (count < target) {
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset () {
    counters.forEach((counter) => (counter.innerText='0'));
}


