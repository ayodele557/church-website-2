const menuBtn  = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

const links = document.querySelectorAll('#sidebar ul li a');

links.forEach(link  => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrolllntoView({ behaviour: 'smooth' });
        }
        sidebar.classList.remove('show');
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + window.innerHeight;

    sections.forEach(sec => {
        if (scrollY > sec.offsetTop + 100) {
            sec.classList.add('fade-in');
        }
    });
});

