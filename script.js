// Search Tool Functionality
document.getElementById('search-tool').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const contractAddress = document.getElementById('contract-address').value.trim();
    if (contractAddress === '') {
        alert('Please enter a contract address.');
        return false;
    }
    // Display the desired message
    alert(`${contractAddress} IS SUS! Be Careful...`);
    return false;
};
