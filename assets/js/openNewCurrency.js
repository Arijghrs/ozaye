document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const selectedCountry = document.getElementById('selected-country');
    const selectedFlag = document.getElementById('selected-flag');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        dropdownToggle.classList.toggle('open');
    });

    document.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const countryLabel = this.getAttribute('data-label');
            const flagClass = this.querySelector('.flag').className.split(' ')[1];

            selectedCountry.textContent = countryLabel;
            selectedFlag.className = `flag ${flagClass}`;  // Corrected line

            dropdownMenu.style.display = 'none';
            dropdownToggle.classList.remove('open');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
            dropdownToggle.classList.remove('open');
        }
    });
});
