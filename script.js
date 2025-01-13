// Search Tool Functionality
document.getElementById('search-tool').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const contractAddress = document.getElementById('contract-address').value.trim();
    const resultContainer = document.getElementById('result-message');

    if (contractAddress === '') {
        resultContainer.innerHTML = '<strong>Please enter a contract address.</strong>';
        return;
    }

    // Display the result message dynamically on the page
    resultContainer.innerHTML = `<strong>${contractAddress} IS SUS! Be Careful...</strong>`;
};
