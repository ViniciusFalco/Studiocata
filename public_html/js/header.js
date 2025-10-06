// Configuração para dispositivos móveis e injeção do header via partial
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    // Animação dos links do menu (ignora item do Instagram, se houver)
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            if (!link.classList.contains('instagram-mobile-item')) {
                link.style.animation = link.style.animation
                    ? ''
                    : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    handleClick() {
        if (!this.navList || !this.mobileMenu) return;
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        if (!this.mobileMenu) return;
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

async function fetchFirst(paths) {
    for (const p of paths) {
        try {
            const res = await fetch(p, { cache: 'no-store' });
            if (res && res.ok) {
                return await res.text();
            }
        } catch (_) {}
    }
    return null;
}

async function injectHeader() {
    try {
        const candidates = [
            'partials/header.html',
            '../partials/header.html',
            '/partials/header.html',
            '/public_html/partials/header.html'
        ];
        const html = await fetchFirst(candidates);

        // Fallback embutido caso o fetch falhe (ex.: quando abrindo arquivo direto ou rota diferente)
        const fallbackHtml = `
<header>
  <a href="./index.html">
    <div class="logo">
      <img src="./img/logopreta.PNG" alt="Logo" />
    </div>
  </a>
  <div class="mobile-menu">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  <nav>
    <ul class="nav-list">
      <li class="logo-item">
        <a href="./index.html">
          <div class="logo">
            <img src="./img/logopreta.PNG" alt="Logo">
          </div>
        </a>
      </li>
      <li><a href="./projetos.html">Projetos</a></li>
      <li><a href="./obras.html">Obras Concluídas</a></li>
      <li><a href="./sobrenos.html">Sobre nós</a></li>
      <li><a href="./contato.html">Contato</a></li>
    </ul>
  </nav>
</header>`;

        let newHeader;
        if (html) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            newHeader = doc.querySelector('header');
        }
        if (!newHeader) {
            const temp = document.createElement('div');
            temp.innerHTML = fallbackHtml;
            newHeader = temp.firstElementChild;
        }

        const existingHeader = document.querySelector('header');
        if (existingHeader) {
            existingHeader.replaceWith(newHeader);
        } else {
            document.body.insertAdjacentElement('afterbegin', newHeader);
        }
    } catch (e) {
        // Silencia falha de fetch para não quebrar a página
    }
}

function setActiveNavLink() {
    try {
        const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
        const links = document.querySelectorAll('.nav-list a');
        links.forEach((a) => {
            const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
            if (!href) return;
            // Não marca home (index) e ignora logo-item
            const isLogo = a.closest('li')?.classList.contains('logo-item');
            if (isLogo) return;
            if (href !== 'index.html' && href === current) {
                a.classList.add('active');
            }
        });
    } catch (_) {}
}

function initMobileMenu() {
    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
    );
    mobileNavbar.init();
}

// Aguarda DOM pronto, injeta header e inicializa menu
document.addEventListener('DOMContentLoaded', async () => {
    await injectHeader();
    setActiveNavLink();
    initMobileMenu();
});
  