document.addEventListener("DOMContentLoaded", function() {
    console.log("Script de pagination chargé et exécuté");
    const maxVisiblePages = 6;
    const pagination = document.querySelector('.pagination ul');
    const paginationItems = Array.from(pagination.children);
    const totalPages = paginationItems.length;

    if (totalPages > maxVisiblePages) {
        let currentPageIndex = paginationItems.findIndex(item => item.querySelector('a.current'));
        
        paginationItems.forEach((item, index) => {
            if (index > 0 && index < totalPages - 1) {
                item.style.display = 'none';
            }
        });

        const start = Math.max(currentPageIndex - Math.floor(maxVisiblePages / 2), 1);
        const end = Math.min(start + maxVisiblePages - 1, totalPages - 2);

        for (let i = start; i <= end; i++) {
            paginationItems[i].style.display = 'inline';
        }

        if (start > 1) {
            paginationItems[0].style.display = 'inline';
        }

        if (end < totalPages - 2) {
            paginationItems[totalPages - 1].style.display = 'inline';
        }
    }
});
