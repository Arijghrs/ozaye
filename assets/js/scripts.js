document.addEventListener("DOMContentLoaded", () => {
    faqQuestions();
    populateCurrencyDropdown();

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});

// Ensure you have a global array of currency data
const currencies = [
    { code: 'aed', name: 'United Arab Emirates Dirham', flag: 'ae' },
    { code: 'afn', name: 'Afghan Afghani', flag: 'af' },
    { code: 'xcd', name: 'East Caribbean Dollar', flag: 'ag' },
    { code: 'all', name: 'Albanian Lek', flag: 'al' },
    { code: 'amd', name: 'Armenian Dram', flag: 'am' },
    { code: 'ang', name: 'Netherlands Antillean Guilder', flag: 'an' },
    { code: 'aoa', name: 'Angolan Kwanza', flag: 'ao' },
    { code: 'aqd', name: 'Antarctic Dollar', flag: 'aq' },
    { code: 'ars', name: 'Argentine Peso', flag: 'ar' },
    { code: 'aud', name: 'Australian Dollar', flag: 'au' },
    { code: 'azn', name: 'Azerbaijani Manat', flag: 'az' },
    { code: 'bam', name: 'Bosnia and Herzegovina Convertible Mark', flag: 'ba' },
    { code: 'bbd', name: 'Barbadian Dollar', flag: 'bb' },
    { code: 'bdt', name: 'Bangladeshi Taka', flag: 'bd' },
    { code: 'xof', name: 'West African CFA Franc', flag: 'be' },
    { code: 'bgn', name: 'Bulgarian Lev', flag: 'bg' },
    { code: 'bhd', name: 'Bahraini Dinar', flag: 'bh' },
    { code: 'bif', name: 'Burundian Franc', flag: 'bi' },
    { code: 'bmd', name: 'Bermudian Dollar', flag: 'bm' },
    { code: 'bnd', name: 'Brunei Dollar', flag: 'bn' },
    { code: 'bob', name: 'Bolivian Boliviano', flag: 'bo' },
    { code: 'brl', name: 'Brazilian Real', flag: 'br' },
    { code: 'bsd', name: 'Bahamian Dollar', flag: 'bs' },
    { code: 'nok', name: 'Bouvet Island Krone', flag: 'bv' },
    { code: 'bwp', name: 'Botswana Pula', flag: 'bw' },
    { code: 'byr', name: 'Belarusian Ruble', flag: 'by' },
    { code: 'bzd', name: 'Belize Dollar', flag: 'bz' },
    { code: 'cad', name: 'Canadian Dollar', flag: 'ca' },
    { code: 'cdf', name: 'Congolese Franc', flag: 'cd' },
    { code: 'xaf', name: 'Central African CFA Franc', flag: 'cf' },
    { code: 'chf', name: 'Swiss Franc', flag: 'ch' },
    { code: 'clp', name: 'Chilean Peso', flag: 'cl' },
    { code: 'cny', name: 'Chinese Yuan', flag: 'cn' },
    { code: 'cop', name: 'Colombian Peso', flag: 'co' },
    { code: 'crc', name: 'Costa Rican Colón', flag: 'cr' },
    { code: 'cup', name: 'Cuban Peso', flag: 'cu' },
    { code: 'cve', name: 'Cape Verdean Escudo', flag: 'cv' },
    { code: 'cyp', name: 'Cypriot Pound', flag: 'cy' },
    { code: 'czk', name: 'Czech Koruna', flag: 'cz' },
    { code: 'djf', name: 'Djiboutian Franc', flag: 'dj' },
    { code: 'dkk', name: 'Danish Krone', flag: 'dk' },
    { code: 'dop', name: 'Dominican Peso', flag: 'do' },
    { code: 'dzd', name: 'Algerian Dinar', flag: 'dz' },
    { code: 'ecs', name: 'Ecuadorian Sucre', flag: 'ec' },
    { code: 'eek', name: 'Estonian Kroon', flag: 'ee' },
    { code: 'egp', name: 'Egyptian Pound', flag: 'eg' },
    { code: 'etb', name: 'Ethiopian Birr', flag: 'et' },
    { code: 'eur', name: 'Euro', flag: 'fr' },
    { code: 'fjd', name: 'Fijian Dollar', flag: 'fj' },
    { code: 'fkp', name: 'Falkland Islands Pound', flag: 'fk' },
    { code: 'gbp', name: 'British Pound Sterling', flag: 'gb' },
    { code: 'gel', name: 'Georgian Lari', flag: 'ge' },
    { code: 'ggp', name: 'Guernsey Pound', flag: 'gg' },
    { code: 'ghs', name: 'Ghanaian Cedi', flag: 'gh' },
    { code: 'gip', name: 'Gibraltar Pound', flag: 'gi' },
    { code: 'gmd', name: 'Gambian Dalasi', flag: 'gm' },
    { code: 'gnf', name: 'Guinean Franc', flag: 'gn' },
    { code: 'gtq', name: 'Guatemalan Quetzal', flag: 'gt' },
    { code: 'gyd', name: 'Guyanese Dollar', flag: 'gy' },
    { code: 'hkd', name: 'Hong Kong Dollar', flag: 'hk' },
    { code: 'hnl', name: 'Honduran Lempira', flag: 'hn' },
    { code: 'hrk', name: 'Croatian Kuna', flag: 'hr' },
    { code: 'htg', name: 'Haitian Gourde', flag: 'ht' },
    { code: 'huf', name: 'Hungarian Forint', flag: 'hu' },
    { code: 'idr', name: 'Indonesian Rupiah', flag: 'id' },
    { code: 'ils', name: 'Israeli New Shekel', flag: 'il' },
    { code: 'inr', name: 'Indian Rupee', flag: 'in' },
    { code: 'iqd', name: 'Iraqi Dinar', flag: 'iq' },
    { code: 'irr', name: 'Iranian Rial', flag: 'ir' },
    { code: 'isk', name: 'Icelandic Króna', flag: 'is' },
    { code: 'jmd', name: 'Jamaican Dollar', flag: 'jm' },
    { code: 'jod', name: 'Jordanian Dinar', flag: 'jo' },
    { code: 'jpy', name: 'Japanese Yen', flag: 'jp' },
    { code: 'kes', name: 'Kenyan Shilling', flag: 'ke' },
    { code: 'kgs', name: 'Kyrgystani Som', flag: 'kg' },
    { code: 'khr', name: 'Cambodian Riel', flag: 'kh' },
    { code: 'kmf', name: 'Comorian Franc', flag: 'km' },
    { code: 'kpw', name: 'North Korean Won', flag: 'kp' },
    { code: 'krw', name: 'South Korean Won', flag: 'kr' },
    { code: 'kwd', name: 'Kuwaiti Dinar', flag: 'kw' },
    { code: 'kyd', name: 'Cayman Islands Dollar', flag: 'ky' },
    { code: 'kzt', name: 'Kazakhstani Tenge', flag: 'kz' },
    { code: 'lak', name: 'Lao Kip', flag: 'la' },
    { code: 'lbp', name: 'Lebanese Pound', flag: 'lb' },
    { code: 'lkr', name: 'Sri Lankan Rupee', flag: 'lk' },
    { code: 'lrd', name: 'Liberian Dollar', flag: 'lr' },
    { code: 'lsl', name: 'Lesotho Loti', flag: 'ls' },
    { code: 'ltl', name: 'Lithuanian Litas', flag: 'lt' },
    { code: 'lvl', name: 'Latvian Lats', flag: 'lv' },
    { code: 'lyd', name: 'Libyan Dinar', flag: 'ly' },
    { code: 'mad', name: 'Moroccan Dirham', flag: 'ma' },
    { code: 'mdl', name: 'Moldovan Leu', flag: 'md' },
    { code: 'mga', name: 'Malagasy Ariary', flag: 'mg' },
    { code: 'mkd', name: 'Macedonian Denar', flag: 'mk' },
    { code: 'mmk', name: 'Myanma Kyat', flag: 'mm' },
    { code: 'mnt', name: 'Mongolian Tugrik', flag: 'mn' },
    { code: 'mop', name: 'Macanese Pataca', flag: 'mo' },
    { code: 'mro', name: 'Mauritanian Ouguiya', flag: 'mr' },
    { code: 'mtl', name: 'Maltese Lira', flag: 'mt' },
    { code: 'mur', name: 'Mauritian Rupee', flag: 'mu' },
    { code: 'mvr', name: 'Maldivian Rufiyaa', flag: 'mv' },
    { code: 'mwk', name: 'Malawian Kwacha', flag: 'mw' },
    { code: 'mxn', name: 'Mexican Peso', flag: 'mx' },
    { code: 'myr', name: 'Malaysian Ringgit', flag: 'my' },
    { code: 'mzn', name: 'Mozambican Metical', flag: 'mz' },
    { code: 'nad', name: 'Namibian Dollar', flag: 'na' },
    { code: 'xpf', name: 'CFP Franc', flag: 'nc' },
    { code: 'ngn', name: 'Nigerian Naira', flag: 'ng' },
    { code: 'nio', name: 'Nicaraguan Córdoba', flag: 'ni' },
    { code: 'npr', name: 'Nepalese Rupee', flag: 'np' },
    { code: 'nzd', name: 'New Zealand Dollar', flag: 'nz' },
    { code: 'omr', name: 'Omani Rial', flag: 'om' },
    { code: 'pab', name: 'Panamanian Balboa', flag: 'pa' },
    { code: 'pen', name: 'Peruvian Nuevo Sol', flag: 'pe' },
    { code: 'pgk', name: 'Papua New Guinean Kina', flag: 'pg' },
    { code: 'php', name: 'Philippine Peso', flag: 'ph' },
    { code: 'pkr', name: 'Pakistani Rupee', flag: 'pk' },
    { code: 'pln', name: 'Polish Zloty', flag: 'pl' },
    { code: 'pyg', name: 'Paraguayan Guarani', flag: 'py' },
    { code: 'qar', name: 'Qatari Rial', flag: 'qa' },
    { code: 'ron', name: 'Romanian Leu', flag: 'ro' },
    { code: 'rsd', name: 'Serbian Dinar', flag: 'rs' },
    { code: 'rub', name: 'Russian Ruble', flag: 'ru' },
    { code: 'rwf', name: 'Rwandan Franc', flag: 'rw' },
    { code: 'sar', name: 'Saudi Riyal', flag: 'sa' },
    { code: 'sbd', name: 'Solomon Islands Dollar', flag: 'sb' },
    { code: 'scr', name: 'Seychellois Rupee', flag: 'sc' },
    { code: 'sdg', name: 'Sudanese Pound', flag: 'sd' },
    { code: 'sek', name: 'Swedish Krona', flag: 'se' },
    { code: 'sgd', name: 'Singapore Dollar', flag: 'sg' },
    { code: 'skk', name: 'Slovak Koruna', flag: 'sk' },
    { code: 'sll', name: 'Sierra Leonean Leone', flag: 'sl' },
    { code: 'sos', name: 'Somali Shilling', flag: 'so' },
    { code: 'srd', name: 'Surinamese Dollar', flag: 'sr' },
    { code: 'std', name: 'São Tomé and Príncipe Dobra', flag: 'st' },
    { code: 'svc', name: 'Salvadoran Colón', flag: 'sv' },
    { code: 'syp', name: 'Syrian Pound', flag: 'sy' },
    { code: 'szl', name: 'Swazi Lilangeni', flag: 'sz' },
    { code: 'thb', name: 'Thai Baht', flag: 'th' },
    { code: 'tjs', name: 'Tajikistani Somoni', flag: 'tj' },
    { code: 'tmt', name: 'Turkmenistani Manat', flag: 'tm' },
    { code: 'tnd', name: 'Tunisian Dinar', flag: 'tn' },
    { code: 'top', name: 'Tongan Paʻanga', flag: 'to' },
    { code: 'try', name: 'Turkish Lira', flag: 'tr' },
    { code: 'ttd', name: 'Trinidad and Tobago Dollar', flag: 'tt' },
    { code: 'twd', name: 'New Taiwan Dollar', flag: 'tw' },
    { code: 'tzs', name: 'Tanzanian Shilling', flag: 'tz' },
    { code: 'uah', name: 'Ukrainian Hryvnia', flag: 'ua' },
    { code: 'ugx', name: 'Ugandan Shilling', flag: 'ug' },
    { code: 'usd', name: 'United States Dollar', flag: 'us' },
    { code: 'uyu', name: 'Uruguayan Peso', flag: 'uy' },
    { code: 'uzs', name: 'Uzbekistani Som', flag: 'uz' },
    { code: 'vef', name: 'Venezuelan Bolívar', flag: 've' },
    { code: 'vnd', name: 'Vietnamese Dong', flag: 'vn' },
    { code: 'vuv', name: 'Vanuatu Vatu', flag: 'vu' },
    { code: 'yer', name: 'Yemeni Rial', flag: 'ye' },
    { code: 'zar', name: 'South African Rand', flag: 'za' },
    { code: 'zmk', name: 'Zambian Kwacha', flag: 'zm' },
    { code: 'zwd', name: 'Zimbabwean Dollar', flag: 'zw' }
];

