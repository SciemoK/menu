let currentLang = 'it';
let currentIndex = 0;
const footer = document.getElementById('mountain-footer');
const arrow = document.getElementById('footer-arrow');
const overlay = document.getElementById('page-overlay');

// Funzione cambio colore bottone al click
function clickButton(button) {
  const originalColor = button.style.background;
  button.style.background = '#1a1a1a';
  setTimeout(() => {
    button.style.background = originalColor;
  }, 200);
}

// Funzione per evidenziare bottone aperto
function highlightButton(button, color) {
  button.style.background = color;
}

// Funzione per ripristinare bottone chiuso
function unhighlightButton(button, originalColor) {
  button.style.background = originalColor;
}

// Funzione toggle caffetteria
async function toggleCaffetteria() {
  const container = document.getElementById('caffetteria-content');
  const button = document.getElementById('btn-caffetteria');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/caffetteria.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento caffetteria.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle dolci & snack
async function toggleDolci() {
  const container = document.getElementById('dolci-content');
  const button = document.getElementById('btn-dolci');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/snack.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento snack.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle gelateria
async function toggleGelateria() {
  const container = document.getElementById('gelateria-content');
  const button = document.getElementById('btn-gelateria');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/gelateria.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento gelateria.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle caffetteria 2
async function toggleCaffetteria2() {
  const container = document.getElementById('caffetteria2-content');
  const button = document.getElementById('btn-caffetteria2');
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    clickButton(button);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/caffetteria2.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento caffetteria2.html</div>';
    container.style.display = 'block';
  }
  
  clickButton(button);
}

// Funzione toggle dolci 2
async function toggleDolci2() {
  const container = document.getElementById('dolci2-content');
  const button = document.getElementById('btn-dolci2');
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    clickButton(button);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/dolci.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento dolci.html</div>';
    container.style.display = 'block';
  }
  
  clickButton(button);
}

// Funzione toggle crepes
async function toggleCrepes() {
  const container = document.getElementById('crepes-content');
  const button = document.getElementById('btn-crepes');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/crepes.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento crepes.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle bibite
async function toggleBibite() {
  const container = document.getElementById('bibite-content');
  const button = document.getElementById('btn-bibite');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/bibite.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento bibite.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle birre
async function toggleBirre() {
  const container = document.getElementById('birre-content');
  const button = document.getElementById('btn-birre');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/birre.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento birre.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle vini
async function toggleVini() {
  const container = document.getElementById('vini-content');
  const button = document.getElementById('btn-vini');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/vini.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento vini.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle aperitivi
async function toggleAperitivi() {
  const container = document.getElementById('aperitivi-content');
  const button = document.getElementById('btn-aperitivi');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/aperitivi.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento aperitivi.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Funzione toggle alcolici
async function toggleAlcolici() {
  const container = document.getElementById('alcolici-content');
  const button = document.getElementById('btn-alcolici');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/alcolici.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento alcolici.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// Sincronizza l'indicatore della nav
window.addEventListener('resize', syncIndicator);

// Gestione Lottie iniziale
const intro = document.querySelector("#introLottie");
if (intro) {
  intro.addEventListener("complete", () => {
    transitionPage("animation-page", "language-page", "flex");
  });
}

// Traduzioni Header
const translations = {
  it: { viniTab: "Vini", barSub: "Caffetteria & Drink", ristoSub: "Cucina & Tradizione", pizzaSub: "Forno a Legna", viniSub: "Cantina Selezionata" },
  en: { viniTab: "Wine", barSub: "Coffee & Drinks", ristoSub: "Kitchen & Tradition", pizzaSub: "Wood Fired Oven", viniSub: "Selected Cellar" }
};

// Selezione lingua
function selectLang(lang) {
  currentLang = lang;
  footer.style.backgroundImage = `url('images/footer-${lang}.png')`;
  const promoImg = document.querySelector('#hotel-promo img');
  if (promoImg) promoImg.src = `images/hotel-${lang}.png`;
  
  const viniTabEl = document.getElementById('tab-vini');
  if (viniTabEl) viniTabEl.innerText = translations[lang].viniTab;

  transitionPage("language-page", "menu-page", "block");

  setTimeout(() => {
    footer.classList.add("visible");
    arrow.style.display = "flex";
    const firstBtn = document.querySelector('.btn-nav');
    navigateTo(0, firstBtn);
  }, 400);
}

// --- NAVIGAZIONE PRINCIPALE (MODIFICATA) ---
async function navigateTo(newIndex, element) {
  const wrapper = document.getElementById('content-wrapper');
  const oldContent = document.getElementById('current-content');
  
  if (newIndex === currentIndex && oldContent) return;

  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const sectionName = tabs[newIndex];
  
  // Dati per l'Header Dinamico
  const sectionsData = [
    { title: 'BAR', sub: translations[currentLang].barSub, img: 'bar.png' },
    { title: 'RISTO', sub: translations[currentLang].ristoSub, img: 'ristorante.png' },
    { title: 'PIZZA', sub: translations[currentLang].pizzaSub, img: 'pizzeria.png' },
    { title: 'VINI', sub: translations[currentLang].viniSub, img: 'vini.png' }
  ];
  
  const data = sectionsData[newIndex];
  const langDir = currentLang.toUpperCase();
  // Qui puntiamo sempre allo stesso file standard per ogni sezione
  const basePath = `content/${langDir}/${sectionName}`; 

  // Aggiorna UI Navigazione
  document.querySelectorAll('.btn-nav').forEach(btn => btn.classList.remove('active-page'));
  if (element) element.classList.add('active-page');
  syncIndicator();

  const directionClass = newIndex > currentIndex ? 'slide-right' : 'slide-left';
  const exitClass = newIndex > currentIndex ? 'slide-left' : 'slide-right';

  const newContent = document.createElement('div');
  newContent.className = `content-section ${directionClass}`;
  newContent.id = 'current-content';

  // Header HTML (generato via JS per mantenere le transizioni)
  let headerHtml = `
    <header class="fixed-header h-35 absolute top-0 left-0 w-full z-50 overflow-hidden shadow-lg">
        <img src="images/${data.img}" alt="${data.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
        <div class="header-text-container absolute bottom-6 left-6 text-white">
            <h1 class="text-3xl font-[900] uppercase">${data.title}</h1>
            <p class="text-xs font-semibold opacity-80 uppercase tracking-[0.2em] mt-1">${data.sub}</p>
        </div>
    </header>`;

  // Caricamento del contenuto UNICO
  try {
      const response = await fetch(`${basePath}/main.html`);
      if (!response.ok) throw new Error("File non trovato");
      const externalHtml = await response.text();
      
      newContent.innerHTML = `
        <div class="scroll-area" style="width:100%; height:100%; overflow-y:auto; background:white;">
            ${headerHtml}
            <div class="menu-body" style="padding: 20px; padding-top: 240px; padding-bottom: 100px; position:relative; z-index:10; background:white;">
                ${externalHtml}
            </div>
        </div>`;
  } catch (err) {
    console.error(err);
    newContent.innerHTML = `
        <div class="scroll-area" style="width:100%; height:100%; background:white;">
            ${headerHtml}
            <div style="padding:100px; text-align:center; padding-top:250px;">
                Menu in aggiornamento...
            </div>
        </div>`;
  }

  wrapper.appendChild(newContent);
  currentIndex = newIndex;

  // Animazione Header Minimizzato allo scroll
  setTimeout(() => {
    const header = newContent.querySelector('.fixed-header');
    const body = newContent.querySelector('.menu-body');
    if (header) header.classList.add('minimized');
    if (body) body.style.paddingTop = "110px";
  }, 800);

  // Esecuzione transizione slide
  requestAnimationFrame(() => {
    if (oldContent) {
      oldContent.classList.remove('slide-active');
      oldContent.classList.add(exitClass);
    }
    newContent.classList.remove('slide-right', 'slide-left');
    newContent.classList.add('slide-active');
  });

  setTimeout(() => { if (oldContent) oldContent.remove(); }, 500);
}

// --- GESTIONE DROPDOWN ---
async function toggleDropdown(groupId) {
    const group = document.getElementById(groupId);
    if (!group) return;

    const isActive = group.classList.contains('active');
    
    // Chiudi tutti
    document.querySelectorAll('.category-group').forEach(g => {
        g.classList.remove('active');
    });
    
    // Se era chiuso, apri
    if (!isActive) {
        group.classList.add('active');
        
        // Carica contenuto
        const fileName = group.getAttribute('data-file');
        const menuItems = group.querySelector('.menu-items');
        
        if (menuItems && fileName && menuItems.textContent.trim() === 'Caricamento...') {
            try {
                const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
                const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/${fileName}`;
                
                const response = await fetch(path);
                if (!response.ok) throw new Error('File not found');
                const html = await response.text();
                menuItems.innerHTML = html;
            } catch (err) {
                console.error(err);
                menuItems.innerHTML = `<div class="text-red-500 p-2">Errore caricamento</div>`;
            }
        }
    }
}

// Sincronizzazione visiva indicatore
function syncIndicator() {
  const activeBtn = document.querySelector('.btn-nav.active-page');
  const indicator = document.querySelector('.nav-indicator');
  const nav = document.querySelector('.nav-glass');
  if (!activeBtn || !indicator || !nav) return;
  const rect = activeBtn.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  indicator.style.width = `${rect.width}px`;
  indicator.style.left = `${rect.left - navRect.left}px`;
}

function transitionPage(fromId, toId, displayStyle) {
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);
  if (from) from.style.opacity = "0";
  setTimeout(() => {
    if (from) from.style.display = "none";
    if (to) {
      to.style.display = displayStyle;
      setTimeout(() => to.style.opacity = "1", 50);
    }
  }, 600);
}

function toggleFooter() {
  const isOpen = footer.classList.contains('open');
  if (!isOpen) {
    footer.classList.add('open');
    overlay.style.display = 'block';
    setTimeout(() => overlay.classList.add('active'), 10);
    arrow.innerHTML = '✕';
  } else {
    footer.classList.remove('open');
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.style.display = 'none';
      arrow.innerHTML = '↑';
    }, 500);
  }
}

// FUNZIONI RISTORANTE
async function toggleAntipasti() {
  const container = document.getElementById('antipasti-content');
  const button = document.getElementById('btn-antipasti');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/antipasti.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento antipasti.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function togglePrimi() {
  const container = document.getElementById('primi-content');
  const button = document.getElementById('btn-primi');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/primi.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento primi.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleSecondi() {
  const container = document.getElementById('secondi-content');
  const button = document.getElementById('btn-secondi');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/secondi.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento secondi.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleBambini() {
  const container = document.getElementById('bambini-content');
  const button = document.getElementById('btn-bambini');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/bambini.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento bambini.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleZuppe() {
  const container = document.getElementById('zuppe-content');
  const button = document.getElementById('btn-zuppe');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/zuppe.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento zuppe.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleInsalate() {
  const container = document.getElementById('insalate-content');
  const button = document.getElementById('btn-insalate');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/insalate.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento insalate.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleContorni() {
  const container = document.getElementById('contorni-content');
  const button = document.getElementById('btn-contorni');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/contorni.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento contorni.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// FUNZIONI PIZZERIA
async function toggleClassiche() {
  const container = document.getElementById('classiche-content');
  const button = document.getElementById('btn-classiche');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/classiche.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento classiche.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleFornarine() {
  const container = document.getElementById('fornarine-content');
  const button = document.getElementById('btn-fornarine');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/fornarine.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento fornarine.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleSemplici() {
  const container = document.getElementById('semplici-content');
  const button = document.getElementById('btn-semplici');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/semplici.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento semplici.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleCalzone() {
  const container = document.getElementById('calzone-content');
  const button = document.getElementById('btn-calzone');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/calzone.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento calzone.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleOrto() {
  const container = document.getElementById('orto-content');
  const button = document.getElementById('btn-orto');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/orto.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento orto.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleCittadine() {
  const container = document.getElementById('cittadine-content');
  const button = document.getElementById('btn-cittadine');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/cittadine.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento cittadine.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

async function toggleSpeciali() {
  const container = document.getElementById('speciali-content');
  const button = document.getElementById('btn-speciali');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const tabs = ['bar', 'ristorante', 'pizzeria', 'vini'];
  const path = `content/${currentLang.toUpperCase()}/${tabs[currentIndex]}/sections/speciali.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento speciali.html</div>';
    container.style.display = 'block';
    highlightButton(button, '#1a1a1a');
  }
}

// FUNZIONI VINI
async function toggleBollicine() {
  const container = document.getElementById('bollicine-content');
  const button = document.querySelector('[onclick="toggleBollicine()"]');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const path = `content/${currentLang.toUpperCase()}/vini/sections/bollicine.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, 'rgba(212, 175, 55, 0.25)');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento bollicine.html</div>';
    container.style.display = 'block';
    highlightButton(button, 'rgba(212, 175, 55, 0.25)');
  }
}

async function toggleRosati() {
  const container = document.getElementById('rosati-content');
  const button = document.querySelector('[onclick="toggleRosati()"]');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const path = `content/${currentLang.toUpperCase()}/vini/sections/rosati.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, 'rgba(194, 84, 127, 0.25)');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento rosati.html</div>';
    container.style.display = 'block';
    highlightButton(button, 'rgba(194, 84, 127, 0.25)');
  }
}

async function toggleRossi() {
  const container = document.getElementById('rossi-content');
  const button = document.querySelector('[onclick="toggleRossi()"]');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const path = `content/${currentLang.toUpperCase()}/vini/sections/rossi.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, 'rgba(114, 47, 55, 0.25)');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento rossi.html</div>';
    container.style.display = 'block';
    highlightButton(button, 'rgba(114, 47, 55, 0.25)');
  }
}

async function toggleBianchi() {
  const container = document.getElementById('bianchi-content');
  const button = document.querySelector('[onclick="toggleBianchi()"]');
  const originalColor = button.style.background;
  
  if (container.style.display !== 'none') {
    container.style.display = 'none';
    unhighlightButton(button, originalColor);
    return;
  }
  
  const path = `content/${currentLang.toUpperCase()}/vini/sections/bianchi.html`;
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    const html = await response.text();
    container.innerHTML = html;
    container.style.display = 'block';
    highlightButton(button, 'rgba(245, 241, 222, 0.25)');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div style="color: red; padding: 1rem;">Errore caricamento bianchi.html</div>';
    container.style.display = 'block';
    highlightButton(button, 'rgba(245, 241, 222, 0.25)');
  }
}