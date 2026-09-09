fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle your data here
        document.getElementById('AboutMe').textContent = data.profil.AboutMe;
        document.getElementById('navbar-resume').href = data.profil.resume;

        // Github
        document.getElementById('img-github').alt = data.reseaux.github.imgAlt;
        document.getElementById('link-github-text').href = data.reseaux.github.url;
        document.getElementById('link-github-icon').href = data.reseaux.github.url;
        document.getElementById('link-github-text').textContent = data.reseaux.github.text;

        // Linkedin
        document.getElementById('img-linkedin').alt = data.reseaux.linkedin.imgAlt;
        document.getElementById('link-linkedin-text').href = data.reseaux.linkedin.url;
        document.getElementById('link-linkedin-icon').href = data.reseaux.linkedin.url;
        document.getElementById('link-linkedin-text').textContent = data.reseaux.linkedin.text;

        // email
        document.getElementById('img-email').alt = data.reseaux.email.imgAlt;
        document.getElementById('link-email-text').href = data.reseaux.email.url;
        document.getElementById('link-email-icon').href = data.reseaux.email.url;
        document.getElementById('link-email-text').textContent = data.reseaux.email.text;

        // projects
        const projectsSection = document.querySelector('.projects'); 
        projectsSection.innerHTML = ''; 

        data.projets.forEach(projet => {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add('project-item');

            const imgElement = document.createElement('img');
            imgElement.src = projet.imageSrc;
            imgElement.alt = projet.imageAlt;
            imgElement.classList.add('project-image');

            const hasLink = projet.lien && projet.lien.trim() !== "";

            if (hasLink) {
                const linkElement = document.createElement('a');
                linkElement.href = projet.lien;
                linkElement.target = "_blank";
                linkElement.appendChild(imgElement);
                projectContainer.appendChild(linkElement);
            } else {
                projectContainer.appendChild(imgElement);
            }

            if (projet.titre) {
                const titleElement = document.createElement('h3');
                
                if (hasLink) {
                    const titleLink = document.createElement('a');
                    titleLink.href = projet.lien;
                    titleLink.target = "_blank";
                    titleLink.textContent = projet.titre;
                    titleLink.classList.add('project-title-link');
                    titleElement.appendChild(titleLink);
                } else {
                    titleElement.textContent = projet.titre;
                }
                
                projectContainer.appendChild(titleElement);
            }

            const textElement = document.createElement('p');
            textElement.textContent = projet.description;
            projectContainer.appendChild(textElement);

            projectsSection.appendChild(projectContainer);
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
        document.getElementById('nom').textContent = "Failed to load data";
        document.getElementById('description').textContent = "Please ensure you are running a local server (such as Live Server) to properly fetch the JSON file.";
    });