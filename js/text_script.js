fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('nom').textContent = data.nom;
        document.getElementById('titre').textContent = data.titre;
        document.getElementById('description').textContent = data.description;
        
        const container = document.getElementById('liens-container');
        
        data.liens.forEach(lien => {

            const bouton = document.createElement('a');
            bouton.href = lien.url;
            bouton.textContent = lien.nom;
            bouton.className = 'bouton';
            
            bouton.style.backgroundColor = data.couleur_boutons; 
            
            container.appendChild(bouton);
        });
    })
    .catch(error => {
        console.error('Erreur :', error);
        document.getElementById('nom').textContent = "Erreur de chargement";
        document.getElementById('description').textContent = "Vérifiez que vous utilisez un serveur local (comme Live Server) pour lire le JSON.";
    });