async function loadComponent(selector, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
}
console.log('1')
function applyTheme() {
    const page = window.location.pathname.split('/').pop();
    const isDarkPage = page === 'mystery.html';
    const header = document.querySelector('.header');
    if (header) {
        const link = document.querySelectorAll('.menu__link')
        if (isDarkPage) {
            header.classList.add('header_dark');
            document.querySelector('.header__title')?.classList.add('header__title_dark');
        }
        link.forEach((el) => {
            el.classList.add(isDarkPage ? 'menu__link_dark' : 'menu__link')
            const linkPage = el.getAttribute('href');
            if (linkPage === `./${page}`) {
                el.classList.add(isDarkPage ? 'menu__link_active-dark' : 'menu__link_active');
            }
        });
    }

    const footer = document.querySelector('.footer');
    if (footer) {
        if (isDarkPage) {
        footer.classList.add('footer_dark');
        document.querySelector('.footer__border')?.classList.add('footer__border_dark');
        document.querySelectorAll('.authors__job').forEach(el => el.classList.add('authors__job_dark'));
        document.querySelector('.footer__copy')?.classList.add('footer__copy_dark');
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('#header-placeholder', '/components/header.html');
    await loadComponent('#footer-placeholder', '/components/footer.html');
    applyTheme();
});