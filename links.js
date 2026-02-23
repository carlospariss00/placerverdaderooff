// links.js - Gestión optimizada de enlaces para Placerverdadero
// Mantén aquí un array de enlaces para no repetir código en el HTML.
// Añade más objetos { title: 'Nombre', url: 'https://...', category?: 'categoría' } según necesites.

const links = [
    { title: 'video 116', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo116.mp4' },
    { title: 'video 117', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo117.mp4' },
    { title: 'video 118', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo118.mp4' },
    { title: 'video 119', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo119.mp4' },
    { title: 'video 120', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo120.mp4' },
    { title: 'video 121', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo121.mp4' },
    { title: 'video 122', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo122.mp4' },
    { title: 'video 123', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo123.mp4' },
    { title: 'video 124', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo124.mp4' },
    { title: 'video 125', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo125.mp4' },
    { title: 'video 126', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo126.mp4' },
    { title: 'video 127', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo127.mp4' },
    { title: 'video 128', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo128.mp4' },
    { title: 'video 129', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo129.mp4' },
    { title: 'video 130', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo130.mp4' },
    { title: 'video 131', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo131.mp4' },
    { title: 'video 132', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo132.mp4' },
    { title: 'video 133', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo133.mp4' },
    { title: 'video 134', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo134.mp4' },
    { title: 'video 135', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo135.mp4' },
    { title: 'video 136', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo136.mp4' },
    { title: 'video 137', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo137.mp4' },
    { title: 'video 138', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo138.mp4' },
    { title: 'video 139', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo139.mp4' },
    { title: 'video 140', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo140.mp4' },
    { title: 'video 141', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo141.mp4' },
    { title: 'video 142', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo142.mp4' },
    { title: 'video 143', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo143.mp4' },
    { title: 'video 144', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo144.mp4' },
    { title: 'video 145', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo145.mp4' },
    { title: 'video 146', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo146.mp4' },
    { title: 'video 147', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo147.mp4' },
    { title: 'video 148', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo148.mp4' },
    { title: 'video 149', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25202%2FVideo149.mp4' },
].map((link, index) => ({
    numero: index + 1,
    ...link
}));

// Cache para mejorar rendimiento
let linksCache = null;

function renderLinks() {
    const ol = document.querySelector('.numbered-links');
    if (!ol) return;
    
    // Usar cache si no hay cambios
    if (linksCache && linksCache.length === links.length) {
        ol.innerHTML = linksCache;
        return;
    }
    
    ol.innerHTML = '';
    const fragment = document.createDocumentFragment();

    links.forEach((link, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        // Mejorar SEO y accesibilidad
        a.href = '#';
        a.textContent = link.title;
        a.setAttribute('data-category', link.category || 'general');
        a.setAttribute('aria-label', `Abrir ${link.title} en nueva ventana`);
        
        // Prevenir comportamiento default y manejar clic
        a.addEventListener('click', (e) => {
            e.preventDefault();
            openLink(link.url);
        });

        li.appendChild(a);
        fragment.appendChild(li);
    });

    ol.appendChild(fragment);
    
    // Actualizar cache
    linksCache = ol.innerHTML;
}

function openLink(url) {
    // Si existe la función openSecondaryPage la usamos (para mantener la lógica actual)
    if (typeof window.openSecondaryPage === 'function') {
        window.openSecondaryPage(url);
    } else {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

// API pública para gestionar enlaces dinámicamente
window.LinksManager = {
    add: function(title, url, category = 'general') {
        links.push({ title, url, category });
        linksCache = null; // Invalidar cache
        renderLinks();
    },
    remove: function(index) {
        if (index >= 0 && index < links.length) {
            links.splice(index, 1);
            linksCache = null;
            renderLinks();
        }
    },
    getByCategory: function(category) {
        return links.filter(link => link.category === category);
    },
    getAll: function() {
        return [...links];
    },
    refresh: function() {
        linksCache = null;
        renderLinks();
    }
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLinks);
} else {
    renderLinks();
}
