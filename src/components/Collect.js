// Collect.js

const handleCollect = () => {
    fetch('http://localhost:5000/sample')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

export default handleCollect;

