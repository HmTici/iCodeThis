document.addEventListener('DOMContentLoaded', function () {
  const ressourcesLink = document.getElementById('ressources');
  const ressourcesGrid = document.getElementById('ressourcesGrid');
  const icon = ressourcesLink.querySelector('.rotate-icon');

  ressourcesGrid.style.display = 'none';

  ressourcesLink.addEventListener('click', function () {
    if (ressourcesGrid.style.display === 'none') {
      ressourcesGrid.style.display = 'grid';
      ressourcesLink.classList.add('active');
      icon.classList.add('rotated');
    } else {
      ressourcesGrid.style.display = 'none';
      ressourcesLink.classList.remove('active');
      icon.classList.remove('rotated');
    }
  });
});
