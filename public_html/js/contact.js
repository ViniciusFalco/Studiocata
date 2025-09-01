(function(){
  // Detectar se é dispositivo móvel
  const isMobile = window.innerWidth <= 768;
  const hero = document.querySelector('.contact-hero');
  
  if(hero){
    if(isMobile){
      // Imagem específica para mobile - Cozinha de Minas
      const mobileImage = './img/obras/2 - COZINHA DE MINAS - BELO HORIZONTE, MG - 2020 A 2022/CATA_ARQUITETURA_0017.jpg';
      hero.style.backgroundImage = `url("${mobileImage}")`;
      console.log('Imagem mobile (Cozinha de Minas) carregada:', mobileImage);
    } else {
      // Imagem específica para desktop - Glamping
      const desktopImage = './img/projetos/03 - PROJETO DOMUS - PARATY, RJ - 2023/lite/78ec69be0575404ca8f7597da637303f.jpg';
      hero.style.backgroundImage = `url("${desktopImage}")`;
      console.log('Imagem desktop (Glamping) carregada:', desktopImage);
    }
  }
  
  // Atualizar imagem quando a tela for redimensionada
  window.addEventListener('resize', function() {
    const newIsMobile = window.innerWidth <= 768;
    if(hero && newIsMobile !== isMobile){
      if(newIsMobile){
        const mobileImage = './img/obras/2 - COZINHA DE MINAS - BELO HORIZONTE, MG - 2020 A 2022/CATA_ARQUITETURA_0017.jpg';
        hero.style.backgroundImage = `url("${mobileImage}")`;
        console.log('Mudança para imagem mobile:', mobileImage);
      } else {
        const desktopImage = './img/projetos/03 - PROJETO DOMUS - PARATY, RJ - 2023/lite/78ec69be0575404ca8f7597da637303f.jpg';
        hero.style.backgroundImage = `url("${desktopImage}")`;
        console.log('Mudança para imagem desktop:', desktopImage);
      }
    }
  });
})();
