document.addEventListener("DOMContentLoaded", function() {
    function toggleView() {
        if (window.innerWidth <= 768) {
            document.getElementById('desktop-view').style.display = 'none';
            document.getElementById('mobile-view').style.display = 'block';
        } else {
            document.getElementById('desktop-view').style.display = 'block';
            document.getElementById('mobile-view').style.display = 'none';
        }
    }

    // Toggle view on load
    toggleView();

    // Toggle view on resize
    window.addEventListener('resize', toggleView);
});
