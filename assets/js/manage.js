document.addEventListener('DOMContentLoaded', function () {
    // Updated flag data
    const flags = [
        'fr', 'de', 'it', 'es', 'gb', // Europe
        'qa', 'ae', 'sa', // Gulf countries
        'ca', 'us' // America
    ];

    // Get the container to add flags
    const flagContainer = document.querySelector('.currency-flags');

    // Add flags dynamically
    flags.forEach(flag => {
        const div = document.createElement('div');
        div.classList.add('flag-item');
        div.style.backgroundImage = `url('https://flagcdn.com/${flag}.svg')`;
        flagContainer.appendChild(div);
    });
});
