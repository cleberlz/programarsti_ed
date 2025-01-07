document.addEventListener('DOMContentLoaded', function() {
    const searchLink = document.getElementById('search-link'); 
    const searchContainer = document.getElementById('search-container'); 
    const searchInput = document.getElementById('search-input'); 
    const searchButton = document.getElementById('search-button'); 

    searchLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (searchContainer.style.display === 'block') {
            searchContainer.style.display = 'none'; 
        } else {
            searchContainer.style.display = 'block'; 
            searchInput.focus(); 
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target) && event.target !== searchLink) {
            searchContainer.style.display = 'none'; 
        }
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('Realizou a pesquisa:', searchInput.value);
            searchContainer.style.display = 'none'; 
            searchInput.value = ''; 
        }
    });

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Realizou a pesquisa:', searchInput.value);
        searchContainer.style.display = 'none'; 
        searchInput.value = ''; 
    });
});
