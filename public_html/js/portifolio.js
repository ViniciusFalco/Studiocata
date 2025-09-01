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

  // Implementa carregamento lazy das imagens
  const images = document.querySelectorAll('.grid-image');
  images.forEach(img => {
    // Armazena o caminho original da imagem para expansão
    const originalSrc = img.getAttribute('data-original-src') || img.src;
    
    // Se a imagem não tem data-original-src, define o src atual como original
    if (!img.getAttribute('data-original-src')) {
      img.setAttribute('data-original-src', img.src);
    }
    
    // Tenta carregar versão "lite" apenas para imagens de projeto
    if (img.src.includes('/projetos/') && !img.src.includes('/lite/')) {
      tryLoadLiteVersion(img);
    }
  });
});

// Mapeamento de imagens originais para versões "lite" (baseado nos nomes reais)
const liteImageMapping = {
  // Eco Suítes Vila Neblina
  'doisdois_casa_serradaneblina_studiocata_01-300dpi.jpg': '716762d0dbeb4e28bd0f741482fe4842.jpg',
  'doisdois_casa_serradaneblina_studiocata_01.jpg': 'debf4ec742e84fcf9f96a0cfc1016931.jpg',
  'doisdois_casa_serradaneblina_studiocata_02-300dpi.jpg': '00889d219e624a9cae0b004046706109.jpg',
  'doisdois_casa_serradaneblina_studiocata_02_01.jpg': '97ba4d45c500465fa38d172dac9edcc3.jpg',
  'doisdois_casa_serradaneblina_studiocata_02.jpg': '43c23876ed654bc0965abfc64abd8fc1.jpg',
  'doisdois_casa_serradaneblina_studiocata_02_02.jpg': 'c691a1899a644352bd0954d16416ab16.jpg'
};

// Função para tentar carregar versão "lite" da imagem
function tryLoadLiteVersion(img) {
  const originalSrc = img.src;
  const liteSrc = convertToLitePath(originalSrc);
  
  // Cria uma imagem temporária para testar se a versão "lite" existe
  const testImg = new Image();
  
  testImg.onload = function() {
    // Se a versão "lite" carregou com sucesso, usa ela
    img.src = liteSrc;
    console.log(`✅ Versão "lite" carregada: ${liteSrc}`);
  };
  
  testImg.onerror = function() {
    // Se a versão "lite" não existe, mantém a original
    console.log(`⏭️ Versão "lite" não encontrada para: ${originalSrc}`);
    
    // Verifica se a imagem original existe
    const originalTestImg = new Image();
    originalTestImg.onload = function() {
      console.log(`✅ Imagem original carregada com sucesso: ${originalSrc}`);
    };
    originalTestImg.onerror = function() {
      console.error(`❌ ERRO: Imagem original também não encontrada: ${originalSrc}`);
    };
    originalTestImg.src = originalSrc;
  };
  
  testImg.src = liteSrc;
}

// Função para converter caminho da imagem para versão "lite"
function convertToLitePath(originalPath) {
  // Verifica se o caminho já contém "/lite/"
  if (originalPath.includes('/lite/')) {
    return originalPath;
  }
  
  // Verifica se o caminho contém "/projetos/" e não contém "/lite/"
  if (originalPath.includes('/projetos/') && !originalPath.includes('/lite/')) {
    // Extrai o nome do arquivo
    const pathParts = originalPath.split('/');
    const fileName = pathParts.pop();
    
    // Verifica se existe mapeamento para este arquivo
    const liteFileName = liteImageMapping[fileName];
    if (liteFileName) {
      // Reconstrói o caminho com "/lite/" e o nome mapeado
      const litePath = pathParts.join('/') + '/lite/' + liteFileName;
      return litePath;
    }
  }
  
  return originalPath;
}

// Função para exibir a imagem expandida
function showImage(src) {
  document.body.classList.add("blur"); // Aplica o efeito de desfoque no fundo
  var overlay = document.createElement("div");
  overlay.classList.add("overlay");

  var img = document.createElement("img");
  
  // Se o src fornecido é da versão "lite", converte para a versão original
  const originalSrc = src.includes('/lite/') ? convertToOriginalPath(src) : src;
  img.src = originalSrc;

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

// Função para converter caminho da versão "lite" para versão original
function convertToOriginalPath(litePath) {
  if (litePath.includes('/lite/')) {
    // Encontra o nome original baseado no mapeamento
    const pathParts = litePath.split('/');
    const liteFileName = pathParts.pop();
    
    // Procura o nome original no mapeamento
    for (const [originalName, liteName] of Object.entries(liteImageMapping)) {
      if (liteName === liteFileName) {
        return pathParts.join('/') + '/' + originalName;
      }
    }
    
    // Se não encontrar, remove apenas o /lite/
    return litePath.replace('/lite/', '/');
  }
  return litePath;
}



