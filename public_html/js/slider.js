// slider.js
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider-container .slide');
    let currentSlide = 0;
    const slideInterval = 8000; // 8 segundos para transições mais suaves

    // Pré-carregar imagens
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.querySelector('img').src;
    });

    // Exibe o próximo slide com efeito de transição suave
    function showNextSlide() {
      const current = slides[currentSlide];
      
      // Fade out do slide atual com escala
      current.style.opacity = '0';
      current.style.transform = 'translateX(-100%) scale(0.95)';
      
      setTimeout(() => {
        current.classList.remove("active");
        current.style.opacity = '';
        current.style.transform = '';
      }, 600);

      // Avança para o próximo slide
      currentSlide = (currentSlide + 1) % slides.length;
      const next = slides[currentSlide];
      
      // Fade in do próximo slide com escala
      next.classList.add("active");
      next.style.opacity = '0';
      next.style.transform = 'translateX(100%) scale(1.05)';
      
      requestAnimationFrame(() => {
        next.style.opacity = '1';
        next.style.transform = 'translateX(0) scale(1)';
      });
    }

    // Inicializa o slider
    if (slides.length > 0) {
      slides[currentSlide].classList.add("active");
      slides[currentSlide].style.opacity = '1';
      slides[currentSlide].style.transform = 'translateX(0) scale(1)';
      setInterval(showNextSlide, slideInterval);
    }
});
