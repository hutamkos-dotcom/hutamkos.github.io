// ============================================
// DOM ELEMENTS
// ============================================
const $ = (id) => document.getElementById(id);

const menuBtn = $('menuBtn');
const menuModal = $('menuModal');
const modalClose = $('modalClose');
const resultModal = $('resultModal');
const resultClose = $('resultClose');
const resultContent = $('resultContent');
const searchInput = $('searchInput');
const searchBtn = $('searchBtn');
const suggestionsList = $('suggestions');

const mainView = $('mainView');
const detailView = $('detailView');

const heroCard = $('heroCard');
const heroBackground = $('heroBackground');
const brandLogo = $('brandLogo');

const detailImageCard = $('detailImageCard');
const detailImage = $('detailImage');
const detailImageOverlay = $('detailImageOverlay');
const detailImageInfo = $('detailImageInfo');
const detailBackBtn = $('detailBackBtn');
const detailHeartBtn = $('detailHeartBtn');
const detailShareBtn = $('detailShareBtn');
const detailTitle = $('detailTitle');
const detailTitleBar = $('detailTitleBar');
const detailDescription = $('detailDescription');
const detailDescriptionWrapper = $('detailDescriptionWrapper');
const detailPrevText = $('detailPrevText');
const detailNextText = $('detailNextText');
const detailList = $('detailList');
const detailListWrapper = $('detailListWrapper');
const detailCategories = $('detailCategories');

const detailTextCard = $('detailTextCard');
const detailTextCollapseArrow = $('detailTextCollapseArrow');
const detailTextCollapsedBtn = $('detailTextCollapsedBtn');

const detailListCard = $('detailListCard');
const detailListCollapseArrow = $('detailListCollapseArrow');
const detailListCollapsedBtn = $('detailListCollapsedBtn');

const masonryGrid = $('masonryGrid');
const detailMasonryGrid = $('detailMasonryGrid');

const bottomNav = $('bottomNav');
const bottomNavBtns = document.querySelectorAll('.bottom-nav-btn');

const aboutOverlay = $('aboutOverlay');
const aboutClose = $('aboutClose');
const contactOverlay = $('contactOverlay');
const contactClose = $('contactClose');

const brochureOverlay = $('brochureOverlay');
const brochureScroll = $('brochureScroll');

const quoteSection = $('quoteSection');
const quoteText = $('quoteText');
const quoteAuthor = $('quoteAuthor');

const themeMenuItem = $('themeMenuItem');

const filterBar = $('filterBar');
const filterBtns = document.querySelectorAll('.filter-btn');

const priceInfoModal = $('priceInfoModal');
const priceInfoClose = $('priceInfoClose');
const priceInfoContent = $('priceInfoContent');

const reviewsModal = $('reviewsModal');
const reviewsClose = $('reviewsClose');
const reviewsContent = $('reviewsContent');

// ============================================
// SCROLL LOCK HELPERS
// ============================================
let savedScrollY = 0;
let modalOpenCount = 0;

function lockBodyScroll() {
    if (modalOpenCount === 0) {
        savedScrollY = window.scrollY;
        document.body.style.top = `-${savedScrollY}px`;
        document.body.classList.add('modal-open');
    }
    modalOpenCount++;
}

function unlockBodyScroll() {
    modalOpenCount = Math.max(0, modalOpenCount - 1);
    if (modalOpenCount === 0) {
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo(0, savedScrollY);
    }
}

function forceUnlockBodyScroll() {
    modalOpenCount = 0;
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
}

// ============================================
// BRAND LOGO
// ============================================
let brandLogoTimer = null;
if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
        e.stopPropagation();
        brandLogo.classList.add('expanded');
        clearTimeout(brandLogoTimer);
        brandLogoTimer = setTimeout(() => {
            brandLogo.classList.remove('expanded');
        }, 2200);
    });
}

// ============================================
// HERO BACKGROUND
// ============================================
const heroBackgrounds = [
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Elegant%20Nail%20Polish%20Display%20(1).png',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Confident%20Professional.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Modern%20Stylish%20Interior%20Space.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Smiling%20Woman%20Portrait.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Serene%20Contemplation.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Serene%20Portrait%20of%20a%20Woman.webp'
];
let currentHeroBgIdx = 0;
heroBackgrounds.forEach(url => { const img = new Image(); img.src = url; });

heroCard.addEventListener('click', (e) => {
    if (e.target.closest('.menu-btn, .brand-logo, .search-section, .quote-section, input, button, a')) return;
    currentHeroBgIdx = (currentHeroBgIdx + 1) % heroBackgrounds.length;
    heroBackground.style.backgroundImage = `url('${heroBackgrounds[currentHeroBgIdx]}')`;
});

// ============================================
// QUOTES
// ============================================
const quotes = [
    { text: '„Nem leszünk képesek megoldani a világ összes baját, de sose becsüljük alá saját jelentőségünket!"', author: 'Michelle Obama' },
    { text: '„Amiben az emberi elme hinni tud, azt meg is tudja valósítani."', author: 'Napoleon Hill' },
    { text: '„A nők nemcsak családokat, hanem közösségeket és nemzeteket is építenek."', author: 'Hillary Clinton' },
    { text: '„A nők mindennap újraírják a lehetetlent."', author: 'Serena Williams' },
    { text: '„Légy olyan nő, akinek a jelenléte inspirálja a többit."', author: 'Maya Angelou' },
    { text: '„A nők nem azért erősek, mert nincs félelmük, hanem mert szembenéznek vele."', author: 'J.K. Rowling' }
];
let currentQuoteIdx = -1;

function renderQuote(animate = false) {
    let idx;
    do { idx = Math.floor(Math.random() * quotes.length); } while (idx === currentQuoteIdx && quotes.length > 1);
    currentQuoteIdx = idx;
    const q = quotes[idx];

    if (animate) {
        quoteSection.classList.add('fade-out');
        setTimeout(() => {
            quoteText.textContent = q.text;
            quoteAuthor.textContent = q.author;
            quoteSection.classList.remove('fade-out');
        }, 250);
    } else {
        quoteText.textContent = q.text;
        quoteAuthor.textContent = q.author;
    }
}
renderQuote(false);
quoteSection.addEventListener('click', (e) => { e.stopPropagation(); renderQuote(true); });

// ============================================
// THEME
// ============================================
const THEME_KEY = 'nails1_theme';
const themes = ['light', 'dark'];
const themeLabels = { light: 'világos', dark: 'sötét' };

function getCurrentTheme() {
    if (document.body.classList.contains('theme-dark')) return 'dark';
    return 'light';
}

function updateThemeMenuLabel() {
    if (themeMenuItem) themeMenuItem.textContent = `Téma: ${themeLabels[getCurrentTheme()]}`;
}

function applyTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark');
    if (theme === 'dark') document.body.classList.add('theme-dark');
    else document.body.classList.add('theme-light');

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f1ea' : '#000000');

    try { localStorage.setItem(THEME_KEY, theme); } catch(e) {}
    updateThemeMenuLabel();
}

applyTheme('dark');

function cycleTheme() {
    const idx = themes.indexOf(getCurrentTheme());
    applyTheme(themes[(idx + 1) % themes.length]);
}

// ============================================
// OVERLAY / BOTTOM NAV SYNC
// ============================================
function isAnyOverlayOpen() {
    return brochureOverlay.classList.contains('active') ||
           aboutOverlay.classList.contains('active') ||
           contactOverlay.classList.contains('active') ||
           menuModal.classList.contains('active') ||
           resultModal.classList.contains('active') ||
           priceInfoModal.classList.contains('active') ||
           reviewsModal.classList.contains('active');
}

function syncBottomNavWithOverlays() {
    bottomNav.classList.toggle('hidden-by-overlay', isAnyOverlayOpen());
}

// ============================================
// LOCAL STORAGE HELPERS
// ============================================
const LIKES_KEY = 'nails1_likes';
const SHARES_KEY = 'nails1_shares';
const LIKED_KEY = 'nails1_liked_ids';
const VIEWS_KEY = 'nails1_views';

function loadStore(key) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : {}; }
    catch(e) { return {}; }
}
function saveStore(key, obj) { try { localStorage.setItem(key, JSON.stringify(obj)); } catch(e) {} }

function loadLikedSet() {
    try { const raw = localStorage.getItem(LIKED_KEY); return new Set(raw ? JSON.parse(raw) : []); }
    catch(e) { return new Set(); }
}
function saveLikedSet(set) { try { localStorage.setItem(LIKED_KEY, JSON.stringify([...set])); } catch(e) {} }

function getLikeCount(id) {
    const s = loadStore(LIKES_KEY);
    if (s[id] === undefined) { s[id] = 20 + Math.floor(Math.random() * 480); saveStore(LIKES_KEY, s); }
    return s[id];
}
function getShareCount(id) {
    const s = loadStore(SHARES_KEY);
    if (s[id] === undefined) { s[id] = 5 + Math.floor(Math.random() * 120); saveStore(SHARES_KEY, s); }
    return s[id];
}
function bumpLike(id, delta = 1) {
    getLikeCount(id);
    const s = loadStore(LIKES_KEY);
    s[id] = Math.max(0, (s[id] || 0) + delta);
    saveStore(LIKES_KEY, s);
    return s[id];
}
function bumpShare(id) {
    getShareCount(id);
    const s = loadStore(SHARES_KEY);
    s[id] = (s[id] || 0) + 1;
    saveStore(SHARES_KEY, s);
    return s[id];
}
function isLikedByMe(id) { return loadLikedSet().has(String(id)); }
function toggleLikedByMe(id) {
    const set = loadLikedSet(); const key = String(id);
    if (set.has(key)) { set.delete(key); saveLikedSet(set); return false; }
    set.add(key); saveLikedSet(set); return true;
}

function showActionBadge(btn, text) {
    if (!btn) return;
    let badge = btn.querySelector('.action-badge');
    if (!badge) { badge = document.createElement('span'); badge.className = 'action-badge'; btn.appendChild(badge); }
    badge.textContent = text;
    badge.classList.remove('visible');
    void badge.offsetWidth;
    badge.classList.add('visible');
    clearTimeout(badge._hideTimer);
    badge._hideTimer = setTimeout(() => badge.classList.remove('visible'), 1400);
}

function getViewCount(id) {
    const v = loadStore(VIEWS_KEY);
    if (v[id] === undefined) { v[id] = 50 + Math.floor(Math.random() * 950); saveStore(VIEWS_KEY, v); }
    return v[id];
}
function incrementViewCount(id) {
    const v = loadStore(VIEWS_KEY);
    v[id] = (v[id] || 0) + 1;
    saveStore(VIEWS_KEY, v);
    return v[id];
}
function formatViewCount(n) { return n.toLocaleString('hu-HU').replace(/\s/g, '.'); }

// ============================================
// DATA
// ============================================
const database = [
    { name: 'Klasszikus manikűr', category: 'manikur', price: 4500 },
    { name: 'Géllakkos manikűr', category: 'gel', price: 6500 },
    { name: 'Francia manikűr', category: 'manikur', price: 5500 },
    { name: 'Pedikűr wellness', category: 'pedikur', price: 7000 },
    { name: 'Géllakkos pedikűr', category: 'gel', price: 8500 },
    { name: 'Műköröm építés', category: 'mutakor', price: 12000 },
    { name: 'Műköröm töltés', category: 'mutakor', price: 8000 },
    { name: 'Díszítés kristályokkal', category: 'gel', price: 3000 },
    { name: 'Ombré körmök', category: 'gel', price: 9000 },
    { name: 'Nail art', category: 'manikur', price: 5000 }
];

const TRENDING_SEARCHES = [
    'Géllakkos manikűr',
    'Francia manikűr',
    'Mandula köröm',
    'Nail art',
    'Ombré körmök',
    'Pedikűr wellness'
];

const heightMap = { h1: 180, h2: 220, h3: 160, h4: 260, h5: 200, h6: 240 };

const articleContent = {
    id: 99, isArticle: true, bg: 'bg-nude', height: 'h4',
    image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Untitled-3.jpg',
    title: 'Megéri még körmösnek tanulni?',
    description: 'Elemzés a magyar körmös piac jövőjéről.',
    keywords: ['körmös szakma', 'karrier', 'piac', 'statisztika', 'elemzés', 'jövő'],
    uploadDate: '2026.08.11', aiGenerated: false, style: 'Cikk',
    articleTitle: 'Megéri még körmösnek tanulni?',
    articleText: `Mennyi körmösre lenne szüksége Magyarországnak valójában?

A műkörmök világa ma már nem csupán divat, hanem egyfajta önkifejezés, rutin és közösségi élmény. Magyarországon a nők jelentős része rendszeresen jár körmöshöz, de eddig kevesen gondolták végig, hogy ez a szokás milyen méretű szakmai hátteret igényel. A KSH adatai alapján a 18–54 éves korosztályban él körülbelül 1,6–1,8 millió nő, akik potenciálisan igénybe veszik a műkörmös szolgáltatásokat.`
};

