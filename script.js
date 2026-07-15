const mehu = document.querySelector(".henu");
const navMenu = document.querySelector(".nav-menu")

mehu.addEventListener ('click', () => {
    mehu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mehu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});