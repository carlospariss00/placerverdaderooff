// hearts.js — efecto de corazones románticos para San Valentín
(function () {
    const config = {
        hearts: 40, // número base de corazones (ajusta según pantalla)
        maxSize: 20, // tamaño máximo del corazón
        minSize: 8,
        speedFactor: 0.7, // controla velocidad general
        opacityMin: 0.4,
        opacityMax: 0.8,
        colors: [
            '#ff1744', // rojo intenso
            '#ff6b9d', // rosa fuerte
            '#ffc0cb', // rosa claro
            '#ff4081', // rosa medio
            '#e91e63'  // rosa profundo
        ]
    };

    let canvas, ctx, width, height, heartsArr = [], rafId;

    function createCanvas() {
        canvas = document.createElement('canvas');
        canvas.id = 'hearts-canvas';
        canvas.style.opacity = '0.7';
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        resize();
        window.addEventListener('resize', resize);
    }

    function resize() {
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        width = canvas.width = Math.floor(window.innerWidth * dpr);
        height = canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.scale(dpr, dpr);
        initHearts();
    }

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomColor() {
        return config.colors[Math.floor(Math.random() * config.colors.length)];
    }

    function drawHeart(x, y, size, color) {
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = color;
        ctx.beginPath();
        
        // Dibuja un corazón matemático
        const width = size;
        const height = size;
        
        ctx.moveTo(x, y + height / 4);
        
        // Lado izquierdo del corazón
        ctx.quadraticCurveTo(x, y, x + width / 4, y);
        ctx.quadraticCurveTo(x + width / 2, y, x + width / 2, y + height / 4);
        
        // Lado derecho del corazón
        ctx.quadraticCurveTo(x + width / 2, y, x + width * 3/4, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + height / 4);
        
        ctx.quadraticCurveTo(x + width, y + height / 2, x + width * 3/4, y + height * 3/4);
        ctx.lineTo(x + width / 2, y + height);
        ctx.lineTo(x + width / 4, y + height * 3/4);
        
        ctx.quadraticCurveTo(x, y + height / 2, x, y + height / 4);
        
        ctx.fill();
        ctx.restore();
    }

    function initHearts() {
        heartsArr = [];
        const count = Math.max(15, Math.round((window.innerWidth / 1200) * config.hearts));
        for (let i = 0; i < count; i++) {
            heartsArr.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight - window.innerHeight,
                size: rand(config.minSize, config.maxSize),
                speed: rand(0.5, 2) * config.speedFactor,
                wind: rand(-0.5, 1),
                swayAmount: rand(0.5, 2),
                swaySpeed: rand(0.01, 0.03),
                opacity: rand(config.opacityMin, config.opacityMax),
                color: getRandomColor(),
                rotation: rand(0, Math.PI * 2),
                rotationSpeed: rand(-0.02, 0.02),
                time: Math.random() * Math.PI * 2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        for (let i = 0; i < heartsArr.length; i++) {
            const heart = heartsArr[i];
            
            // Movimiento con balanceo suave
            heart.time += heart.swaySpeed;
            const sway = Math.sin(heart.time) * heart.swayAmount;
            
            // Actualizar posición
            heart.y += heart.speed;
            heart.x += heart.wind + sway * 0.3;
            heart.rotation += heart.rotationSpeed;
            
            // Dibujar corazón
            ctx.save();
            ctx.globalAlpha = heart.opacity;
            ctx.translate(heart.x, heart.y);
            ctx.rotate(heart.rotation);
            drawHeart(-heart.size/2, -heart.size/2, heart.size, heart.color);
            ctx.restore();
            
            // Reiniciar si sale de pantalla
            if (heart.y > window.innerHeight + 50) {
                heart.y = rand(-50, -20);
                heart.x = Math.random() * window.innerWidth;
                heart.size = rand(config.minSize, config.maxSize);
                heart.speed = rand(0.5, 2) * config.speedFactor;
                heart.wind = rand(-0.5, 1);
                heart.color = getRandomColor();
                heart.opacity = rand(config.opacityMin, config.opacityMax);
            }
            
            // Reiniciar si sale por los lados
            if (heart.x > window.innerWidth + 50) {
                heart.x = -50;
            } else if (heart.x < -50) {
                heart.x = window.innerWidth + 50;
            }
        }
        
        rafId = requestAnimationFrame(draw);
    }

    function start() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', start);
            return;
        }
        
        // Respetar preferencia de reducción de movimiento
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        
        createCanvas();
        draw();
    }

    // Exponer control del efecto
    window.heartsEffect = {
        start: start,
        stop: function () {
            if (rafId) cancelAnimationFrame(rafId);
            if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
            window.removeEventListener('resize', resize);
        },
        toggle: function () {
            if (canvas && canvas.parentNode) {
                this.stop();
            } else {
                start();
            }
        }
    };

    // Auto-start con ligera demora
    setTimeout(start, 300);
})();