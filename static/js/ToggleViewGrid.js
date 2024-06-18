function toggleView() {
  const isMobile = window.innerWidth <= 768;
  const grids = document.querySelectorAll('.grid-container');
  
  grids.forEach(grid => {
    if (isMobile) {
      grid.classList.add('mobile-grid');
      grid.classList.remove('desktop-grid');
    } else {
      grid.classList.add('desktop-grid');
      grid.classList.remove('mobile-grid');
    }
  });
}

window.addEventListener('resize', toggleView);
window.addEventListener('DOMContentLoaded', toggleView);
