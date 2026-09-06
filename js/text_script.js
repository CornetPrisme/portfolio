fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle your data here
        document.getElementById('AboutMe').textContent = data.AboutMe;
    })
    .catch(error => {
        console.error('Fetch error:', error);
        document.getElementById('nom').textContent = "Failed to load data";
        document.getElementById('description').textContent = "Please ensure you are running a local server (such as Live Server) to properly fetch the JSON file.";
    });