// Function to handle FAQ interactions
function faqQuestions() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.getAttribute('aria-expanded') === 'true';

            // Close all FAQ items
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.style.display = 'none';
            });

            // Toggle the clicked FAQ item
            question.setAttribute('aria-expanded', !isOpen);
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });
}



// Function to initialize scripts for dynamically loaded content
document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor tags with href attributes starting with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        
        // Get the target element by selecting it using the href attribute
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Check if the target element exists
        if (targetElement) {
          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start'     // Align the top of the target element with the top of the viewport
          });
        }
      });
    });
  });
  
    




// Function to populate the currency dropdown
function populateCurrencyDropdown() {
    const currencyDropdowns = document.querySelectorAll(".currency-dropdown");

    currencies.forEach(currency => {
        currencyDropdowns.forEach(dropdown => {
            const option = document.createElement("option");
            option.value = currency.code;
            option.textContent = `${currency.name} (${currency.code.toUpperCase()})`;
            dropdown.appendChild(option);
        });
    });

    loadFlags(); // Load flags for the initial state
    currencyDropdowns.forEach(dropdown => dropdown.addEventListener("change", loadFlags));
}

// Function to load flags based on selected currency
function loadFlags() {
    const currencyDropdowns = document.querySelectorAll(".currency-dropdown");

    currencyDropdowns.forEach(dropdown => {
        const selectedCurrency = dropdown.value;
        const currencyData = currencies.find(c => c.code === selectedCurrency);
        const flagDiv = dropdown.previousElementSibling;
        if (currencyData && flagDiv && flagDiv.classList.contains('flagDiv')) {
            flagDiv.style.backgroundImage = `url('https://flagcdn.com/${currencyData.flag}.svg')`;
        }
    });
}

