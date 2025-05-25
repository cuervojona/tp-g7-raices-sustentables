const btn = document.getElementById('toggle-dark');
btn.onclick = function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');
  btn.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = 'Cambiar a modo claro';
  } else {
    btn.textContent = 'Cambiar a modo oscuro';
  }
};