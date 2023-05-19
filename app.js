const darkModeButton = document.getElementById('dark-mode-button');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

darkModeButton.addEventListener('click', function(){
  darkModeIcon.classList.toggle('fa-sun');


  if (darkModeIcon.classList.contains('fa-sun')) {
    darkModeButton.title = 'lightmode';
  } else {
    darkModeButton.title = 'darkmode';
  }
})

darkModeButton.onclick = function() {
  if (body.classList.contains('dark-mode')) {
    // Cambiar a modo claro
    body.classList.remove('dark-mode');
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    darkModeButton.title = 'darkmode';
  } else {
    // Cambiar a modo oscuro
    body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    darkModeButton.title = 'lightmode';
  }
};