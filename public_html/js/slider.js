// slider.js
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider-container .slide');
    const sliderTitle = document.querySelector('.slider-title');
    let currentSlide = 0;
    const slideInterval = 7000; // 7 segundos

    // Pré-carregar imagens
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.querySelector('img').src;
    });

    // Atualiza o título do slider com base no atributo data-title do slide atual
    function updateTitle() {
      const title = slides[currentSlide].getAttribute('data-title') || '';
      if (sliderTitle) {
        sliderTitle.textContent = title;
      }
    }

    // Exibe o próximo slide com efeito de transição deslizante
    function showNextSlide() {
      const current = slides[currentSlide];
      current.classList.remove("active");
      current.classList.add("slide-exit");

      current.addEventListener("transitionend", function handler() {
        current.classList.remove("slide-exit");
        current.removeEventListener("transitionend", handler);
      });

      currentSlide = (currentSlide + 1) % slides.length;
      const next = slides[currentSlide];
      next.classList.add("slide-enter");
      requestAnimationFrame(() => {
        next.classList.add("active");
        next.classList.remove("slide-enter");
      });

      updateTitle();
    }

    // Inicializa o slider
    if (slides.length > 0) {
      slides[currentSlide].classList.add("active");
      updateTitle();
      setInterval(showNextSlide, slideInterval);
    }
});
