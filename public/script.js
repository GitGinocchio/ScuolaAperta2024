// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalDescription = document.getElementById('modal-description');

// Click event for projects
document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', event => {
        const projectId = item.getAttribute('id'); // Ottieni l'id del progetto
        const projectElement = document.getElementById(projectId); // Ottieni l'elemento del progetto

        // Scorri verso il progetto
        projectElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Opzionale: se desideri mostrare il modal per il progetto cliccato
         modalImg.src = projectElement.getAttribute('data-image');
         modalCaption.textContent = projectElement.getAttribute('data-title');
         modalDescription.textContent = projectElement.getAttribute('data-description');
         modal.style.display = 'block';
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Close modal with the close button
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

