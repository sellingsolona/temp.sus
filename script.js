// Search Tool Functionality
document.getElementById('search-tool').onsubmit = function () {
    const contractAddress = document.getElementById('contract-address').value.trim();
    if (contractAddress === '') {
        alert('Please enter a contract address.');
        return false;
    }
    alert(`Contract Address: ${contractAddress} is SUS! Be Careful...`);
    return false; // Prevent form submission
};
