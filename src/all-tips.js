const cards = document.querySelectorAll('.card');
const search = document.getElementById('articleSearch');

const updateGrid = () => {
    const visibleCount =[...cards].filter(card => card.style.display !== 'none').length;
    const container = document.querySelector('.grid-container');
    container.style.gridTemplateColumns = (visibleCount <=2) ? `repeat(${visibleCount}, 350px)` : '';
};

const searchArticles = (e) => {
    const searchText = e.target.value.toLowerCase();

    cards.forEach((card) => {
        const title = card.querySelector('h5.card-title').textContent.toLowerCase();

        card.style.display = (title.indexOf(searchText) != -1) ? '' : 'none';
    });
    updateGrid();
};

search.addEventListener('input', searchArticles);