// Cargar el navbar
fetch('../pages/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // Inicializar el sidenav después de cargar el navbar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  })
  .catch(error => console.log('Error al cargar el navbar:', error));

// Cargar el footer
fetch('../pages/foter.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => console.log('Error al cargar el footer:', error));