const masonryCardsBase = [
    { id: 0, bg: 'bg-pink', height: 'h2',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Barack%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20feh%C3%A9r%20vonalas%20lev%C3%A9l%20minta%202026%E2%80%9107%E2%80%9104%E2%80%9120%E2%80%9156%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Barack mandula körmök',
        description: 'Elegáns barack színű mandula formájú körmök finom fehér levél mintával.',
        keywords: ['mandula köröm', 'barack szín', 'levél minta', 'közepes hossz', 'nőies', 'elegáns'],
        uploadDate: '2026.07.04', aiGenerated: true, style: 'Természetes' },
    { id: 1, bg: 'bg-purple', height: 'h1',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Cseresznyevir%C3%A1g%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20fekete%20r%C3%B3zsasz%C3%ADn%20akcentus%202026%E2%80%9107%E2%80%9105%E2%80%9119%E2%80%9152%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Cseresznyevirág mandula',
        description: 'Fekete-rózsaszín akcentusos cseresznyevirág mintás mandula körmök.',
        keywords: ['cseresznyevirág', 'fekete', 'rózsaszín', 'akcentus', 'japán stílus', 'virág'],
        uploadDate: '2026.07.05', aiGenerated: true, style: 'Extravagáns' },
    { id: 2, bg: 'bg-peach', height: 'h4',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Cseresznyevir%C3%A1g%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20fekete%20r%C3%B3zsasz%C3%ADn%20feh%C3%A9r%20akcentus%202026%E2%80%9107%E2%80%9105%E2%80%9119%E2%80%9153%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Cseresznyevirág fehér akcentus',
        description: 'Fekete, rózsaszín és fehér akcentusú cseresznyevirág körmök.',
        keywords: ['cseresznyevirág', 'fekete', 'rózsaszín', 'fehér', 'akcentus', 'kontraszt'],
        uploadDate: '2026.07.05', aiGenerated: true, style: 'Modern' },
    { id: 3, bg: 'bg-lavender', height: 'h3',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Fekete%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20arany%20glitter%20b%C3%A9zs%20sz%C3%BCrke%20akcentus%202026%E2%80%9107%E2%80%9104%E2%80%9120%E2%80%9158%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Fekete mandula arany glitter',
        description: 'Fekete mandula körmök arany glitterrel.',
        keywords: ['fekete', 'arany glitter', 'béžs', 'szürke', 'luxus', 'estélyi'],
        uploadDate: '2026.07.04', aiGenerated: true, style: 'Estélyi' },
    { id: 4, bg: 'bg-rose', height: 'h5',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Fekete%20sz%C3%B6gletes%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20feh%C3%A9r%20m%C3%A1rv%C3%A1ny%20arany%20f%C3%B3lia%202026%E2%80%9107%E2%80%9104%E2%80%9120%E2%80%9147%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Fekete szögletes márvány',
        description: 'Fekete szögletes körmök fehér márvány mintával és arany fóliával.',
        keywords: ['fekete', 'szögletes', 'márvány', 'arany fólia', 'modern', 'kifinomult'],
        uploadDate: '2026.07.04', aiGenerated: true, style: 'Kortárs' },
    { id: 5, bg: 'bg-mint', height: 'h3',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Fekete%20sz%C3%B6gletes%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20m%C3%A1rv%C3%A1ny%20arany%20f%C3%B3lia%202026%E2%80%9107%E2%80%9104%E2%80%9120%E2%80%9148%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Fekete márvány arany',
        description: 'Fekete szögletes körmök márvány textúrával és arany fóliával.',
        keywords: ['fekete', 'szögletes', 'márvány', 'arany', 'időtlen', 'merész'],
        uploadDate: '2026.07.04', aiGenerated: true, style: 'Klasszikus' },
    { id: 6, bg: 'bg-coral', height: 'h6',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Hossz%C3%BA%20mandula%20k%C3%B6rm%C3%B6k%20halv%C3%A1ny%20r%C3%B3zsasz%C3%ADn%20f%C3%A9nyes%20manik%C5%B1r%202026%E2%80%9106%E2%80%9123_14%E2%80%9107%E2%80%9100%201792x2304%20HQ.webp',
        title: 'Hosszú mandula rózsaszín',
        description: 'Halvány rózsaszín hosszú mandula körmök fényes manikűrrel.',
        keywords: ['hosszú köröm', 'mandula', 'halvány rózsaszín', 'fényes', 'nőies', 'romantikus'],
        uploadDate: '2026.06.23', aiGenerated: true, style: 'Romantikus' },
    { id: 7, bg: 'bg-nude', height: 'h2',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/K%C3%B6zepes%20mandula%20k%C3%B6rm%C3%B6k%20fekete%20sz%C3%BCrke%20feh%C3%A9r%20p%C3%B6tty%C3%B6s%20manik%C5%B1r%202026%E2%80%9106%E2%80%9123_14%E2%80%9129%E2%80%9140%201792x2304%2034%20HQ.webp',
        title: 'Közepes pöttyös manikűr',
        description: 'Közepes hosszú mandula körmök fekete, szürke, fehér pöttyös mintával.',
        keywords: ['közepes hossz', 'mandula', 'pöttyös', 'fekete', 'szürke', 'fehér'],
        uploadDate: '2026.06.23', aiGenerated: true, style: 'Játékos' },
    { id: 8, bg: 'bg-lavender', height: 'h4',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20detailed%20beauty%20editorial%20close%E2%80%91up%20showcasing%20almond%E2%80%91shaped%20nails%20in%20a%20pastel%20laven%20280200%20(1).webp',
        title: 'Pasztell levendula mandula',
        description: 'Részletes szépség editorial közeli felvétel pasztell levendula színű mandula körmökről.',
        keywords: ['mandula köröm', 'pasztell', 'levendula', 'editorial', 'romantikus'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Editorial' },
    { id: 9, bg: 'bg-blush', height: 'h2',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20detailed%20beauty%20editorial%20close%E2%80%91up%20showcasing%20almond%E2%80%91shaped%20nails%20in%20a%20pastel%20laven%2093286.webp',
        title: 'Levendula editorial close-up',
        description: 'Pasztell levendula árnyalatú mandula körmök editorial fotózással.',
        keywords: ['mandula', 'levendula', 'pasztell', 'prémium', 'editorial'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Prémium' },
    { id: 10, bg: 'bg-plum', height: 'h3',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20photorealistic%20close%E2%80%91up%20of%20almond%E2%80%91shaped%20nails%20coated%20in%20a%20midnight%20sapphire%20lacque%20959665.webp',
        title: 'Éjféli zafír mandula',
        description: 'Fotorealisztikus közeli felvétel mandula körmökről, éjféli zafírkék lakkozással.',
        keywords: ['mandula', 'zafír', 'sötétkék', 'éjféli', 'elegáns'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Elegáns' },
    { id: 11, bg: 'bg-champagne', height: 'h5',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20photorealistic%20close%E2%80%91up%20of%20refined%20almond%E2%80%91shaped%20nails%20coated%20in%20a%20luminous%20milky%E2%80%91w%20148160.webp',
        title: 'Tejfehér ragyogó mandula',
        description: 'Kifinomult mandula körmök ragyogó tejfehér lakkozással.',
        keywords: ['mandula', 'tejfehér', 'ragyogó', 'letisztult', 'időtlen'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Minimalista' },
    { id: 12, bg: 'bg-nude', height: 'h2',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20photorealistic%20macro%20composition%20of%20almond%E2%80%91shaped%20nails%20painted%20in%20a%20warm%20honey%E2%80%91nud%20618432.webp',
        title: 'Meleg mézes-nude mandula',
        description: 'Fotorealisztikus makró kompozíció mandula körmökről meleg mézes-nude árnyalatban.',
        keywords: ['mandula', 'nude', 'méz szín', 'meleg', 'természetes'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Természetes' },
    { id: 13, bg: 'bg-peach', height: 'h4',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_Close-up%20of%20a%20hand%20with%20white%20nails%2C%20wearing%20a%20gold%20watch%2C%20next%20to%20a%20phone%20on%20a%20light%20606020%20(1).webp',
        title: 'Fehér körmök arany órával',
        description: 'Közeli felvétel egy kézről fehér körmökkel, arany karóra és telefon.',
        keywords: ['fehér köröm', 'arany óra', 'lifestyle', 'modern', 'minimalista'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Lifestyle' },
    { id: 14, bg: 'bg-rose', height: 'h3',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_Macro%20photography%20of%20short%20square%20natural%20nails%20with%20thin%20pink%20micro-French%20tips%2C%20cle%20512149.webp',
        title: 'Rövid mikro-francia',
        description: 'Rövid, szögletes természetes körmök vékony rózsaszín mikro-francia csúcsokkal.',
        keywords: ['rövid köröm', 'szögletes', 'mikro francia', 'rózsaszín', 'természetes'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Természetes' },
    { id: 15, bg: 'bg-blush', height: 'h5',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_Photorealistic%20close-up%20of%20elegant%20almond-shaped%20nails%20with%20a%20soft%20pearl%20pink%20glazed%20622578.webp',
        title: 'Gyöngyházfényű rózsaszín',
        description: 'Elegáns mandula körmök lágy gyöngyházfényű rózsaszín mázas kivitellel.',
        keywords: ['mandula', 'gyöngyházfény', 'rózsaszín', 'glazed', 'elegáns'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Elegáns' },
    { id: 16, bg: 'bg-pink', height: 'h2',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_Photorealistic%20close-up%20of%20elegant%20almond-shaped%20nails%20with%20a%20soft%20pearl%20pink%20glazed%20671208.webp',
        title: 'Gyöngyházfényű mandula',
        description: 'Elegáns mandula formájú körmök gyöngyházfényű rózsaszín mázzal.',
        keywords: ['mandula', 'gyöngyházfény', 'rózsaszín', 'romantikus', 'nőies'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Romantikus' },
    { id: 17, bg: 'bg-berry', height: 'h4',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_Photorealistic%20close-up%20of%20elegant%20almond-shaped%20nails%20with%20a%20soft%20pearl%20pink%20glazed%20834044.webp',
        title: 'Lágy gyöngy rózsaszín',
        description: 'Fotorealisztikus close-up: elegáns mandula körmök lágy gyöngyházfényű rózsaszínnel.',
        keywords: ['mandula', 'gyöngy', 'rózsaszín', 'glazed', 'elegáns'],
        uploadDate: '2026.08.09', aiGenerated: true, style: 'Kifinomult' },
    { id: 18, bg: 'bg-plum', height: 'h3',
        image: 'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/R%C3%B6vid%20kocka%20k%C3%B6rm%C3%B6k%20s%C3%B6t%C3%A9tsz%C3%BCrke%20matt%20manik%C5%B1r%202026%E2%80%9106%E2%80%9123_14%E2%80%9128%E2%80%9150%201792x2304%2034%20HQ.webp',
        title: 'Rövid kocka sötétszürke matt',
        description: 'Rövid, szögletes kocka körmök sötétszürke matt manikűrrel.',
        keywords: ['rövid köröm', 'kocka forma', 'sötétszürke', 'matt', 'minimalista'],
        uploadDate: '2026.06.23', aiGenerated: true, style: 'Minimalista' }
];

const masonryCards = [...masonryCardsBase];
masonryCards.splice(Math.floor(masonryCards.length / 2), 0, articleContent);

const detailTexts = [
    { title: 'Alkalmi köröm kiválasztása',
      description: 'Az alkalmi köröm kiválasztásánál érdemes figyelembe venni az esemény hangulatát, hiszen egy elegánsabb alkalomhoz visszafogottabb, letisztultabb dizájn illik, míg egy lazább vagy bulis esemény bátrabban elbírja a színeket és a csillogást. Fontos, hogy a körmöd harmonizáljon az öltözéked színvilágával és stílusával.' },
    { title: 'Trendi színek 2026-ban',
      description: 'Az idei év trendszínei a lágy pasztellek és a merész, telített árnyalatok érdekes kombinációja. A halvány rózsaszín, barack és krémfehér tökéletes a hétköznapokra, míg a mélyvörös, burgundi és fekete az esti alkalmakhoz illenek.' },
    { title: 'Körömforma és arcforma',
      description: 'A körömforma kiválasztása nemcsak esztétikai kérdés. A mandula forma megnyújtja az ujjakat, elegáns benyomást kelt. A ballerina forma modern és merész. A kocka forma karakteres, erőteljes megjelenést ad.' }
];

const categoryOrder = ['szalon', 'kellekbolt', 'webaruhaz', 'tanfolyam', 'digitalis', 'nyomda'];

const categoryLists = {
    szalon: [
        { id: 'sz1', km: 3, name: 'The nail salon', address: '1052 Budapest, Petőfi u. 5.', phone: '+36 1 234 5601', web: 'https://thenailsalon.hu', facebook: 'https://facebook.com/thenailsalon', instagram: 'https://instagram.com/thenailsalon', tiktok: 'https://tiktok.com/@thenailsalon' },
        { id: 'sz2', km: 3, name: 'Nails to me salon', address: '1075 Budapest, Király u. 27.', phone: '+36 1 234 5602', web: 'https://nailstome.hu', facebook: 'https://facebook.com/nailstome', instagram: 'https://instagram.com/nailstome', tiktok: 'https://tiktok.com/@nailstome' },
        { id: 'sz3', km: 5, name: 'Mona körmei szalon', address: '1085 Budapest, József krt. 12.', phone: '+36 1 234 5603', web: 'https://monakormei.hu', facebook: 'https://facebook.com/monakormei', instagram: 'https://instagram.com/monakormei', tiktok: 'https://tiktok.com/@monakormei' },
        { id: 'sz4', km: 7, name: 'Saint Marie körömstúdió', address: '1136 Budapest, Balzac u. 42.', phone: '+36 1 234 5604', web: 'https://saintmarie.hu', facebook: 'https://facebook.com/saintmarie', instagram: 'https://instagram.com/saintmarie', tiktok: 'https://tiktok.com/@saintmarie' },
        { id: 'sz5', km: 9, name: 'Anita körömszalon', address: '1145 Budapest, Amerikai út 15.', phone: '+36 1 234 5605', web: 'https://anitakorom.hu', facebook: 'https://facebook.com/anitakorom', instagram: 'https://instagram.com/anitakorom', tiktok: 'https://tiktok.com/@anitakorom' },
        { id: 'sz6', km: 11, name: 'The salon of nails', address: '1183 Budapest, Üllői út 340.', phone: '+36 1 234 5606', web: 'https://salonofnails.hu', facebook: 'https://facebook.com/salonofnails', instagram: 'https://instagram.com/salonofnails', tiktok: 'https://tiktok.com/@salonofnails' },
        { id: 'sz7', km: 11, name: 'Nails 4 you', address: '1191 Budapest, Vak Bottyán u. 88.', phone: '+36 1 234 5607', web: 'https://nails4you.hu', facebook: 'https://facebook.com/nails4you', instagram: 'https://instagram.com/nails4you', tiktok: 'https://tiktok.com/@nails4you' }
    ],
    kellekbolt: [
        { id: 'kb1', km: 2, name: 'Nail Kellékbolt Központ', address: '1051 Budapest, Október 6. u. 4.', phone: '+36 1 345 6701', web: 'https://nailkellek.hu' },
        { id: 'kb2', km: 4, name: 'Beauty Supply Shop', address: '1074 Budapest, Rákóczi út 55.', phone: '+36 1 345 6702', web: 'https://beautysupply.hu' },
        { id: 'kb3', km: 6, name: 'Profi Körömkellék', address: '1097 Budapest, Ferenc krt. 22.', phone: '+36 1 345 6703', web: 'https://profikorom.hu' },
        { id: 'kb4', km: 8, name: 'Nails Store Budapest', address: '1132 Budapest, Váci út 105.', phone: '+36 1 345 6704', web: 'https://nailsstore.hu' },
        { id: 'kb5', km: 10, name: 'Manikűr Kellékek Boltja', address: '1152 Budapest, Szentmihályi út 133.', phone: '+36 1 345 6705', web: 'https://manikurkellek.hu' },
        { id: 'kb6', km: 12, name: 'Nail Art Shop', address: '1173 Budapest, Pesti út 12.', phone: '+36 1 345 6706', web: 'https://nailartshop.hu' }
    ],
    webaruhaz: [
        { id: 'wa1', online: true, name: 'nailshop.hu', web: 'https://nailshop.hu', phone: '+36 1 456 7801' },
        { id: 'wa2', online: true, name: 'körömkellék.hu', web: 'https://körömkellék.hu', phone: '+36 1 456 7802' },
        { id: 'wa3', online: true, name: 'beautywebshop.hu', web: 'https://beautywebshop.hu', phone: '+36 1 456 7803' },
        { id: 'wa4', online: true, name: 'manikur24.hu', web: 'https://manikur24.hu', phone: '+36 1 456 7804' },
        { id: 'wa5', online: true, name: 'nailsonline.hu', web: 'https://nailsonline.hu', phone: '+36 1 456 7805' }
    ],
    tanfolyam: [
        { id: 'tf1', km: 4, name: 'Kezdő körömépítő tanfolyam', address: '1077 Budapest, Wesselényi u. 33.', phone: '+36 1 567 8901', web: 'https://kezdotanfolyam.hu' },
        { id: 'tf2', km: 6, name: 'Haladó géllakk mesterkurzus', address: '1094 Budapest, Tűzoltó u. 41.', phone: '+36 1 567 8902', web: 'https://gellakkmester.hu' },
        { id: 'tf3', km: 8, name: 'Nail art workshop', address: '1141 Budapest, Fogarasi út 21.', phone: '+36 1 567 8903', web: 'https://nailartworkshop.hu' },
        { id: 'tf4', km: 10, name: 'Pedikűr szakoktatás', address: '1155 Budapest, Bem u. 8.', phone: '+36 1 567 8904', web: 'https://pedikurokt.hu' },
        { id: 'tf5', km: 12, name: 'Profi körömdíszítő képzés', address: '1182 Budapest, Üllői út 512.', phone: '+36 1 567 8905', web: 'https://profikepzes.hu' }
    ],
    digitalis: [
        { id: 'dg1', online: true, name: 'Nails1 mobilalkalmazás', web: 'https://nails1.hu/app' },
        { id: 'dg2', online: true, name: 'AR köröm-előnézet', web: 'https://nails1.hu/ar' },
        { id: 'dg3', online: true, name: 'Online konzultáció', web: 'https://nails1.hu/konzultacio' },
        { id: 'dg4', online: true, name: 'Digitális köröm-katalógus', web: 'https://nails1.hu/katalogus' },
        { id: 'dg5', online: true, name: 'AI dizájn generátor', web: 'https://nails1.hu/ai' }
    ],
    nyomda: [
        { id: 'ny1', online: true, isBook: true, bookYear: 2010, name: 'Nail Art Design Bible', web: 'https://konyvek.hu/nailart', phone: '+36 1 678 9001' },
        { id: 'ny2', online: true, isBook: true, bookYear: 2015, name: 'A modern manikűr kézikönyve', web: 'https://konyvek.hu/manikur', phone: '+36 1 678 9002' },
        { id: 'ny3', online: true, isBook: true, bookYear: 2017, name: 'Géllakk technikák enciklopédiája', web: 'https://konyvek.hu/gellakk', phone: '+36 1 678 9003' },
        { id: 'ny4', online: true, isBook: true, bookYear: 2019, name: 'Körömépítés lépésről lépésre', web: 'https://konyvek.hu/koromepites', phone: '+36 1 678 9004' },
        { id: 'ny5', online: true, isBook: true, bookYear: 2024, name: 'Nail Trends 2026 – A jövő körmei', web: 'https://konyvek.hu/trends', phone: '+36 1 678 9005' },
        { id: 'ny6', online: true, isBook: true, bookYear: 2022, name: 'Professzionális pedikűr atlasz', web: 'https://konyvek.hu/pedikur', phone: '+36 1 678 9006' }
    ]
};

const categoryLabels = {
    szalon: 'Szalonok',
    kellekbolt: 'Kellékboltok',
    webaruhaz: 'Webáruházak',
    tanfolyam: 'Tanfolyamok',
    digitalis: 'Digitális eszközök',
    nyomda: 'Könyvek'
};

const categoryRelevantIcons = {
    szalon: ['about', 'calendar', 'price', 'hours', 'phone', 'address', 'web'],
    kellekbolt: ['about', 'hours', 'phone', 'address', 'web'],
    webaruhaz: ['about', 'phone', 'web'],
    tanfolyam: ['about', 'calendar', 'hours', 'phone', 'address', 'web'],
    digitalis: ['about', 'web'],
    nyomda: ['about', 'phone', 'web']
};

const ICON_HINTS = {
    about:    { first: 'Engedd meg, hogy bemutatkozzam.', cta: 'Bemutatkozás megnyitása…' },
    calendar: { first: 'Nézd meg, van-e még szabad időpontom.', cta: 'Naptár megnyitása…' },
    price:    { first: 'Nézd meg áraimat.', cta: 'Árlista megnyitása…' },
    hours:    { first: 'Nézd meg nyitvatartási időmet.', cta: 'Nyitvatartás megnyitása…' },
    phone:    { first: 'Hívj bátran, hátha tudok segíteni.', cta: 'Hívás indítása…' },
    address:  { first: 'Látogass meg, hátha tudok segíteni.', cta: 'Térkép megnyitása…' },
    web:      { first: 'Látogasd meg az oldalaimat.', cta: 'Oldalak megnyitása…' }
};

const HU_DAYS = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];

const defaultHoursData = [
    null,
    [9, 19],
    [9, 19],
    [9, 19],
    [9, 20],
    [9, 20],
    [10, 16]
];

function formatHoursForDay(dowIndex) {
    const h = defaultHoursData[dowIndex];
    if (!h) return 'Zárva';
    const pad = (n) => n < 10 ? '0' + n : '' + n;
    return `${pad(h[0])}:00 – ${pad(h[1])}:00`;
}

function isSalonOpenNow() {
    const now = new Date();
    const dow = now.getDay();
    const h = defaultHoursData[dow];
    if (!h) return false;
    const cur = now.getHours() + now.getMinutes() / 60;
    return cur >= h[0] && cur < h[1];
}

function getKmClass(km) {
    if (km === undefined || km === null) return '';
    if (km <= 1) return 'km-1';
    if (km <= 2) return 'km-2';
    if (km <= 3) return 'km-3';
    if (km <= 4) return 'km-4';
    if (km <= 5) return 'km-5';
    if (km <= 6) return 'km-6';
    if (km <= 7) return 'km-7';
    if (km <= 8) return 'km-8';
    if (km <= 9) return 'km-9';
    if (km <= 10) return 'km-10';
    return 'km-far';
}

function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) - h) + str.charCodeAt(i);
        h |= 0;
    }
    return Math.abs(h);
}

function getCalendarInfoForDay(salonId, offsetDays) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(today);
    target.setDate(today.getDate() + offsetDays);

    const yyyy = target.getFullYear();
    const mm = String(target.getMonth() + 1).padStart(2, '0');
    const dd = String(target.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}.${mm}.${dd}.`;

    const dow = target.getDay();
    const closed = !defaultHoursData[dow];

    const seed = hashString(salonId + '_' + dateStr);
    const maxSlots = 4 + (seed % 2);
    const booked = closed ? 0 : (seed % (maxSlots + 1));

    return { dateStr, maxSlots, booked, closed };
}

// ============================================
// PRICE STATS
// ============================================
const SERVICE_CATALOG = [
    { key: 'klasszikus',   name: 'Klasszikus manikűr',  basePrice: 4500  },
    { key: 'gellakk',      name: 'Géllakkos manikűr',   basePrice: 6500  },
    { key: 'francia',      name: 'Francia manikűr',     basePrice: 7000  },
    { key: 'epites',       name: 'Műköröm építés',      basePrice: 12000 },
    { key: 'toltes',       name: 'Műköröm töltés',      basePrice: 8500  },
    { key: 'nailart',      name: 'Nail art díszítés',   basePrice: 3500  }
];

function getSalonServices(salonId) {
    const seed = hashString(salonId + '_services_v3');
    return SERVICE_CATALOG.map((s, i) => {
        const localSeed = (seed >> (i * 3)) & 0xFF;
        const factor = 0.8 + (localSeed / 255) * 0.4;
        const price = Math.round((s.basePrice * factor) / 100) * 100;
        return { ...s, price };
    });
}

function getSalonPriceStats(salonId) {
    const services = getSalonServices(salonId);
    const count = services.length;

    const sum = services.reduce((acc, s) => acc + s.price, 0);
    const avgRaw = count > 0 ? sum / count : 0;
    const avg = Math.round(avgRaw / 100) * 100;

    const sortedPrices = services.map(s => s.price).sort((a, b) => a - b);
    let median = 0;
    if (sortedPrices.length > 0) {
        const mid = Math.floor(sortedPrices.length / 2);
        const medianRaw = sortedPrices.length % 2 === 0
            ? (sortedPrices[mid - 1] + sortedPrices[mid]) / 2
            : sortedPrices[mid];
        median = Math.round(medianRaw / 100) * 100;
    }

    return { avg, median, count, services, sum };
}

function getRegionAverage() {
    const salons = categoryLists.szalon || [];
    if (salons.length === 0) return 0;
    let total = 0;
    salons.forEach(s => { total += getSalonPriceStats(s.id).avg; });
    const raw = total / salons.length;
    return Math.round(raw / 100) * 100;
}

function formatPrice(n) {
    return n.toLocaleString('hu-HU').replace(/\s/g, ' ') + ' Ft';
}

// ============================================
// REVIEWS
// ============================================
const HU_FIRST_NAMES = [
    'Anna', 'Eszter', 'Katalin', 'Zsófia', 'Nóra', 'Boglárka', 'Petra', 'Réka',
    'Vivien', 'Bianka', 'Dóra', 'Fanni', 'Kinga', 'Laura', 'Enikő', 'Bettina',
    'Mónika', 'Adél', 'Emese', 'Panna', 'Júlia', 'Kata', 'Lilla', 'Melinda',
    'Orsolya', 'Tímea', 'Virág', 'Zsuzsanna', 'Barbara', 'Csenge'
];

const HU_LAST_INITIALS = ['K.', 'N.', 'Sz.', 'H.', 'V.', 'T.', 'B.', 'M.', 'F.', 'P.', 'R.', 'L.', 'G.', 'D.'];

const REVIEW_SAMPLES_POSITIVE = [
    'Nagyon precíz munkát végzett, elégedett vagyok!',
    'Kedves fogadtatás, kiváló eredmény.',
    'Tiszta szalon, profi szakember – ajánlom!',
    'Csodás körmök, egy hónapja tartanak.',
    'Barátságos hangulat, gyors kiszolgálás.',
    'Kreatív ötleteivel elvarázsolt!',
    'Igényes munka, tisztaság, kedves személyzet.',
    'Már többször voltam, mindig tökéletes.',
    'Nyugodt környezet, remek eredmény.',
    'Odafigyel a részletekre, ez sokat számít.',
    'Pontos időpontok, kellemes légkör.',
    'Nagyszerű élmény, biztosan visszatérek!'
];

const REVIEW_SAMPLES_NEGATIVE = [
    'Sokat kellett várnom a foglalt időpontomra.',
    'A köröm 2 hét után elkezdett törni.',
    'Kicsit sietősen dolgozott, nem figyelt eléggé.',
    'Az ár magas a kapott minőséghez képest.',
    'Nem sikerült pontosan úgy, ahogy kértem.',
    'Foglalás után lemondták az időpontomat.',
    'Kevésbé volt tiszta a munkaeszköz.',
    'A díszítés hamar lekopott.',
    'Nem éreztem magam kényelmesen.',
    'A megbeszélt szín eltért a végeredménytől.'
];

function generateReviewerName(seed, i) {
    const firstIdx = (seed + i * 13) % HU_FIRST_NAMES.length;
    const lastIdx = (seed + i * 7) % HU_LAST_INITIALS.length;
    return `${HU_FIRST_NAMES[firstIdx]} ${HU_LAST_INITIALS[lastIdx]}`;
}

function getSalonVerdict(percent) {
    if (percent >= 85) return { text: 'Nagy valószínűséggel kiváló szakember.', cls: 'verdict-positive' };
    if (percent >= 70) return { text: 'Többnyire pozitív visszajelzések, de érdemes utánanézni.', cls: 'verdict-mixed' };
    if (percent >= 50) return { text: 'Vegyes visszajelzések – a döntés előtt olvasd el a véleményeket.', cls: 'verdict-mixed' };
    return { text: 'Több negatív visszajelzés érkezett – körültekintően válaszd.', cls: 'verdict-negative' };
}

function getSalonReviews(salonId) {
    const seed = hashString(salonId + '_reviews');
    const total = 30 + (seed % 90);
    const positiveCount = Math.floor(total * (0.55 + ((seed % 40) / 100)));
    const negativeCount = total - positiveCount;
    const percent = Math.round((positiveCount / total) * 100);

    const reviews = [];
    const dateBase = new Date();

    const posShow = Math.min(positiveCount, 8);
    const negShow = Math.min(negativeCount, 6);

    for (let i = 0; i < posShow; i++) {
        const idx = (seed + i * 7) % REVIEW_SAMPLES_POSITIVE.length;
        const daysAgo = ((seed >> (i + 1)) % 90) + 1;
        const d = new Date(dateBase);
        d.setDate(d.getDate() - daysAgo);
        reviews.push({
            type: 'positive',
            author: generateReviewerName(seed, i),
            text: REVIEW_SAMPLES_POSITIVE[idx],
            date: `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}.`
        });
    }

    for (let i = 0; i < negShow; i++) {
        const idx = (seed + i * 5) % REVIEW_SAMPLES_NEGATIVE.length;
        const daysAgo = ((seed >> (i + 2)) % 120) + 5;
        const d = new Date(dateBase);
        d.setDate(d.getDate() - daysAgo);
        reviews.push({
            type: 'negative',
            author: generateReviewerName(seed + 100, i),
            text: REVIEW_SAMPLES_NEGATIVE[idx],
            date: `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}.`
        });
    }

    return { total, positiveCount, negativeCount, percent, reviews };
}

// ============================================
// STATE
// ============================================
let currentImageId = 0;
let currentTextIndex = 0;
let currentCategory = 'szalon';
let navigationHistory = [];
let mainScrollPosition = 0;
let textCardCollapsed = false;
let listCardCollapsed = false;
let imageOverlayActive = false;
let isArticleMode = false;
let textAnimating = false;
let listAnimating = false;
let currentFilter = 'all';
let currentReviewsFilter = null;
let currentReviewsSalonId = null;

const itemUiState = {};

// ============================================
// FILTER LOGIC
// ============================================
function getFilteredMainCards() {
    if (currentFilter === 'inspiration') return masonryCards.filter(c => !c.isArticle);
    if (currentFilter === 'article') return masonryCards.filter(c => c.isArticle);
    return masonryCards;
}

function setFilter(filter, rerender = true) {
    currentFilter = filter;
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
    if (rerender) renderMasonryCards(getFilteredMainCards(), masonryGrid);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

// ============================================
// MASONRY RENDERING
// ============================================
function renderMasonryCards(cards, gridEl, excludeId = null) {
    const filtered = excludeId !== null ? cards.filter(c => c.id !== excludeId) : cards;
    const colCount = 2;

    gridEl.innerHTML = '';
    const columns = [];
    const heights = [];
    for (let i = 0; i < colCount; i++) {
        const col = document.createElement('div');
        col.className = 'masonry-column';
        gridEl.appendChild(col);
        columns.push(col);
        heights.push(0);
    }

    filtered.forEach(card => {
        const bgStyle = card.image ? `style="background-image: url('${card.image}')"` : '';
        const bgClass = card.image ? '' : card.bg;
        const cardHTML = `
            <div class="masonry-card" data-card-id="${card.id}">
                <div class="masonry-card-image ${card.height} ${bgClass}" ${bgStyle}></div>
            </div>`;
        const cardHeight = heightMap[card.height] || 200;

        let minIdx = 0;
        for (let i = 1; i < heights.length; i++) if (heights[i] < heights[minIdx]) minIdx = i;
        columns[minIdx].insertAdjacentHTML('beforeend', cardHTML);
        heights[minIdx] += cardHeight;
    });

    gridEl.querySelectorAll('.masonry-card').forEach(cardEl => {
        cardEl.addEventListener('click', () => openDetailView(parseInt(cardEl.dataset.cardId)));
    });
}

renderMasonryCards(getFilteredMainCards(), masonryGrid);


// ============================================
// DETAIL VIEW
// ============================================
function loadImageIntoDetail(imageId) {
    const card = masonryCards.find(c => c.id === imageId);
    if (!card) return;

    currentImageId = imageId;
    isArticleMode = !!card.isArticle;
    detailImage.style.backgroundImage = `url('${card.image}')`;

    hideImageOverlay();
    renderImageInfo(card);

    if (isArticleMode) {
        detailTitle.textContent = card.articleTitle;
        detailDescription.textContent = card.articleText;
        detailTitleBar.classList.add('no-arrows');
        detailTextCollapsedBtn.textContent = 'Cikk';
    } else {
        detailTitleBar.classList.remove('no-arrows');
        detailTextCollapsedBtn.textContent = 'Tippek és tanácsok';
        currentTextIndex = 0;
        updateDetailText();
    }

    renderCategoryButtons();
    currentCategory = 'szalon';
    renderDetailList();

    detailHeartBtn.classList.toggle('active', isLikedByMe('img_' + currentImageId));
    applyCardStates();

    detailDescriptionWrapper.scrollTop = 0;
    detailListWrapper.scrollTop = 0;
    if (detailCategories) detailCategories.scrollLeft = 0;

    renderMasonryCards(masonryCards, detailMasonryGrid, imageId);
}

function renderCategoryButtons() {
    detailCategories.innerHTML = categoryOrder.map((cat, idx) => `
        <button class="detail-cat-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}">${categoryLabels[cat]}</button>
    `).join('');

    detailCategories.querySelectorAll('.detail-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.cat === currentCategory || listAnimating) return;
            listAnimating = true;
            detailListWrapper.classList.add('fade-out');
            setTimeout(() => {
                detailCategories.querySelectorAll('.detail-cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.cat;
                renderDetailList();
                detailListWrapper.scrollTop = 0;
                scrollActiveCatBtnIntoView();
                requestAnimationFrame(() => {
                    detailListWrapper.classList.remove('fade-out');
                    setTimeout(() => { listAnimating = false; }, 150);
                });
            }, 150);
        });
    });
}

function renderImageInfo(card) {
    const keywords = (card.keywords || []).map(k => `#${k.replace(/\s+/g, '')}`).join(' ');
    detailImageInfo.innerHTML = `
        <h3>${card.title || 'Cím nélküli kép'}</h3>
        <p class="info-desc">${card.description || ''}</p>
        <p class="info-keywords">${keywords}</p>
        <div class="info-meta">
            <span>Stílus: ${card.style || '-'}</span>
            <span>Feltöltve: ${card.uploadDate || '-'}</span>
            <span>${card.aiGenerated ? 'AI-generált kép' : 'Fotó'}</span>
        </div>`;
}

function showImageOverlay() { detailImageOverlay.classList.add('active'); imageOverlayActive = true; }
function hideImageOverlay() { detailImageOverlay.classList.remove('active'); imageOverlayActive = false; }

function applyCardStates() {
    detailTextCard.classList.toggle('collapsed', textCardCollapsed);
    detailListCard.classList.toggle('collapsed', listCardCollapsed);
}

function openDetailView(imageId) {
    if (detailView.style.display === 'block') {
        navigationHistory.push({ imageId: currentImageId });
    } else {
        mainScrollPosition = window.scrollY;
    }
    loadImageIntoDetail(imageId);
    mainView.style.display = 'none';
    detailView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(updateBottomNavVisibility, 50);
}

function updateDetailText() {
    const t = detailTexts[currentTextIndex];
    detailTitle.textContent = t.title;
    detailDescription.textContent = t.description;
}

function changeText(direction) {
    if (isArticleMode || textAnimating) return;
    textAnimating = true;
    detailTitle.classList.add('fade-out');
    detailDescriptionWrapper.classList.add('fade-out');

    setTimeout(() => {
        currentTextIndex = direction === 'next'
            ? (currentTextIndex + 1) % detailTexts.length
            : (currentTextIndex - 1 + detailTexts.length) % detailTexts.length;
        updateDetailText();
        detailDescriptionWrapper.scrollTop = 0;
        requestAnimationFrame(() => {
            detailTitle.classList.remove('fade-out');
            detailDescriptionWrapper.classList.remove('fade-out');
            setTimeout(() => { textAnimating = false; }, 150);
        });
    }, 150);
}

function scrollActiveCatBtnIntoView() {
    const activeBtn = detailCategories.querySelector('.detail-cat-btn.active');
    if (!activeBtn) return;
    const cr = detailCategories.getBoundingClientRect();
    const br = activeBtn.getBoundingClientRect();
    const target = detailCategories.scrollLeft + (br.left + br.width / 2) - (cr.left + cr.width / 2);
    const max = detailCategories.scrollWidth - detailCategories.clientWidth;
    detailCategories.scrollTo({ left: Math.max(0, Math.min(target, max)), behavior: 'smooth' });
}

function changeCategory(direction) {
    if (listAnimating) return;
    listAnimating = true;
    const idx = categoryOrder.indexOf(currentCategory);
    const newIdx = direction === 'next'
        ? (idx + 1) % categoryOrder.length
        : (idx - 1 + categoryOrder.length) % categoryOrder.length;

    detailListWrapper.classList.add('fade-out');
    setTimeout(() => {
        currentCategory = categoryOrder[newIdx];
        detailCategories.querySelectorAll('.detail-cat-btn').forEach(b => b.classList.remove('active'));
        detailCategories.querySelector(`.detail-cat-btn[data-cat="${currentCategory}"]`)?.classList.add('active');
        renderDetailList();
        detailListWrapper.scrollTop = 0;
        scrollActiveCatBtnIntoView();
        requestAnimationFrame(() => {
            detailListWrapper.classList.remove('fade-out');
            setTimeout(() => { listAnimating = false; }, 150);
        });
    }, 150);
}

detailPrevText.addEventListener('click', () => changeText('prev'));
detailNextText.addEventListener('click', () => changeText('next'));

detailBackBtn.addEventListener('click', () => {
    if (navigationHistory.length > 0) {
        loadImageIntoDetail(navigationHistory.pop().imageId);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
    }
    detailView.style.display = 'none';
    mainView.style.display = 'block';
    window.scrollTo({ top: mainScrollPosition, behavior: 'instant' });
    setTimeout(updateBottomNavVisibility, 50);
});

detailHeartBtn.addEventListener('click', () => {
    const id = 'img_' + currentImageId;
    const nowLiked = toggleLikedByMe(id);
    detailHeartBtn.classList.toggle('active', nowLiked);
    const c = bumpLike(id, nowLiked ? 1 : -1);
    showActionBadge(detailHeartBtn, `❤ ${formatViewCount(c)}`);
});

detailShareBtn.addEventListener('click', async () => {
    const card = masonryCards.find(c => c.id === currentImageId);
    const id = 'img_' + currentImageId;
    const c = bumpShare(id);
    showActionBadge(detailShareBtn, `↗ ${formatViewCount(c)}`);

    const shareData = {
        title: 'Nails1.hu',
        text: isArticleMode ? card.articleTitle : detailTexts[currentTextIndex].title,
        url: card ? card.image : window.location.href
    };
    setTimeout(async () => {
        if (navigator.share) { try { await navigator.share(shareData); } catch (err) {} }
        else if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(shareData.url);
                showResult(`<h2>Megosztás</h2><p>A link a vágólapra másolva! 📋</p>`);
            } catch { showResult(`<h2>Megosztás</h2><p>Nem érhető el.</p>`); }
        }
    }, 600);
});

detailTextCollapseArrow.addEventListener('click', () => { detailTextCard.classList.add('collapsed'); textCardCollapsed = true; });
detailTextCollapsedBtn.addEventListener('click', () => { detailTextCard.classList.remove('collapsed'); textCardCollapsed = false; detailDescriptionWrapper.scrollTop = 0; });
detailListCollapseArrow.addEventListener('click', () => { detailListCard.classList.add('collapsed'); listCardCollapsed = true; });
detailListCollapsedBtn.addEventListener('click', () => { detailListCard.classList.remove('collapsed'); listCardCollapsed = false; detailListWrapper.scrollTop = 0; });

// ============================================
// SVG ICONS
// ============================================
const SALON_ICONS = {
    about: `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    price: `<svg viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    hours: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    phone: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>`,
    address: `<svg viewBox="0 0 24 24"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    web: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

const SALON_ICON_ORDER = ['about', 'calendar', 'price', 'hours', 'phone', 'address', 'web'];

// ============================================
// LIST RENDER
// ============================================
function renderDetailList() {
    const items = categoryLists[currentCategory] || [];
    const relevantIcons = categoryRelevantIcons[currentCategory] || [];
    const openNow = isSalonOpenNow();

    detailList.innerHTML = items.map((item) => {
        const isOnline = item.online === true || item.km === 0 || item.km === undefined;
        const isBook = item.isBook === true;
        const views = formatViewCount(getViewCount(item.id));

        const reviewData = getSalonReviews(item.id);
        const reviewText = `${reviewData.total}/${reviewData.percent}%`;

        let leftHTML, rightHTML;
        if (isBook) {
            leftHTML = `<span class="detail-list-status open">Könyv</span>`;
            rightHTML = `<span class="detail-list-km">${item.bookYear || 2020}</span>`;
        } else if (isOnline) {
            leftHTML = `<span class="detail-list-status open">0–24</span>`;
            rightHTML = `<span class="detail-list-km">online</span>`;
        } else {
            const kmClass = getKmClass(item.km);
            leftHTML = `<span class="detail-list-status ${openNow ? 'open' : 'closed'}">${openNow ? 'Nyitva' : 'Zárva'}</span>`;
            rightHTML = `<span class="detail-list-km ${kmClass}">${item.km} km</span>`;
        }

        const iconsHTML = SALON_ICON_ORDER.map(type => {
            const isRelevant = relevantIcons.includes(type);
            const disabledClass = isRelevant ? '' : 'disabled';
            return `<button class="salon-icon-btn ${disabledClass}" data-salon-icon="${type}" data-item-id="${item.id}" data-relevant="${isRelevant}" aria-label="${type}">${SALON_ICONS[type]}</button>`;
        }).join('');

        const detailsInner = `
            <div class="salon-icon-row">${iconsHTML}</div>
            <div class="salon-content" data-salon-content="${item.id}"></div>
            <div class="detail-list-stats-row">
                <button class="detail-list-views" data-action="views" data-item-id="${item.id}">Látták: <strong>${views}</strong></button>
                <button class="detail-list-reviews" data-action="reviews" data-item-id="${item.id}">Értékelések: <strong>${reviewText}</strong></button>
            </div>
        `;

        return `
            <div class="detail-list-item" data-item-id="${item.id}">
                <div class="detail-list-main">
                    ${leftHTML}
                    <span class="detail-list-name">${item.name}</span>
                    ${rightHTML}
                </div>
                <div class="detail-list-details">${detailsInner}</div>
            </div>`;
    }).join('');

    detailList.querySelectorAll('.detail-list-item').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.closest('[data-action]') ||
                e.target.closest('[data-salon-icon]') ||
                e.target.closest('.salon-content') ||
                e.target.closest('.salon-hours-arrow') ||
                e.target.closest('.salon-cal-arrow') ||
                e.target.closest('.salon-web-arrow') ||
                e.target.closest('.salon-price-display') ||
                e.target.closest('a')) return;
            const expanded = el.classList.contains('expanded');
            detailList.querySelectorAll('.detail-list-item.expanded').forEach(o => {
                if (o !== el) o.classList.remove('expanded');
            });
            el.classList.toggle('expanded', !expanded);

            if (!expanded) {
                const sid = el.dataset.itemId;
                const firstRelevant = relevantIcons[0] || 'about';
                if (!itemUiState[sid]) itemUiState[sid] = { activeIcon: firstRelevant, hoursDayOffset: 0, calendarDayOffset: 0, webLinkIdx: 0, phase: 'intro' };
                else {
                    if (!itemUiState[sid].activeIcon || !relevantIcons.includes(itemUiState[sid].activeIcon)) {
                        itemUiState[sid].activeIcon = firstRelevant;
                    }
                    itemUiState[sid].phase = 'intro';
                }
                renderItemContent(sid);
            }
        });
    });

    detailList.querySelectorAll('[data-salon-icon]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (btn.classList.contains('disabled')) return;
            const sid = btn.dataset.itemId;
            const type = btn.dataset.salonIcon;
            if (!itemUiState[sid]) itemUiState[sid] = { activeIcon: type, hoursDayOffset: 0, calendarDayOffset: 0, webLinkIdx: 0, phase: 'intro' };
            itemUiState[sid].activeIcon = type;
            itemUiState[sid].phase = 'intro';
            if (type === 'web') {
                itemUiState[sid].webLinkIdx = 0;
            }
            renderItemContent(sid);
        });
    });

    detailList.querySelectorAll('[data-action="views"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const c = incrementViewCount(btn.dataset.itemId);
            const strong = btn.querySelector('strong');
            if (strong) strong.textContent = formatViewCount(c);
        });
    });

    detailList.querySelectorAll('[data-action="reviews"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openReviewsModal(btn.dataset.itemId);
        });
    });
}

