// Menú de hamburguesa (se usa en todas las páginas)
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

function toggleMenu(abrir){
  menu.classList.toggle('abierto', abrir);
  burger.classList.toggle('abierto', abrir);
  burger.setAttribute('aria-expanded', abrir);
}
burger.addEventListener('click', () => toggleMenu(!menu.classList.contains('abierto')));

// Botón "Más servicios" (solo existe en index.html)
const btnMas = document.getElementById('btnMas');
const todos = document.getElementById('todos');
if (btnMas && todos) {
  btnMas.addEventListener('click', () => {
    const visible = todos.classList.toggle('visible');
    btnMas.textContent = visible ? 'Mostrar menos' : 'Más servicios';
    if (visible) todos.scrollIntoView({behavior:'smooth'});
  });
}