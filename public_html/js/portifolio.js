// Seta para cima
document.addEventListener("DOMContentLoaded", function () {
  var arrowUp = document.getElementById('arrow-up');

  window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          arrowUp.style.display = 'block';
      } else {
          arrowUp.style.display = 'none';
      }
  });

  arrowUp.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });

  // Adiciona a sobreposição de carregamento
  var loadingOverlay = document.createElement('div');
  loadingOverlay.classList.add('loading-overlay');
  loadingOverlay.innerHTML = `
    <div class="spinner"></div>
    <div class="loading-text">Carregando...</div>
  `;
  document.body.appendChild(loadingOverlay);

  // Função para verificar se todas as imagens foram carregadas
  function checkImagesLoaded() {
    const images = document.querySelectorAll('.grid-image');
    let allLoaded = true;
    images.forEach(img => {
      if (!img.complete) {
        allLoaded = false;
      }
    });
    return allLoaded;
  }

  // Verifica se todas as imagens foram carregadas e remove a sobreposição
  function removeLoadingOverlay() {
    if (checkImagesLoaded()) {
      loadingOverlay.style.display = 'none';
    } else {
      setTimeout(removeLoadingOverlay, 100); // Verifica novamente após 100ms
    }
  }

  // Inicia a verificação do carregamento das imagens
  removeLoadingOverlay();
});

// Função para exibir a imagem expandida
function showImage(src) {
  document.body.classList.add("blur"); // Aplica o efeito de desfoque no fundo
  var overlay = document.createElement("div");
  overlay.classList.add("overlay");

  var img = document.createElement("img");
  img.src = src;

  var closeBtn = document.createElement("div");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "&times;"; // Símbolo X para fechar

  closeBtn.addEventListener("click", function () {
      document.body.classList.remove("blur"); // Remove o efeito de desfoque
      overlay.remove(); // Remove a sobreposição da imagem
  });

  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  overlay.style.display = "flex"; // Exibe a sobreposição da imagem
}