// ============================================
// INTRO SZÖVEGEK
// ============================================
const ICON_INTRO = {
    about:    'Engedd meg, hogy bemutatkozzam!',
    calendar: 'Nézd meg, hogy van-e még szabad időpontom!',
    price:    'Nézd meg az áraimat!',
    hours:    'Nézd meg a nyitvatartásomat!',
    phone:    'Hívj bátran, hátha tudok segíteni!',
    address:  'Látogass meg, hátha tudok segíteni!',
    web:      'Látogasd meg az oldalaimat!'
};

const FADE_DURATION = 700;

// ============================================
// ITEM CONTENT RENDER
// ============================================
function renderItemContent(itemId) {
    const items = categoryLists[currentCategory] || [];
    const item = items.find(s => s.id === itemId);
    if (!item) return;
    const contentEl = detailList.querySelector(`[data-salon-content="${itemId}"]`);
    if (!contentEl) return;

    const state = itemUiState[itemId] || { activeIcon: 'about', hoursDayOffset: 0, calendarDayOffset: 0, webLinkIdx: 0, phase: 'intro' };
    const type = state.activeIcon || 'about';
    const phase = state.phase || 'intro';

    const itemEl = detailList.querySelector(`.detail-list-item[data-item-id="${itemId}"]`);
    if (itemEl) {
        itemEl.querySelectorAll('.salon-icon-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.salonIcon === type && !b.classList.contains('disabled'));
        });
    }

    if (phase === 'intro') {
        const introText = ICON_INTRO[type] || '';
        contentEl.innerHTML = `
            <button class="salon-content-btn salon-intro-btn" data-intro-btn="${itemId}">
                <span class="btn-label">${introText}</span>
            </button>`;

        const introBtn = contentEl.querySelector('[data-intro-btn]');
        if (introBtn) {
            introBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const label = introBtn.querySelector('.btn-label');
                if (label) {
                    label.style.transition = `opacity ${FADE_DURATION}ms ease`;
                    label.style.opacity = '0';
                }
                setTimeout(() => {
                    state.phase = 'final';
                    itemUiState[itemId] = state;
                    renderItemContent(itemId);
                    const contentElAfter = detailList.querySelector(`[data-salon-content="${itemId}"]`);
                    if (contentElAfter) {
                        const textSelectors = '.btn-label, .day-name, .day-time, .price-label, .price-value';
                        const els = contentElAfter.querySelectorAll(textSelectors);
                        els.forEach(el => {
                            el.style.opacity = '0';
                            el.style.transition = `opacity ${FADE_DURATION}ms ease`;
                        });
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                els.forEach(el => { el.style.opacity = '1'; });
                            });
                        });
                    }
                }, FADE_DURATION);
            });
        }
        return;
    }

    let html = '';
    if (type === 'about') {
        html = `<button class="salon-content-btn" data-action="item-about" data-item-id="${itemId}"><span class="btn-label">Bemutatkozás megnyitása</span></button>`;
    } else if (type === 'calendar') {
        html = renderCalendarNavHTML(itemId, state.calendarDayOffset || 0);
    } else if (type === 'price') {
        html = renderPriceHTML(itemId);
    } else if (type === 'hours') {
        html = renderHoursNavHTML(itemId, state.hoursDayOffset || 0);
    } else if (type === 'phone') {
        const tel = (item.phone || '').replace(/\s+/g,'');
        html = tel
            ? `<a href="tel:${tel}" class="salon-content-btn" data-tel="${tel}"><span class="btn-label">${item.phone}</span></a>`
            : `<button class="salon-content-btn"><span class="btn-label">Telefonszám hamarosan</span></button>`;
    } else if (type === 'address') {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address || '')}`;
        html = item.address
            ? `<button class="salon-content-btn" data-action="item-address" data-url="${mapsUrl}"><span class="btn-label">${item.address}</span></button>`
            : `<button class="salon-content-btn"><span class="btn-label">Cím hamarosan</span></button>`;
    } else if (type === 'web') {
        html = renderWebNavHTML(itemId, item, state.webLinkIdx || 0);
    }

    contentEl.innerHTML = html;
    attachItemContentListeners(itemId, item);
}

function attachItemContentListeners(itemId, item) {
    const contentEl = detailList.querySelector(`[data-salon-content="${itemId}"]`);
    if (!contentEl) return;
    const state = itemUiState[itemId];

    contentEl.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.dataset.action;
            if (action === 'item-about') {
                openBrochure({ name: item.name, address: item.address || '', id: item.id });
            } else if (action === 'item-address' || action === 'item-web') {
                const url = btn.dataset.url;
                if (url) window.open(url, '_blank', 'noopener');
            }
        });
    });

    const telAnchor = contentEl.querySelector('a[href^="tel:"]');
    if (telAnchor) {
        telAnchor.addEventListener('click', (e) => e.stopPropagation());
    }

    const prevH = contentEl.querySelector('.salon-hours-prev');
    const nextH = contentEl.querySelector('.salon-hours-next');
    if (prevH) prevH.addEventListener('click', (e) => {
        e.stopPropagation();
        state.hoursDayOffset = ((state.hoursDayOffset || 0) - 1 + 7) % 7;
        itemUiState[itemId] = state;
        updateHoursOnly(itemId);
    });
    if (nextH) nextH.addEventListener('click', (e) => {
        e.stopPropagation();
        state.hoursDayOffset = ((state.hoursDayOffset || 0) + 1) % 7;
        itemUiState[itemId] = state;
        updateHoursOnly(itemId);
    });

    const prevC = contentEl.querySelector('.salon-cal-prev');
    const nextC = contentEl.querySelector('.salon-cal-next');
    if (prevC) prevC.addEventListener('click', (e) => {
        e.stopPropagation();
        state.calendarDayOffset = Math.max(0, (state.calendarDayOffset || 0) - 1);
        itemUiState[itemId] = state;
        updateCalendarOnly(itemId);
    });
    if (nextC) nextC.addEventListener('click', (e) => {
        e.stopPropagation();
        state.calendarDayOffset = Math.min(60, (state.calendarDayOffset || 0) + 1);
        itemUiState[itemId] = state;
        updateCalendarOnly(itemId);
    });

    const prevW = contentEl.querySelector('.salon-web-prev');
    const nextW = contentEl.querySelector('.salon-web-next');
    if (prevW) prevW.addEventListener('click', (e) => {
        e.stopPropagation();
        const links = getWebLinks(item);
        if (links.length === 0) return;
        state.webLinkIdx = ((state.webLinkIdx || 0) - 1 + links.length) % links.length;
        itemUiState[itemId] = state;
        renderItemContent(itemId);
    });
    if (nextW) nextW.addEventListener('click', (e) => {
        e.stopPropagation();
        const links = getWebLinks(item);
        if (links.length === 0) return;
        state.webLinkIdx = ((state.webLinkIdx || 0) + 1) % links.length;
        itemUiState[itemId] = state;
        renderItemContent(itemId);
    });

    const webCenter = contentEl.querySelector('.salon-web-center');
    if (webCenter) {
        webCenter.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = webCenter.dataset.url;
            if (url) window.open(url, '_blank', 'noopener');
        });
    }

    const priceDisplay = contentEl.querySelector('.salon-price-display');
    if (priceDisplay) {
        priceDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            openPriceInfoModal(itemId);
        });
    }
}

function updateHoursOnly(itemId) {
    const state = itemUiState[itemId];
    if (!state) return;
    const contentEl = detailList.querySelector(`[data-salon-content="${itemId}"]`);
    if (!contentEl) return;

    const today = new Date();
    const todayDow = today.getDay();
    const targetDow = (todayDow + (state.hoursDayOffset || 0)) % 7;
    const dayName = HU_DAYS[targetDow];
    const time = formatHoursForDay(targetDow);

    const dayNameEl = contentEl.querySelector('.day-name');
    const dayTimeEl = contentEl.querySelector('.day-time');
    if (dayNameEl) dayNameEl.textContent = dayName;
    if (dayTimeEl) dayTimeEl.textContent = time;
}

function updateCalendarOnly(itemId) {
    const state = itemUiState[itemId];
    if (!state) return;
    const contentEl = detailList.querySelector(`[data-salon-content="${itemId}"]`);
    if (!contentEl) return;

    const info = getCalendarInfoForDay(itemId, state.calendarDayOffset || 0);
    const dateEl = contentEl.querySelector('.cal-date');
    const bookedEl = contentEl.querySelector('.cal-booked');
    if (dateEl) dateEl.textContent = info.dateStr;
    if (bookedEl) {
        if (info.closed) {
            bookedEl.textContent = 'Zárva';
            bookedEl.className = 'cal-booked day-time closed-cal';
        } else {
            const free = info.maxSlots - info.booked;
            bookedEl.textContent = `${info.maxSlots} időpont / ${info.booked} foglalt`;
            bookedEl.className = free > 0 ? 'cal-booked day-time available' : 'cal-booked day-time full';
        }
    }
}

function renderHoursNavHTML(itemId, offset) {
    const today = new Date();
    const todayDow = today.getDay();
    const targetDow = (todayDow + offset) % 7;
    const dayName = HU_DAYS[targetDow];
    const time = formatHoursForDay(targetDow);

    return `
        <div class="salon-hours-nav">
            <button class="salon-hours-arrow salon-hours-prev" aria-label="Előző nap">‹</button>
            <div class="salon-hours-text">
                <span class="day-name">${dayName}</span>
                <span class="day-time">${time}</span>
            </div>
            <button class="salon-hours-arrow salon-hours-next" aria-label="Következő nap">›</button>
        </div>
    `;
}

function renderCalendarNavHTML(itemId, offset) {
    const info = getCalendarInfoForDay(itemId, offset);
    let bookedText, bookedClass;
    if (info.closed) {
        bookedText = 'Zárva';
        bookedClass = 'closed-cal';
    } else {
        const free = info.maxSlots - info.booked;
        bookedText = `${info.maxSlots} időpont / ${info.booked} foglalt`;
        bookedClass = free > 0 ? 'available' : 'full';
    }

    return `
        <div class="salon-hours-nav">
            <button class="salon-hours-arrow salon-cal-prev" aria-label="Előző nap">‹</button>
            <div class="salon-hours-text">
                <span class="cal-date day-name">${info.dateStr}</span>
                <span class="cal-booked day-time ${bookedClass}">${bookedText}</span>
            </div>
            <button class="salon-hours-arrow salon-cal-next" aria-label="Következő nap">›</button>
        </div>
    `;
}

function renderPriceHTML(itemId) {
    const stats = getSalonPriceStats(itemId);
    return `
        <div class="salon-price-display" role="button" tabindex="0">
            <span class="price-label">Átl.:</span>
            <span class="price-value">${formatPrice(stats.avg)}</span>
            <span class="price-label">Med.:</span>
            <span class="price-value">${formatPrice(stats.median)}</span>
        </div>
    `;
}

function getWebLinks(item) {
    const links = [];
    if (item.web) links.push({ label: 'Weboldal', url: item.web });
    if (item.facebook) links.push({ label: 'Facebook', url: item.facebook });
    if (item.instagram) links.push({ label: 'Instagram', url: item.instagram });
    if (item.tiktok) links.push({ label: 'TikTok', url: item.tiktok });
    return links;
}

function renderWebNavHTML(itemId, item, idx) {
    const links = getWebLinks(item);
    if (links.length === 0) {
        return `<button class="salon-content-btn"><span class="btn-label">Weboldal hamarosan</span></button>`;
    }
    const safeIdx = ((idx % links.length) + links.length) % links.length;
    const current = links[safeIdx];

    if (links.length === 1) {
        return `<button class="salon-content-btn salon-web-center" data-url="${current.url}"><span class="btn-label">${current.label}</span></button>`;
    }

    return `
        <div class="salon-hours-nav">
            <button class="salon-hours-arrow salon-web-prev" aria-label="Előző platform">‹</button>
            <div class="salon-hours-text salon-web-center" data-url="${current.url}" style="cursor:pointer">
                <span class="day-name">${current.label}</span>
            </div>
            <button class="salon-hours-arrow salon-web-next" aria-label="Következő platform">›</button>
        </div>
    `;
}

// ============================================
// MODAL BUILDER
// ============================================
function buildModalStructure(modalEl, title, subtitle, innerHTML) {
    const closeBtnHTML = modalEl.querySelector('.modal-close')?.outerHTML || '<button class="modal-close">×</button>';
    const subtitleHTML = subtitle ? `<div class="modal-subtitle">${subtitle}</div>` : '';

    modalEl.querySelector('.modal-content').innerHTML = `
        ${closeBtnHTML}
        <div class="modal-header">
            <h2>${title}</h2>
            ${subtitleHTML}
        </div>
        <div class="modal-body">
            <div class="modal-fade-top"></div>
            <div class="modal-body-scroll">
                ${innerHTML}
                <div class="modal-body-spacer"></div>
            </div>
            <div class="modal-fade-bottom"></div>
        </div>
    `;
}

// ============================================
// PRICE INFO MODAL
// ============================================
function openPriceInfoModal(salonId) {
    const stats = getSalonPriceStats(salonId);
    const regionAvg = getRegionAverage();
    const items = categoryLists[currentCategory] || [];
    const item = items.find(s => s.id === salonId);
    const salonName = item ? item.name : 'Szolgáltató';

    const servicesHTML = stats.services.map(s => `
        <div class="price-service-item">
            <div class="price-service-name">${s.name}</div>
            <div class="price-service-price">${formatPrice(s.price)}</div>
        </div>
    `).join('');

    const sortedPrices = stats.services.map(s => s.price).sort((a, b) => a - b);

    let medianExplain = '';
    const n = sortedPrices.length;
    if (n > 0) {
        const mid = Math.floor(n / 2);
        if (n % 2 === 0) {
            medianExplain = `Mivel ${n} szolgáltatás van (páros), a medián a két középső ár (${formatPrice(sortedPrices[mid - 1])} és ${formatPrice(sortedPrices[mid])}) átlaga.`;
        } else {
            medianExplain = `Mivel ${n} szolgáltatás van (páratlan), a medián a középső, sorba rendezett érték: ${formatPrice(sortedPrices[mid])}.`;
        }
    }

    const innerHTML = `
        <div class="price-info-region price-info-region-top">
            <div class="label">Régió átlaga</div>
            <div class="value">${formatPrice(regionAvg)}</div>
            <div class="sublabel">A körzetben található összes szalon átlagára</div>
        </div>

        <div class="price-info-salon-card">
            <div class="price-info-salon-name">${salonName}</div>

            <div class="price-info-stats">
                <div class="price-info-stat">
                    <div class="label">Átlagár</div>
                    <div class="value">${formatPrice(stats.avg)}</div>
                </div>
                <div class="price-info-stat">
                    <div class="label">Medián</div>
                    <div class="value">${formatPrice(stats.median)}</div>
                </div>
            </div>

            <div class="price-info-section-title">Szolgáltatások és árak</div>
            <div class="price-service-list">
                ${servicesHTML}
            </div>
        </div>

        <div class="price-info-section-heading">Amit az árazásról tudni érdemes</div>
        <p class="price-info-desc">A megjelenített értékek a szolgáltató árlistája alapján készülnek. Minden szalon a saját szempontjai szerint bontja tételekre a szolgáltatásait, így az árlista hossza és összetétele változó lehet – a statisztika mindig a teljes, aktuális árlistára támaszkodik.</p>

        <div class="price-info-section-heading">Hogyan számoljuk?</div>
        <p class="price-info-desc"><strong>Átlagár:</strong> az árlistán szereplő tételek árait összeadjuk, majd elosztjuk a tételek számával. Ez egy általános képet ad arról, mennyibe kerülnek jellemzően a szalon szolgáltatásai.</p>
        <p class="price-info-desc"><strong>Medián:</strong> az árakat növekvő sorrendbe rendezzük, és a középső értéket vesszük. ${medianExplain}</p>
        <p class="price-info-desc"><strong>Régió átlaga:</strong> a környék összes szalonjának saját átlagárait vesszük, és ezek átlagát képezzük. Ez segít megítélni, hogy egy adott szalon árazása mennyire illeszkedik a helyi piaci szinthez.</p>

        <div class="price-info-section-heading">Hogyan értelmezd?</div>
        <p class="price-info-desc">Ha az átlag és a medián közel áll egymáshoz, az árazás kiegyensúlyozott. Ha az átlag jóval magasabb, néhány drágább tétel húzza felfelé az összképet – ilyenkor érdemesebb a mediánt figyelembe venni.</p>

        <div class="price-info-section-heading">Az árról – árnyaltabban</div>
        <p class="price-info-desc">Az alacsony ár önmagában nem feltétlenül jelenti azt, hogy a szolgáltató kevésbé tapasztalt, vagy a minőség gyengébb. Számos esetben tudatos piacszerzési vagy vendégépítési stratégia áll mögötte: egy pályakezdő, de precíz szakember gyakran szándékosan pozicionálja magát a piaci átlag alatt, hogy stabil visszatérő vendégkört alakítson ki. Előfordul az is, hogy egy tapasztalt szolgáltató a lakókörnyezetéhez, célközönségéhez igazítja árait.</p>
        <p class="price-info-desc">Ugyanez fordítva is igaz: a magas ár önmagában nem garantálja a magasabb minőséget vagy a nagyobb szakmai profizmust. Sok esetben a prémium árazás valódi hozzáadott értéket – kiemelkedő szakértelmet, minőségi alapanyagokat, egyedi élményt – tükröz, más esetben viszont pusztán marketing- vagy pozicionálási döntés eredménye.</p>

        <div class="price-info-section-heading">A teljes kép</div>
        <p class="price-info-desc">Mindkét árkategóriában találni kimagasló és csalódást keltő példákat egyaránt. Ezért érdemes az árat mindig együtt nézni a vendégértékelésekkel, a portfólióval és a személyes benyomással – így alakul ki a legmegbízhatóbb kép.</p>
    `;

    buildModalStructure(priceInfoModal, 'Árak', '', innerHTML);

    const newClose = priceInfoModal.querySelector('.modal-close');
    if (newClose) newClose.addEventListener('click', closePriceInfoModal);

    priceInfoModal.querySelector('.modal-content').classList.add('price-info-modal-content');
    priceInfoModal.classList.add('active');
    lockBodyScroll();
    syncBottomNavWithOverlays();
}

function closePriceInfoModal() {
    if (!priceInfoModal.classList.contains('active')) return;
    priceInfoModal.classList.remove('active');
    unlockBodyScroll();
    syncBottomNavWithOverlays();
}

priceInfoModal.addEventListener('click', (e) => {
    if (e.target === priceInfoModal) closePriceInfoModal();
});

// ============================================
// REVIEWS MODAL
// ============================================
function openReviewsModal(salonId) {
    currentReviewsSalonId = salonId;
    currentReviewsFilter = null;
    renderReviewsModal();
    reviewsModal.querySelector('.modal-content').classList.add('reviews-modal-content');
    reviewsModal.classList.add('active');
    lockBodyScroll();
    syncBottomNavWithOverlays();
}

function renderReviewsModal() {
    if (!currentReviewsSalonId) return;
    const data = getSalonReviews(currentReviewsSalonId);
    const items = categoryLists[currentCategory] || [];
    const item = items.find(function(s) { return s.id === currentReviewsSalonId; });
    const salonName = item ? item.name : 'Szolgáltató';

    var posClass = '';
    var negClass = '';
    if (currentReviewsFilter === 'positive') { posClass = 'active positive'; }
    if (currentReviewsFilter === 'negative') { negClass = 'active negative'; }

    var filtered = [];
    if (currentReviewsFilter === 'positive') {
        filtered = data.reviews.filter(function(r) { return r.type === 'positive'; });
    } else if (currentReviewsFilter === 'negative') {
        filtered = data.reviews.filter(function(r) { return r.type === 'negative'; });
    } else {
        var pos = data.reviews.filter(function(r) { return r.type === 'positive'; });
        var neg = data.reviews.filter(function(r) { return r.type === 'negative'; });
        var maxLen = Math.max(pos.length, neg.length);
        for (var i = 0; i < maxLen; i++) {
            if (pos[i]) filtered.push(pos[i]);
            if (neg[i]) filtered.push(neg[i]);
        }
    }

    var reviewsHTML = '';
    if (filtered.length > 0) {
        filtered.forEach(function(r) {
            var badgeText = r.type === 'positive' ? 'Pozitív' : 'Negatív';
            reviewsHTML += '<div class="review-item ' + r.type + '">';
            reviewsHTML += '<div class="review-item-header">';
            reviewsHTML += '<span class="review-item-author">' + r.author + '</span>';
            reviewsHTML += '<span class="review-item-badge">' + badgeText + '</span>';
            reviewsHTML += '</div>';
            reviewsHTML += '<div class="review-item-date">' + r.date + '</div>';
            reviewsHTML += '<div class="review-item-text">' + r.text + '</div>';
            reviewsHTML += '</div>';
        });
    } else {
        reviewsHTML = '<p style="text-align:center; padding: 20px 0; color: var(--text-secondary);">Nincs megjeleníthető értékelés.</p>';
    }

    var verdict = getSalonVerdict(data.percent);
    var avgStars = Math.round(data.percent / 20);
    var starsHTML = '';
    for (var si = 1; si <= 5; si++) {
        starsHTML += '<span class="summary-star ' + (si <= avgStars ? 'filled' : '') + '">★</span>';
    }

    var innerHTML = '';
    innerHTML += '<div class="reviews-summary">';
    innerHTML += '<div class="reviews-summary-salon-name">' + salonName + '</div>';
    innerHTML += '<div class="reviews-summary-stars">' + starsHTML + '</div>';
    innerHTML += '<div class="reviews-summary-percent">' + data.percent + '%</div>';
    innerHTML += '<div class="reviews-summary-label">Pozitív értékelés</div>';
    innerHTML += '<div class="reviews-summary-count">Összesen ' + data.total + ' vélemény · ' + data.positiveCount + ' pozitív · ' + data.negativeCount + ' negatív</div>';
    innerHTML += '<div class="reviews-verdict ' + verdict.cls + '">' + verdict.text + '</div>';
    innerHTML += '</div>';
    innerHTML += '<button class="new-review-btn" id="newReviewBtn">Új értékelés létrehozása</button>';
    innerHTML += '<div class="reviews-filter">';
    innerHTML += '<button class="reviews-filter-btn ' + posClass + '" data-review-filter="positive"><span class="dot pos-dot"></span> Pozitív (' + data.positiveCount + ')</button>';
    innerHTML += '<button class="reviews-filter-btn ' + negClass + '" data-review-filter="negative"><span class="dot neg-dot"></span> Negatív (' + data.negativeCount + ')</button>';
    innerHTML += '</div>';
    innerHTML += '<div class="reviews-list">' + reviewsHTML + '</div>';

    buildModalStructure(reviewsModal, 'Értékelések', '', innerHTML);

    var newClose = reviewsModal.querySelector('.modal-close');
    if (newClose) newClose.addEventListener('click', closeReviewsModal);

    reviewsModal.querySelectorAll('[data-review-filter]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var filter = btn.dataset.reviewFilter;
            currentReviewsFilter = currentReviewsFilter === filter ? null : filter;
            renderReviewsModal();
        });
    });

    var newReviewBtn = reviewsModal.querySelector('#newReviewBtn');
    if (newReviewBtn) {
        newReviewBtn.addEventListener('click', function() {
            openNewReviewModal();
        });
    }
}

function closeReviewsModal() {
    if (!reviewsModal.classList.contains('active')) return;
    reviewsModal.classList.remove('active');
    currentReviewsSalonId = null;
    currentReviewsFilter = null;
    unlockBodyScroll();
    syncBottomNavWithOverlays();
}

reviewsModal.addEventListener('click', function(e) {
    if (e.target === reviewsModal) closeReviewsModal();
});


// ============================================
// NEW REVIEW MODAL
// ============================================
var newReviewType = null;

function openNewReviewModal() {
    newReviewType = null;
    renderNewReviewModal();
    var modal = document.getElementById('newReviewModal');
    modal.classList.add('active');
    lockBodyScroll();
    syncBottomNavWithOverlays();
}

function renderNewReviewModal() {
    var modal = document.getElementById('newReviewModal');
    if (!modal) return;

    var posActive = newReviewType === 'positive' ? 'active positive' : '';
    var negActive = newReviewType === 'negative' ? 'active negative' : '';
    var newReviewStars = typeof window.newReviewStars !== 'undefined' ? window.newReviewStars : 0;

    var now = new Date();
    var dateStr = now.getFullYear() + '.' +
        String(now.getMonth() + 1).padStart(2, '0') + '.' +
        String(now.getDate()).padStart(2, '0') + '.';

    var starsHTML = '';
    for (var s = 1; s <= 5; s++) {
        var filled = s <= newReviewStars ? 'filled' : '';
        starsHTML += '<button class="new-review-star ' + filled + '" data-star="' + s + '">★</button>';
    }

    var innerHTML = '';
    innerHTML += '<div class="new-review-guide">Kérlek válaszd ki, hogy <strong>pozitív</strong> vagy <strong>negatív</strong> hangvételű értékelést fogsz adni.</div>';
    innerHTML += '<div class="new-review-type-row">';
    innerHTML += '<button class="reviews-filter-btn ' + posActive + '" id="newReviewPos"><span class="dot pos-dot"></span> Pozitív</button>';
    innerHTML += '<button class="reviews-filter-btn ' + negActive + '" id="newReviewNeg"><span class="dot neg-dot"></span> Negatív</button>';
    innerHTML += '</div>';
    innerHTML += '<div class="new-review-stars-label">Csillagos értékelés</div>';
    innerHTML += '<div class="new-review-stars-row" id="newReviewStarsRow">' + starsHTML + '</div>';
    innerHTML += '<div class="new-review-textarea-wrap">';
    innerHTML += '<textarea id="newReviewText" class="new-review-textarea" placeholder="Írd le tapasztalatod úgy, hogy másoknak is segítsen a döntésben! Egy szavas vélemény nem sokat mond – próbálj konkrét lenni: mi tetszett vagy mi nem, miért ajánlod vagy nem." maxlength="300"></textarea>';
    innerHTML += '<div class="new-review-char-count"><span id="newReviewCharCount">0</span>/300</div>';
    innerHTML += '</div>';
    innerHTML += '<div class="new-review-meta">';
    innerHTML += '<span>Értékelő: <strong>Anna K.</strong></span>';
    innerHTML += '<span>Dátum: ' + dateStr + '</span>';
    innerHTML += '</div>';
    innerHTML += '<button class="new-review-submit-btn" id="newReviewSubmit" disabled>Mentés</button>';

    buildModalStructure(modal, 'Új értékelés', '', innerHTML);

    var newClose = modal.querySelector('.modal-close');
    if (newClose) newClose.addEventListener('click', closeNewReviewModal);

    var posBtn = modal.querySelector('#newReviewPos');
    var negBtn = modal.querySelector('#newReviewNeg');
    var textarea = modal.querySelector('#newReviewText');
    var charCount = modal.querySelector('#newReviewCharCount');
    var submitBtn = modal.querySelector('#newReviewSubmit');
    var starsRow = modal.querySelector('#newReviewStarsRow');

    function checkSubmitState() {
        var hasType = newReviewType !== null;
        var hasText = textarea && textarea.value.trim().length >= 5;
        if (submitBtn) submitBtn.disabled = !(hasType && hasText);
    }

    if (starsRow) {
        starsRow.querySelectorAll('.new-review-star').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var val = parseInt(btn.dataset.star);
                window.newReviewStars = window.newReviewStars === val ? 0 : val;
                starsRow.querySelectorAll('.new-review-star').forEach(function(b) {
                    b.classList.toggle('filled', parseInt(b.dataset.star) <= window.newReviewStars);
                });
            });
        });
    }

    if (posBtn) posBtn.addEventListener('click', function() {
        newReviewType = newReviewType === 'positive' ? null : 'positive';
        renderNewReviewModal();
    });

    if (negBtn) negBtn.addEventListener('click', function() {
        newReviewType = newReviewType === 'negative' ? null : 'negative';
        renderNewReviewModal();
    });

    if (textarea && charCount) {
        textarea.addEventListener('input', function() {
            charCount.textContent = textarea.value.length;
            checkSubmitState();
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (submitBtn.disabled) return;
            window.newReviewStars = 0;
            closeNewReviewModal();
            showResult('<h2>Köszönjük!</h2><p>Az értékelésed beérkezett, és hamarosan megjelenik. 💅</p>');
        });
    }
}

function closeNewReviewModal() {
    var modal = document.getElementById('newReviewModal');
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    newReviewType = null;
    unlockBodyScroll();
    syncBottomNavWithOverlays();
}

document.getElementById('newReviewModal').addEventListener('click', function(e) {
    if (e.target === document.getElementById('newReviewModal')) closeNewReviewModal();
});

// ============================================
// RESULT MODAL
// ============================================
function showResult(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const h2 = tempDiv.querySelector('h2');
    const title = h2 ? h2.textContent : 'Információ';
    if (h2) h2.remove();
    const bodyHTML = tempDiv.innerHTML.trim();

    buildModalStructure(resultModal, title, '', bodyHTML);
    const newClose = resultModal.querySelector('.modal-close');
    if (newClose) newClose.addEventListener('click', closeResultModal);

    resultModal.classList.add('active');
    lockBodyScroll();
    syncBottomNavWithOverlays();
}

function closeResultModal() {
    if (!resultModal.classList.contains('active')) return;
    resultModal.classList.remove('active');
    unlockBodyScroll();
    syncBottomNavWithOverlays();
}

resultModal.addEventListener('click', (e) => {
    if (e.target === resultModal) closeResultModal();
});

// ============================================
// BROCHURE STATE + HELPERS
// ============================================
let currentBrochureSalonId = null;
let brochureGalleryTab = 'own';
let brochureGalleryIdx = 0;

const BROCHURE_GALLERY_OWN = [
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Barack%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20feh%C3%A9r%20vonalas%20lev%C3%A9l%20minta%202026%E2%80%9107%E2%80%9104%E2%80%9120%E2%80%9156%E2%80%9140%201792x2304%2034%20HQ.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Cseresznyevir%C3%A1g%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20fekete%20r%C3%B3zsasz%C3%ADn%20akcentus%202026%E2%80%9107%E2%80%9105%E2%80%9119%E2%80%9152%E2%80%9140%201792x2304%2034%20HQ.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Fekete%20mandula%20k%C3%B6rm%C3%B6k%20k%C3%B6zepes%20m%C3%A9ret%20arany%20glitter%20b%C3%A9zs%20sz%C3%BCrke%20akcentus%202026%E2%80%9107%E2%80%9104%E2%80%9120%E2%80%9158%E2%80%9140%201792x2304%2034%20HQ.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Hossz%C3%BA%20mandula%20k%C3%B6rm%C3%B6k%20halv%C3%A1ny%20r%C3%B3zsasz%C3%ADn%20f%C3%A9nyes%20manik%C5%B1r%202026%E2%80%9106%E2%80%9123_14%E2%80%9107%E2%80%9100%201792x2304%20HQ.webp'
];

const BROCHURE_GALLERY_CANDOIT = [
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20detailed%20beauty%20editorial%20close%E2%80%91up%20showcasing%20almond%E2%80%91shaped%20nails%20in%20a%20pastel%20laven%20280200%20(1).webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_A%20photorealistic%20close%E2%80%91up%20of%20almond%E2%80%91shaped%20nails%20coated%20in%20a%20midnight%20sapphire%20lacque%20959665.webp',
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Firefly_Photorealistic%20close-up%20of%20elegant%20almond-shaped%20nails%20with%20a%20soft%20pearl%20pink%20glazed%20622578.webp'
];

function getBrochureImages(tab) {
    return tab === 'candoit' ? BROCHURE_GALLERY_CANDOIT : BROCHURE_GALLERY_OWN;
}

function openBrochure(salon) {
    currentBrochureSalonId = salon.id;
    brochureGalleryTab = 'own';
    brochureGalleryIdx = 0;

    const portrait = brochurePortraits[hashString(salon.id) % brochurePortraits.length];
    const salonPhoto = brochureSalonPhotos[hashString(salon.id + '_photo') % brochureSalonPhotos.length];

    renderBrochureContent(salon.name, salon.address || '', portrait, salonPhoto);

    brochureOverlay.classList.add('active');
    brochureScroll.scrollTop = 0;
    lockBodyScroll();
    syncBottomNavWithOverlays();
}

const brochurePortraits = [
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop'
];

const brochureSalonPhotos = [
    'https://raw.githubusercontent.com/hutamkos-dotcom/images/refs/heads/main/Bl_Sheffield.webp'
];

const GALLERY_DESCRIPTIONS = {
    own: 'Kérlek nézd át az eddigi munkáim, és adj egy lehetőséget, hogy élőben is megmutassam tehetségem, munkám esztétikusságát és hosszan tartó minőségét.',
    candoit: 'Ezek nem a saját munkáim – inspirációként mentettem el őket, mert nagyon tetszenek. Ilyen körmöt még nem készítettem, de úgy érzem, a tudásom megvan hozzá, és szívesen megvalósítanám egy vendégemnél.'
};

function renderBrochureContent(name, address, portrait, salonPhoto) {
    const galleryImages = getBrochureImages(brochureGalleryTab);
    const safeIdx = ((brochureGalleryIdx % galleryImages.length) + galleryImages.length) % galleryImages.length;

    const slidesHTML = galleryImages.map((url, i) => `
        <div class="brochure-gallery-slide ${i === safeIdx ? 'active' : ''}" style="background-image:url('${url}')"></div>
    `).join('');

    const dotsHTML = galleryImages.map((_, i) => `
        <span class="brochure-gallery-dot ${i === safeIdx ? 'active' : ''}" data-dot-idx="${i}"></span>
    `).join('');

    const salonKey = 'salon_' + currentBrochureSalonId;
    const isLiked = isLikedByMe(salonKey);
    const descriptionText = GALLERY_DESCRIPTIONS[brochureGalleryTab] || '';

    brochureScroll.innerHTML = `
        <div class="brochure-inner">
            <div class="brochure-hero-portrait">
                <div class="brochure-hero-portrait-img" style="background-image:url('${portrait}')"></div>
                <div class="brochure-hero-portrait-overlay">
                    <div class="brochure-hero-title-block">
                        <div class="subtitle">Nails1 · Budapest</div>
                        <div class="name">${name}</div>
                        <div class="role">Körömszakértő · 12+ év tapasztalat</div>
                    </div>
                </div>
            </div>

            <div class="brochure-section">
                <h3>Engedd meg, hogy bemutatkozzam</h3>
                <p>Szia, Anna vagyok, és őszintén hiszem, hogy egy szép manikűr sokkal többet ad, mint amit elsőre látni: önbizalmat, nyugalmat és egy apró, mindennapi ünnepet. Már gyerekként a részletek szerelmese voltam – ma pedig ebből élek, ebben találtam meg magam.</p>
                <p>Nyugodt, precíz és empatikus típus vagyok. Számomra minden vendég egyedi, ezért soha nem sietek: veled együtt találjuk ki, mi az, ami tényleg neked való. Ha bejössz hozzám, egy csésze frissen főzött kávé vagy tea vár, halk zene, és egy pillanat, amikor semmi más dolgod nincs, csak feltölteni önmagad.</p>
            </div>

            <div class="brochure-section">
                <h3>Szakmai út</h3>
            </div>
            <div class="brochure-cv-list">
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2012 – 2013</div>
                    <div class="brochure-cv-">
                        <div class="brochure-cv-title">Körömépítő OKJ képzés</div>
                        <div class="brochure-cv-place">Budapesti Szépségakadémia</div>
                    </div>
                </div>
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2014 – 2016</div>
                    <div class="brochure-cv-content">
                        <div class="brochure-cv-title">Junior manikűrös</div>
                        <div class="brochure-cv-place">La Belle Nail Studio, Budapest</div>
                    </div>
                </div>
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2017</div>
                    <div class="brochure-cv-content">
                        <div class="brochure-cv-title">Haladó géllakk mesterkurzus</div>
                        <div class="brochure-cv-place">CND Education – Bécs</div>
                    </div>
                </div>
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2018</div>
                    <div class="brochure-cv-content">
                        <div class="brochure-cv-title">Nail Art specializáció</div>
                        <div class="brochure-cv-place">Nail Art Academy, Milánó</div>
                    </div>
                </div>
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2019 – jelenleg</div>
                    <div class="brochure-cv-content">
                        <div class="brochure-cv-title">Saját szalon vezetése</div>
                        <div class="brochure-cv-place">${name}</div>
                    </div>
                </div>
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2022</div>
                    <div class="brochure-cv-content">
                        <div class="brochure-cv-title">Év Körmöse – döntős</div>
                        <div class="brochure-cv-place">Magyar Kozmetikai Szövetség</div>
                    </div>
                </div>
                <div class="brochure-cv-item">
                    <div class="brochure-cv-year">2024</div>
                    <div class="brochure-cv-content">
                        <div class="brochure-cv-title">Oktatói minősítés</div>
                        <div class="brochure-cv-place">International Nail Academy</div>
                    </div>
                </div>
            </div>

            <div class="brochure-section">
                <h3>A szalonom</h3>
                <p>A szalon egy csendes belvárosi utcában bújik meg, a bejáratnál lágy fahéjas illatgyertya fogad. Belül minden a nyugalomról szól: természetes fények, világos tónusok, kevés, de gondosan megválasztott tárgy.</p>
                <p>Nálam mindig van frissen főzött kávé, válogatott bio teák, és apró édességek – ezek nem plusz szolgáltatások, hanem részei az élménynek. Szeretem azt hinni, hogy sokan nem csak a körmükért, hanem ezért a másfél óráért is jönnek: leülnek, kikapcsolnak, magukkal foglalkoznak.</p>
            </div>

            <div class="brochure-salon-photo" style="background-image:url('${salonPhoto}')"></div>

            <div class="brochure-section">
                <h3>Filozófia</h3>
                <p>Nem gyors trendeket követek, hanem tartós, viselhető szépséget építek. Odafigyelek a köröm egészségére – ez fontosabb, mint bármilyen dizájn. A közös munkánk mindig egy rövid beszélgetéssel kezdődik, mert csak úgy készíthetek valami olyat, ami tényleg a tiéd lesz.</p>
            </div>

            <div class="brochure-section">
                <h3>Munkáim</h3>
            </div>

            <div class="brochure-gallery-tabs">
                <button class="brochure-gallery-tab ${brochureGalleryTab === 'own' ? 'active' : ''}" data-gallery-tab="own">Saját munkáim</button>
                <button class="brochure-gallery-tab ${brochureGalleryTab === 'candoit' ? 'active' : ''}" data-gallery-tab="candoit">Mentett inspirációk</button>
            </div>

            <div class="brochure-gallery-description">${descriptionText}</div>

            <div class="brochure-gallery-carousel">
                <div class="brochure-gallery-viewport">
                    ${slidesHTML}
                </div>
                <div class="brochure-gallery-dots-only">${dotsHTML}</div>
            </div>

            <div class="brochure-actions">
                <button class="brochure-action-btn ${isLiked ? 'active' : ''}" id="brochureSaveBtn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span>Elmentem a szakembert későbbre</span>
                </button>
                <button class="brochure-action-btn" id="brochureShareBtnNew">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                    <span>Szakember megosztása</span>
                </button>
            </div>

            <div class="brochure-farewell">
                Köszönöm, hogy megnézted a bemutatkozásom.<br>
                Kérdés esetén keress bátran.
            </div>
        </div>`;

    brochureScroll.querySelectorAll('[data-gallery-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.galleryTab;
            if (tab === brochureGalleryTab) return;
            brochureGalleryTab = tab;
            brochureGalleryIdx = 0;
            renderBrochureContent(name, address, portrait, salonPhoto);
        });
    });

    const viewport = brochureScroll.querySelector('.brochure-gallery-viewport');
    if (viewport) {
        attachSwipeSimple(viewport, () => {
            const imgs = getBrochureImages(brochureGalleryTab);
            brochureGalleryIdx = (brochureGalleryIdx + 1) % imgs.length;
            updateBrochureGallerySlides();
        }, () => {
            const imgs = getBrochureImages(brochureGalleryTab);
            brochureGalleryIdx = (brochureGalleryIdx - 1 + imgs.length) % imgs.length;
            updateBrochureGallerySlides();
        });

        viewport.addEventListener('click', () => {
            const imgs = getBrochureImages(brochureGalleryTab);
            brochureGalleryIdx = (brochureGalleryIdx + 1) % imgs.length;
            updateBrochureGallerySlides();
        });
    }

    brochureScroll.querySelectorAll('.brochure-gallery-dot').forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            brochureGalleryIdx = parseInt(dot.dataset.dotIdx);
            updateBrochureGallerySlides();
        });
    });

    const saveBtn = document.getElementById('brochureSaveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            if (!currentBrochureSalonId) return;
            const id = 'salon_' + currentBrochureSalonId;
            const nowLiked = toggleLikedByMe(id);
            saveBtn.classList.toggle('active', nowLiked);
            const c = bumpLike(id, nowLiked ? 1 : -1);
            showActionBadge(saveBtn, `❤ ${formatViewCount(c)}`);
        });
    }

    const shareBtn = document.getElementById('brochureShareBtnNew');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (!currentBrochureSalonId) return;
            const id = 'salon_' + currentBrochureSalonId;
            const c = bumpShare(id);
            showActionBadge(shareBtn, `↗ ${formatViewCount(c)}`);
            setTimeout(async () => {
                if (navigator.share) { try { await navigator.share({ title: 'Nails1.hu', url: window.location.href }); } catch(e){} }
                else if (navigator.clipboard) {
                    try { await navigator.clipboard.writeText(window.location.href); showResult(`<h2>Megosztás</h2><p>Link vágólapra másolva! 📋</p>`); } catch {}
                }
            }, 600);
        });
    }
}

function updateBrochureGallerySlides() {
    const slides = brochureScroll.querySelectorAll('.brochure-gallery-slide');
    const dots = brochureScroll.querySelectorAll('.brochure-gallery-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === brochureGalleryIdx));
    dots.forEach((d, i) => d.classList.toggle('active', i === brochureGalleryIdx));
}

function attachSwipeSimple(el, onLeft, onRight) {
    let startX = 0, startY = 0, tracking = false, dir = null;
    el.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        tracking = true; dir = null;
    }, { passive: true });
    el.addEventListener('touchmove', (e) => {
        if (!tracking) return;
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        if (dir === null) {
            if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
            dir = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
        }
        if (dir === 'h' && e.cancelable) e.preventDefault();
    }, { passive: false });
    el.addEventListener('touchend', (e) => {
        if (!tracking) return;
        tracking = false;
        const dx = e.changedTouches[0].clientX - startX;
        if (dir !== 'h' || Math.abs(dx) < 40) return;
        if (dx < 0) onLeft && onLeft();
        else onRight && onRight();
    }, { passive: true });
    el.addEventListener('touchcancel', () => { tracking = false; dir = null; }, { passive: true });
}

function closeBrochure() {
    if (!brochureOverlay.classList.contains('active')) return;
    brochureOverlay.classList.remove('active');
    unlockBodyScroll();
    currentBrochureSalonId = null;
    syncBottomNavWithOverlays();
}

const brochureCloseBtn = document.getElementById('brochureCloseBtn');
if (brochureCloseBtn) {
    brochureCloseBtn.addEventListener('click', closeBrochure);
}

brochureOverlay.addEventListener('click', (e) => {
    if (e.target === brochureOverlay) closeBrochure();
});

// ============================================
// SWIPE
// ============================================
function attachSwipe(el, onLeft, onRight, opts = {}) {
    const excludeSelector = opts.excludeSelector || null;
    const enabledFn = opts.enabledFn || (() => true);
    let startX = 0, startY = 0, startT = 0, tracking = false, direction = null;

    el.addEventListener('touchstart', (e) => {
        if (!enabledFn() || el.classList.contains('collapsed') || e.touches.length !== 1) return;
        if (excludeSelector && e.target.closest(excludeSelector)) return;
        if (e.target.closest('.detail-edge-zone')) return;
        const t = e.touches[0];
        startX = t.clientX; startY = t.clientY; startT = Date.now();
        tracking = true; direction = null;
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
        if (!tracking) return;
        const t = e.touches[0];
        const dx = t.clientX - startX, dy = t.clientY - startY;
        if (direction === null) {
            if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
            direction = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
        }
        if (direction === 'h' && e.cancelable) e.preventDefault();
    }, { passive: false });

    el.addEventListener('touchend', (e) => {
        if (!tracking) return;
        tracking = false;
        const t = e.changedTouches[0];
        const dx = t.clientX - startX;
        const dt = Date.now() - startT;
        if (direction !== 'h' || dt > 700 || Math.abs(dx) < 50) return;
        if (dx < 0) onLeft && onLeft(); else onRight && onRight();
    }, { passive: true });

    el.addEventListener('touchcancel', () => { tracking = false; direction = null; }, { passive: true });
}

attachSwipe(detailTextCard, () => changeText('next'), () => changeText('prev'), { enabledFn: () => !isArticleMode });
attachSwipe(detailListCard, () => changeCategory('next'), () => changeCategory('prev'), { excludeSelector: '.detail-categories, .detail-list-item.expanded' });
attachSwipe(detailImageCard, () => showImageOverlay(), () => hideImageOverlay());

detailImageOverlay.addEventListener('click', () => { if (imageOverlayActive) hideImageOverlay(); });

// ============================================
// BOTTOM NAV
// ============================================
function updateBottomNavVisibility() {
    const isDetail = detailView.style.display === 'block';
    const threshold = isDetail ? 550 : 250;
    bottomNav.classList.toggle('visible', window.scrollY > threshold);
    syncBottomNavWithOverlays();
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => { updateBottomNavVisibility(); scrollTicking = false; });
        scrollTicking = true;
    }
}, { passive: true });

bottomNavBtns.forEach(btn => {
    const handler = (e) => {
        e.preventDefault(); e.stopPropagation();
        const nav = btn.dataset.nav;
        if (nav === 'home' || nav === 'search') {
            if (detailView.style.display === 'block') {
                detailView.style.display = 'none';
                mainView.style.display = 'block';
                navigationHistory = [];
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (nav === 'search') setTimeout(() => searchInput.focus(), 500);
        } else if (nav === 'profile') {
            if (detailView.style.display === 'block') {
                detailView.style.display = 'none';
                mainView.style.display = 'block';
                navigationHistory = [];
                setTimeout(() => document.querySelector('.login-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
            } else {
                document.querySelector('.login-section')?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', (e) => { if (e.cancelable) e.preventDefault(); handler(e); }, { passive: false });
});

updateBottomNavVisibility();

// ============================================
// MENU / OVERLAYS
// ============================================
menuBtn.addEventListener('click', () => {
    menuModal.classList.add('active');
    lockBodyScroll();
    syncBottomNavWithOverlays();
});

modalClose.addEventListener('click', () => {
    menuModal.classList.remove('active');
    unlockBodyScroll();
    syncBottomNavWithOverlays();
});

menuModal.addEventListener('click', (e) => {
    if (e.target === menuModal) {
        menuModal.classList.remove('active');
        unlockBodyScroll();
        syncBottomNavWithOverlays();
    }
});

document.querySelectorAll('.menu-nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page === 'theme') { cycleTheme(); return; }

        menuModal.classList.remove('active');
        unlockBodyScroll();
        setTimeout(() => {
            if (page === 'about') {
                aboutOverlay.classList.add('active');
                lockBodyScroll();
                syncBottomNavWithOverlays();
            }
            else if (page === 'contact') {
                contactOverlay.classList.add('active');
                lockBodyScroll();
                syncBottomNavWithOverlays();
            }
            else if (page === 'home') {
                if (detailView.style.display === 'block') {
                    detailView.style.display = 'none';
                    mainView.style.display = 'block';
                    navigationHistory = [];
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
                syncBottomNavWithOverlays();
            } else {
                showResult(`<h2>${link.textContent}</h2><p>Ez a(z) ${link.textContent} oldal tartalma.</p>`);
            }
        }, 200);
    });
});

aboutClose.addEventListener('click', () => {
    aboutOverlay.classList.remove('active');
    unlockBodyScroll();
    syncBottomNavWithOverlays();
});
aboutOverlay.addEventListener('click', (e) => {
    if (e.target === aboutOverlay) {
        aboutOverlay.classList.remove('active');
        unlockBodyScroll();
        syncBottomNavWithOverlays();
    }
});

contactClose.addEventListener('click', () => {
    contactOverlay.classList.remove('active');
    unlockBodyScroll();
    syncBottomNavWithOverlays();
});
contactOverlay.addEventListener('click', (e) => {
    if (e.target === contactOverlay) {
        contactOverlay.classList.remove('active');
        unlockBodyScroll();
        syncBottomNavWithOverlays();
    }
});

// ============================================
// SEARCH
// ============================================
function showTrendingSuggestions() {
    const header = `<li class="suggestions-header">Felkapott keresések</li>`;
    const items = TRENDING_SEARCHES.slice(0, 5).map(t => `<li data-name="${t}">${t}</li>`).join('');
    suggestionsList.innerHTML = header + items;
    suggestionsList.classList.add('active');
    suggestionsList.classList.add('trending');
}

function scrollSearchIntoView() {
    const searchSection = document.querySelector('.search-section');
    if (!searchSection) return;
    const rect = searchSection.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - 5;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

searchInput.addEventListener('focus', () => {
    document.body.classList.add('search-focused');
    if (!searchInput.value.trim()) {
        showTrendingSuggestions();
    }
    setTimeout(() => {
        scrollSearchIntoView();
    }, 300);
});

searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 1) {
        showTrendingSuggestions();
        return;
    }
    suggestionsList.classList.remove('trending');
    if (q.length < 2) { suggestionsList.classList.remove('active'); suggestionsList.innerHTML = ''; return; }
    const matches = database.filter(i => i.name.toLowerCase().includes(q));
    if (matches.length > 0) {
        suggestionsList.innerHTML = matches.slice(0, 5).map(i => `<li data-name="${i.name}">${i.name} (${i.price} Ft)</li>`).join('');
        suggestionsList.classList.add('active');
    } else {
        suggestionsList.innerHTML = '<li>Nincs találat</li>';
        suggestionsList.classList.add('active');
    }
});

suggestionsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' && e.target.dataset.name) {
        searchInput.value = e.target.dataset.name;
        suggestionsList.classList.remove('active');
        suggestionsList.classList.remove('trending');
        performSearch();
    }
});

searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); performSearch(); } });

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!searchInput.value.trim()) {
        searchInput.value = '';
        searchInput.focus();
        showTrendingSuggestions();
        setTimeout(() => scrollSearchIntoView(), 300);
    } else {
        searchInput.value = '';
        searchInput.focus();
        showTrendingSuggestions();
        setTimeout(() => scrollSearchIntoView(), 300);
    }
});

function performSearch() {
    const q = searchInput.value.trim().toLowerCase();
    suggestionsList.classList.remove('active');
    suggestionsList.classList.remove('trending');
    if (!q) { showResult('<h2>Kereső</h2><p>Adj meg egy keresőkifejezést!</p>'); return; }
    const results = database.filter(i => i.name.toLowerCase().includes(q));
    if (results.length === 0) {
        showResult(`<h2>Nincs találat</h2><p>Nem találtunk eredményt: "${searchInput.value}"</p>`);
    } else {
        const items = results.map(r => `<div class="result-item"><strong>${r.name}</strong>Kategória: ${r.category} | Ár: ${r.price.toLocaleString('hu-HU')} Ft</div>`).join('');
        showResult(`<h2>Találatok (${results.length})</h2>${items}`);
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsList.classList.remove('active');
        suggestionsList.classList.remove('trending');
        if (document.activeElement !== searchInput) {
            document.body.classList.remove('search-focused');
        }
    }
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        if (document.activeElement !== searchInput) {
            document.body.classList.remove('search-focused');
            suggestionsList.classList.remove('active');
            suggestionsList.classList.remove('trending');
        }
    }, 200);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (menuModal.classList.contains('active')) { menuModal.classList.remove('active'); unlockBodyScroll(); }
        if (resultModal.classList.contains('active')) closeResultModal();
        if (priceInfoModal.classList.contains('active')) closePriceInfoModal();
        if (reviewsModal.classList.contains('active')) closeReviewsModal();
        if (aboutOverlay.classList.contains('active')) { aboutOverlay.classList.remove('active'); unlockBodyScroll(); }
        if (contactOverlay.classList.contains('active')) { contactOverlay.classList.remove('active'); unlockBodyScroll(); }
        if (brochureOverlay.classList.contains('active')) closeBrochure();
        suggestionsList.classList.remove('active');
        suggestionsList.classList.remove('trending');
        document.body.classList.remove('search-focused');
        searchInput.blur();
        hideImageOverlay();
        syncBottomNavWithOverlays();
    }
});

// ============================================
// LOGIN FORM
// ============================================
const loginForm = $('loginForm');
const loginEmail = $('loginEmail');
const loginPassword = $('loginPassword');
const passwordToggle = $('passwordToggle');
const stayLoggedIn = $('stayLoggedIn');
const forgotPassword = $('forgotPassword');
const facebookLogin = $('facebookLogin');
const googleLogin = $('googleLogin');
const registerBtn = $('registerBtn');

passwordToggle.addEventListener('click', () => {
    loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
    passwordToggle.classList.toggle('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value.trim();
    const pw = loginPassword.value.trim();
    if (!email || !pw) { showResult(`<h2>Hiányzó adatok</h2><p>Töltsd ki mindkét mezőt!</p>`); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showResult(`<h2>Érvénytelen email</h2><p>Adj meg érvényes email címet!</p>`); return; }
    showResult(`<h2>Bejelentkezés</h2><p>Sikeres kísérlet! 🎉</p><p>Email: ${email}</p>`);
});

forgotPassword.addEventListener('click', (e) => { e.preventDefault(); showResult(`<h2>Jelszó helyreállítás</h2><p>Fejlesztés alatt.</p>`); });
stayLoggedIn.addEventListener('click', (e) => { e.preventDefault(); stayLoggedIn.classList.toggle('active'); });
facebookLogin.addEventListener('click', () => showResult(`<h2>Facebook</h2><p>Hamarosan. 📘</p>`));
googleLogin.addEventListener('click', () => showResult(`<h2>Google</h2><p>Hamarosan. 🔍</p>`));
registerBtn.addEventListener('click', () => showResult(`<h2>Regisztráció</h2><p>Hamarosan. 💅</p>`));

console.log('✨ Nails1.hu betöltve – frissített verzió');
