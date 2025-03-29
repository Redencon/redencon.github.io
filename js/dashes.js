const lineOverlay = document.querySelector('.line-overlay');
var checkOverlay = setInterval(function() {
  const lineOverlay = document.querySelector('.line-overlay');

  const density = 120
  
  if (lineOverlay) {
    console.log('Elements found:', lineOverlay);
    // Function to create a single line
    function createLine() {
      const line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.top = `${Math.random() * 100}%`;
      line.style.left = `-130px`; // Start slightly off-screen
      line.style.width = `${Math.random()*(160/density) + 50}px`;
      line.style.height = `${Math.max(Math.round(80/density), 1)}px`;
      if (Math.random() > 0.5) {
        line.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // Half opaque
       } else {
        line.style.backgroundColor = 'rgba(0, 255, 13, 0.2)'; // Half opaque
      }
      line.style.animation = `fly ${160/density + Math.random() * 320 / density}s linear infinite`;
      line.style.animationDelay = `${Math.random() * 8}s`; // Stagger start times
      return line;
    }
    
    // Generate multiple lines
    for (let i = 0; i < density; i++) {
      const line = createLine();
      lineOverlay.appendChild(line);
    }
    
    // CSS animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fly {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(120vw);
        }
      }
    `;
    document.head.appendChild(style);
    clearInterval(checkOverlay)
  } else {
    console.log('Overlay not found yet, retrying...');
  }
}, 100);

