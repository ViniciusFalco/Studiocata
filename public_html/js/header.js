// Configuração para dispositivos móveis
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
  
        this.handleClick = this.handleClick.bind(this);
    }
  
    // No header.js, dentro do método animateLinks():
animateLinks() {
    this.navLinks.forEach((link, index) => {
      // Apenas anima os links originais, não o Instagram
      if(!link.classList.contains('instagram-mobile-item')) {
        link.style.animation = link.style.animation 
          ? '' 
          : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  }
  
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
      
        // Remover a manipulação direta do display
        // Deixar o CSS controlar a visibilidade através das classes
      }
  
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();
  