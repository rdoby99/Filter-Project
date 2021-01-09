// Filter with buttons
(function() {
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.store-item');

filterBtns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        items.forEach(function(item) {
            if (filter === 'all') {
                item.style.display = 'block';
            } else if (item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            };
        });
    });
});
})();

// Filter with search
(function() {

const searchBar = document.querySelector('#search-item');
const searchForm = document.querySelector('form')
const items = document.querySelectorAll('.store-item');

searchBar.addEventListener('keyup', function(e) {
    
    const filter = e.target.value.toLowerCase().trim();
    
    items.forEach(function(item) {
        if (item.textContent.includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        };
    });
})

})();