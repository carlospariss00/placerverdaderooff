// Array con la información de todos los videos
const videos = [
  { id: 1, title: "Video 0", src: "/api/video00.mp4", thumb: "/api/video00.mp4" },
  { id: 2, title: "Video 1", src: "/api/video01.mp4", thumb: "/api/video01.mp4" },
  { id: 3, title: "Video 2", src: "/api/video02.mp4", thumb: "/api/video02.mp4" },
  { id: 4, title: "Video 3", src: "/api/video03.mp4", thumb: "/api/video03.mp4" },
  { id: 5, title: "Video 4", src: "/api/video04.mp4", thumb: "/api/video04.mp4" },
  { id: 6, title: "Video 5", src: "/api/video05.mp4", thumb: "/api/video05.mp4" },
  { id: 7, title: "Video 6", src: "/api/video06.mp4", thumb: "/api/video06.mp4" },
  { id: 8, title: "Video 7", src: "/api/video07.mp4", thumb: "/api/video07.mp4" },
  { id: 9, title: "Video 8", src: "/api/video08.mp4", thumb: "/api/video08.mp4" },
  { id: 10, title: "Video 9", src: "/api/video09.mp4", thumb: "/api/video09.mp4" },
  { id: 11, title: "Video 10", src: "/api/video10.mp4", thumb: "/api/video10.mp4" },
];

function playVideo(src) {
  window.location.href = 'play.html?src=' + encodeURIComponent(src);
}

function loadVideoGallery() {
  const gallery = document.getElementById('videoGallery');
  
  videos.forEach(video => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'video-thumb';
    thumbDiv.onclick = () => playVideo(video.src);
    
    const videoElement = document.createElement('video');
    videoElement.src = video.thumb;
    videoElement.muted = true;
    videoElement.preload = "metadata";
    
    const titleElement = document.createElement('p');
    titleElement.textContent = video.title;
    titleElement.className = 'video-title';
    
    thumbDiv.appendChild(videoElement);
    thumbDiv.appendChild(titleElement);
    gallery.appendChild(thumbDiv);
  });
}

document.addEventListener('DOMContentLoaded', loadVideoGallery);
