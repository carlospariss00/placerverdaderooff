// links.js - Gestión optimizada de enlaces para Placerverdadero
// Mantén aquí un array de enlaces para no repetir código en el HTML.
// Añade más objetos { title: 'Nombre', url: 'https://...', category?: 'categoría' } según necesites.

const links = [
    { 
        title: 'Video Romántico Especial', 
        url: 'https://placer-verdadero-main-3.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fplacerverdadero-3%2Fvideo00-1.mp4',
        category: 'destacado'
    },
    { 
        title: 'Sorpresa de San Valentín', 
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        category: 'valentin'
    },
    { 
        title: 'Momentos Especiales', 
        url: 'https://www.youtube.com/watch?v=VIDEO3',
        category: 'valentin'
    },
    { 
        title: 'Noche de Pasión', 
        url: 'https://www.youtube.com/watch?v=VIDEO4',
        category: 'noche'
    },
    { 
        title: 'Sueños Dulces', 
        url: 'https://www.youtube.com/watch?v=VIDEO5',
        category: 'noche'
    },
    { 
        title: 'Momentos Íntimos', 
        url: 'https://www.youtube.com/watch?v=VIDEO6',
        category: 'intimo'
    },
    { 
        title: 'Deseos Ocultos', 
        url: 'https://www.youtube.com/watch?v=VIDEO7',
        category: 'intimo'
    },
    { 
        title: 'Fantasías Realizadas', 
        url: 'https://www.youtube.com/watch?v=VIDEO8',
        category: 'fantasia'
    }
];

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
