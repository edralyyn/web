// Collect.js

export const handleCollect = () => {
    return fetch('http://localhost:5000/sample')
        .then(response => response.json())
        .then(data => data.output)
        .catch(error => console.error('Error:', error));
};

export default handleCollect;