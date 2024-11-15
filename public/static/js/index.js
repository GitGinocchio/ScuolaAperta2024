function showDate() {
    var d = new Date();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; // i mesi sono basati su zero
    var curr_year = d.getFullYear();
    // Forma l'orario in formato stringa
    var timeString = curr_hour + ":" + (curr_min < 10 ? '0' + curr_min : curr_min) + "&nbsp;&nbsp;&nbsp;&nbsp;" + curr_date + "-" + curr_month + "-" + curr_year;
    // Aggiorna l'elemento HTML con l'ora corrente
    dateTimeDisplay.innerHTML = timeString;
};

document.addEventListener("DOMContentLoaded", (event) => {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay")
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalDescription = document.getElementById('modal-description');
    
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

    // Close modal with the close button
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Aggiorna l'ora ogni secondo
    setInterval(showDate, 1000);

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) { modal.style.display = "none"; }
    };
});

