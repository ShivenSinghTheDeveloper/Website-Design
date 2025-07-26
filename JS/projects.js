let projectsData = {};

function renderProjects(language) {
  const container = document.getElementById('projectsContainer');
  container.innerHTML = ''; // Clear old projects

  if (!projectsData[language]) return;

  projectsData[language].forEach(project => {
    const row = document.createElement('div');
    row.className = 'row prjtsection';
    row.onclick = () => window.open(project.link, '_blank');

    row.innerHTML = `
      <div class="col-2 d-flex justify-content-center align-items-center">
        <img src="${project.image}" alt="${project.alt}" class="prjtImg">
      </div>
      <div class="col-10">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      </div>
    `;
    container.appendChild(row);
  });
}

// Fetch projects.json when the page loads
fetch('JSON/projects.json')
  .then(response => response.json())
  .then(data => {
    projectsData = data;

    // Initial render (default to 'cpp')
    renderProjects('cpp');
  });

// Set up language button click handlers
document.querySelectorAll('.languageButton').forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    renderProjects(lang);
  });
});
