const cards = document.querySelectorAll('.card');
const search = document.getElementById('articleSearch');

const searchArticles = (e) => {
    const searchText = e.target.value.toLowerCase();

    cards.forEach((card) => {
        const title = card.querySelector('h5.card-title').textContent.toLowerCase();

        card.classList.toggle('hidden', title.indexOf(searchText) === -1);
    });
};

search.addEventListener('input', searchArticles);