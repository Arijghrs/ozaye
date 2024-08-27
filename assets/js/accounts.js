document.addEventListener('DOMContentLoaded', function () {
    // Sample data for Global Accounts
    const accounts = [
        { code: 'GBP', name: 'Great Britain Pound', balance: '£120.40', flag: 'gb' },
        { code: 'EUR', name: 'Euro', balance: '€560.40', flag: 'eu' },
        { code: 'SGD', name: 'Singapore Dollar', balance: '$120.40', flag: 'sg' }
    ];

    // Generate the list with flag images and display account details
    const globalAccountsList = document.getElementById('globalAccountsList');
    accounts.forEach(account => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="flagDiv" style="background-image: url('https://flagcdn.com/${account.flag}.svg');"></div>
            <div class="account-info">
                <div class="account-details">
                    <span class="account-code">${account.code}</span>
                    <span class="account-name">${account.name}</span>
                </div>
                <span class="account-balance">${account.balance}</span>
            </div>
        `;
        globalAccountsList.appendChild(li);
    });
});
