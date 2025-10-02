// Array con la información de todos los videos
const videos = [
  { id: 1, title: "Video 0", src: "/videos/video00.mp4", thumb: "videos/video1.mp4" },
  { id: 1, title: "Video 1", src: "/videos/video01.mp4", thumb: "videos/video1.mp4" },
  { id: 2, title: "Video 2", src: "/videos/video02.mp4", thumb: "videos/video2.mp4" },
  { id: 3, title: "Video 3", src: "/videos/video03.mp4", thumb: "videos/video3.mp4" },
  { id: 4, title: "Video 4", src: "/videos/video04.mp4", thumb: "videos/video4.mp4" }, 
  { id: 5, title: "Video 5", src: "/videos/video05.mp4", thumb: "videos/video5.mp4" },
  { id: 6, title: "Video 6", src: "/videos/video06.mp4", thumb: "videos/video6.mp4" },
  { id: 7, title: "Video 7", src: "/videos/video07.mp4", thumb: "videos/video7.mp4" },
  { id: 8, title: "Video 8", src: "/videos/video08.mp4", thumb: "videos/video8.mp4" },
  { id: 9, title: "Video 9", src: "/videos/video09.mp4", thumb: "videos/video9.mp4" },
  { id: 10, title: "Video 10", src: "/videos/video10.mp4", thumb: "videos/video10.mp4" },

  // Agrega más videos aquí simplemente añadiendo nuevas entradas al array
];

function playVideo(src) {
  // Abre play.html con la URL del video como parámetro
  window.location.href = 'play.html?src=' + encodeURIComponent(src);
}

// Función para cargar la galería de videos
function loadVideoGallery() {
  const gallery = document.getElementById('videoGallery');
  
  videos.forEach(video => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'video-thumb';
    thumbDiv.onclick = () => playVideo(video.src);
    
    const videoElement = document.createElement('video');
    videoElement.src = video.thumb;
    videoElement.muted = true;
    
    // Añadir título debajo del video
    const titleElement = document.createElement('p');
    titleElement.textContent = video.title;
    titleElement.className = 'video-title';
    
    thumbDiv.appendChild(videoElement);
    thumbDiv.appendChild(titleElement);
    gallery.appendChild(thumbDiv);
  });
}

// Cargar la galería cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadVideoGallery);