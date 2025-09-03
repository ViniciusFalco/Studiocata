(function () {
  function setHeaderVar() {
    const header = document.querySelector('header');
    const h = header ? header.offsetHeight : 96;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }
  window.addEventListener('load', setHeaderVar);
  window.addEventListener('resize', setHeaderVar);

  // Se já existe um plugin de slider, não inicialize outro aqui.
  // Este arquivo só garante o cálculo da altura e o estilo correto.
})();
