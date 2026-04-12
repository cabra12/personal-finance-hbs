const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header =>{
    header.addEventListener('click', () => {
        header.classList.toggle('active-header');
        const panel = header.nextElementSibling;
        panel.classList.toggle('active');

    });
});