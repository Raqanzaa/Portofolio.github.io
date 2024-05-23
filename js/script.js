// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Skill Icons
const wheel = document.querySelector('.wheel');
const skillIcons = document.querySelectorAll('.skill-icon');
const numIcons = icons.length;
const radius = 250; // jari-jari roda

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        wheel.classList.add('paused');
        skillIcons.forEach(icon => icon.classList.add('paused'));
    });

    icon.addEventListener('mouseout', () => {
        wheel.classList.remove('paused');
        skillIcons.forEach(icon => icon.classList.remove('paused'));
    });
});
// icons.forEach((icon, index) => {
//     const angle = (360 / numIcons) * index;
//     const radians = angle * Math.PI / 180;
//     const x = wheel.offsetWidth / 2 + radius * Math.cos(radians) - icon.offsetWidth / 2;
//     const y = wheel.offsetHeight / 2 + radius * Math.sin(radians) - icon.offsetHeight / 2;
//     icon.style.left = `${x}px`;
//     icon.style.top = `${y}px`;
// });

