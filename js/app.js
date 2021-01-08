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