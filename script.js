// Search Tool Functionality
document.getElementById('search-tool').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const contractAddress = document.getElementById('contract-address').value.trim();
    const resultContainer = document.getElementById('result-message');

    if (!contractAddress) {
        resultContainer.innerHTML = '<strong>Please enter a contract address.</strong>';
        return;
    }

    // Step 1: Display "Thinking..." immediately
    resultContainer.innerHTML = '<strong>Thinking...</strong>';

    // Step 2: Force browser to render "Thinking..." before continuing
    setTimeout(() => {
        resultContainer.innerHTML = `<strong>${contractAddress} IS SUS! Be Careful...</strong>`;
    }, 3000); // 3-second delay
});
