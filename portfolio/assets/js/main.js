/* ===== Mobile Navigation ===== */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });

    });

    document.addEventListener('click', (event) => {

        const clickedToggle =
            toggle.contains(event.target);

        const clickedMenu =
            nav.contains(event.target);

        if (!clickedToggle && !clickedMenu) {

            nav.classList.remove('show');

        }

    });

    window.addEventListener('resize', () => {

        if (window.innerWidth > 600) {

            nav.classList.remove('show');

        }

    });
}

/* ===== Lightbox Images ===== */

const galleryImages =
    document.querySelectorAll('.media-gallery img');

const lightbox =
    document.querySelector('.lightbox');

const lightboxImage =
    document.querySelector('.lightbox-image');

galleryImages.forEach(image => {

    image.addEventListener('click', () => {

        lightboxImage.src = image.src;

        lightbox.classList.add('show');

    });

});

lightbox.addEventListener('click', () => {

    lightbox.classList.remove('show');

});

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        lightbox.classList.remove('show');

    }

});