// links.js - Gestión optimizada de enlaces para Placerverdadero
// Mantén aquí un array de enlaces para no repetir código en el HTML.
// Añade más objetos { title: 'Nombre', url: 'https://...', category?: 'categoría' } según necesites.

const links = [
    { title: 'video 150', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo00.mp4' },
    { title: 'video 151', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo01.mp4' },
    { title: 'video 152', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo02.mp4' },
    { title: 'video 153', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo03.mp4' },
    { title: 'video 154', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo04.mp4' },
    { title: 'video 155', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo05.mp4' },
    { title: 'video 156', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo06.mp4' },
    { title: 'video 157', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo07.mp4' },
    { title: 'video 158', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo08.mp4' },
    { title: 'video 159', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo09.mp4' },
    { title: 'video 160', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo10.mp4' },
    { title: 'video 161', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo11.mp4' },
    { title: 'video 162', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo12.mp4' },
    { title: 'video 163', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo13.mp4' },
    { title: 'video 164', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo14.mp4' },
    { title: 'video 165', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo15.mp4' },
    { title: 'video 166', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo16.mp4' },
    { title: 'video 167', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo17.mp4' },
    { title: 'video 168', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo18.mp4' },
    { title: 'video 169', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo19.mp4' },
    { title: 'video 170', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo20.mp4' },
    { title: 'video 171', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo21.mp4' },
    { title: 'video 172', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo22.mp4' },
    { title: 'video 173', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo23.mp4' },
    { title: 'video 174', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo24.mp4' },
    { title: 'video 175', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo25.mp4' },
    { title: 'video 176', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo26.mp4' },
    { title: 'video 177', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo27.mp4' },
    { title: 'video 178', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo28.mp4' },
    { title: 'video 179', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo29.mp4' },
    { title: 'video 180', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo30.mp4' },
    { title: 'video 181', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo31.mp4' },
    { title: 'video 182', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo32.mp4' },
    { title: 'video 183', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo33.mp4' },
    { title: 'video 184', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo34.mp4' },
    { title: 'video 185', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo35.mp4' },
    { title: 'video 186', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo36.mp4' },
    { title: 'video 187', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo37.mp4' },
    { title: 'video 188', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo38.mp4' },
    { title: 'video 189', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo39.mp4' },
    { title: 'video 190', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo40.mp4' },
    { title: 'video 191', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo41.mp4' },
    { title: 'video 192', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo42.mp4' },
    { title: 'video 193', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo43.mp4' },
    { title: 'video 194', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo44.mp4' },
    { title: 'video 195', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo45.mp4' },
    { title: 'video 196', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo46.mp4' },
    { title: 'video 197', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo47.mp4' },
    { title: 'video 198', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo48.mp4' },
    { title: 'video 199', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo49.mp4' },
    { title: 'video 200', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo50.mp4' },
    { title: 'video 201', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo51.mp4' },
    { title: 'video 202', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo52.mp4' },
    { title: 'video 203', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo53.mp4' },
    { title: 'video 204', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo54.mp4' },
    { title: 'video 205', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo55.mp4' },
    { title: 'video 206', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo56.mp4' },
    { title: 'video 207', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo57.mp4' },
    { title: 'video 208', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo58.mp4' },
    { title: 'video 209', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo59.mp4' },
    { title: 'video 210', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo60.mp4' },
    { title: 'video 211', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo61.mp4' },
    { title: 'video 212', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo62.mp4' },
    { title: 'video 213', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo63.mp4' },
    { title: 'video 214', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo64.mp4' },
    { title: 'video 215', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo65.mp4' },
    { title: 'video 216', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo66.mp4' },
    { title: 'video 217', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo67.mp4' },
    { title: 'video 218', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo68.mp4' },
    { title: 'video 219', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo69.mp4' },
    { title: 'video 220', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo70.mp4' },
    { title: 'video 221', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo71.mp4' },
    { title: 'video 222', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo72.mp4' },
    { title: 'video 223', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo73.mp4' },
    { title: 'video 224', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo74.mp4' },
    { title: 'video 225', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo75.mp4' },
    { title: 'video 226', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo76.mp4' },
    { title: 'video 227', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo77.mp4' },
    { title: 'video 228', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo78.mp4' },
    { title: 'video 229', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo79.mp4' },
    { title: 'video 230', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo80.mp4' },
    { title: 'video 231', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo81.mp4' },
    { title: 'video 232', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo82.mp4' },
    { title: 'video 233', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo83.mp4' },
    { title: 'video 234', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo84.mp4' },
    { title: 'video 235', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo85.mp4' },
    { title: 'video 236', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo86.mp4' },
    { title: 'video 237', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo87.mp4' },
    { title: 'video 238', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo88.mp4' },
    { title: 'video 239', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo89.mp4' },
    { title: 'video 240', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo90.mp4' },
    { title: 'video 241', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo91.mp4' },
    { title: 'video 242', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo92.mp4' },
    { title: 'video 243', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo93.mp4' },
    { title: 'video 244', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo94.mp4' },
    { title: 'video 245', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo95.mp4' },
    { title: 'video 246', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo96.mp4' },
    { title: 'video 247', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo97.mp4' },
    { title: 'video 248', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo98.mp4' },
    { title: 'video 249', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo99.mp4' },
    { title: 'video 250', url: 'https://placer-verdadero-main-2.onrender.com/play.html?video=https%3A%2F%2Fplacerverdadero.xyz%2Fvid%25201%2Fvideo100.mp4' },
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
