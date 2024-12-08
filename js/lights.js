document.addEventListener('DOMContentLoaded', function() {
    const lightsContainer = document.querySelector('.christmas-lights');
    var curleft = Math.random() * 8;
    for (let i = 0; i < 25; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        if (i % 2 === 0) {
            light.classList.add('green');
        }
        // Set random top position between 0 and 50px
        light.style.top = `${Math.random() * 50}px`;
        // Set random left position between 0 and 100%
        curleft += (Math.random() * 8) % 100;
        light.style.left = `${curleft}%`;
        // Set random animation delay between 0 and 1s
        light.style.animationDelay = `${Math.random()}s`;
        lightsContainer.appendChild(light);
    }
});