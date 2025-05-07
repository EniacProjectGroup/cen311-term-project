$(function() {
  function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('project');
  }

  function loadProject() {
    const projectId = getProjectId();

    fetch('data/project-data.json') 
      .then(response => response.json()) 
      .then(projects => { 
        const project = projects.find(p => p.id === projectId); //we find right project according to id

        if (!project) {
          $(".project-detail").html("<h2>Project  Not Found!</h2>");
          return;
        }

        // upload title
        $("#project-title").text(project.title);

        // upload about tab
        $("#about").html(project.about);

        // upload gallery tab
        $("#gallery").html(project.gallery.map(img => `
          <a href="${img.src}" data-lightbox="project-gallery" data-title="${img.title}">
            <img src="${img.src}" alt="${img.title}">
          </a>
        `).join(''));

        // upload actors tab
        $("#actors").html(project.actors.map(actor => `
          <div class="actor-card">
            <img src="${actor.src}" alt="${actor.name}">
            <p>${actor.name}</p>
          </div>
        `).join(''));

        // runs tab
        $("#tabs").tabs();
      })
      .catch(error => {
        console.error('ERROR LOADING JSON:', error);
        $(".project-detail").html("<p>ERROR LOADING DATA. PLEASE TRY AGAIN.</p>");
      });
  }

  loadProject();
});