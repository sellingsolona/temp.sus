// Search Tool Functionality
document.getElementById('search-tool').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const contractAddress = document.getElementById('contract-address').value.trim();
    const resultContainer = document.getElementById('result-message');

    if (!contractAddress) {
        resultContainer.innerHTML = '<strong>Please enter a contract address.</strong>';
        return;
    }

    // Clear previous messages and display "Thinking..."
    resultContainer.innerHTML = '<strong>Thinking...</strong>';

    // Use setTimeout to delay the final message by 3 seconds
    setTimeout(() => {
        resultContainer.innerHTML = `<strong>${contractAddress} IS SUS! Be Careful...</strong>`;
    }, 3000); // 3-second delay
});
