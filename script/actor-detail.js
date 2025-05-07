$(document).ready(function () {
  function getActorId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('actor');
  }

  function fetchWikipediaInfo(actorName, callback) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(actorName)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let wikiSummary = data.extract || "";
        let wikiUrl = data.content_urls?.desktop?.page || "#";
        callback(wikiSummary, wikiUrl);
      })
      .catch(error => {
        console.error("Wikipedia request failed:", error);
        callback("Wikipedia data could not be received.", "#");
      });
  }

  function renderBiography(actorData, wikiSummary, wikiUrl) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = actorData.about;

    const img = tempDiv.querySelector("img");
    const firstParagraph = tempDiv.querySelector("p");
    const shortText = firstParagraph ? firstParagraph.textContent : "";

    const bioHtml = `
      <div class="biography-box">
        ${img ? img.outerHTML : ""} 
        <div id="bio-text">
          <p>${shortText}</p>
          <p>${wikiSummary}</p>
        </div>
        <a href="${wikiUrl}" target="_blank">
          <button id="toggle-bio">more information</button>
        </a>
      </div>
    `;

    $("#about").html(bioHtml);
  }

  function loadActor() {
    const actorId = getActorId();

    fetch('data/actor-data.json')
      .then(response => response.json())
      .then(actors => {
        const actor = actors.find(a => a.id === actorId);

        if (!actor) {
          $(".project-detail").html("<h2>actor  can not found!</h2>");
          return;
        }

        $("#actor-title").text(actor.title);

        // Wikipedia take data and shows
        fetchWikipediaInfo(actor.title, function (wikiSummary, wikiUrl) {
          renderBiography(actor, wikiSummary, wikiUrl);
        });

        // show gallery
        $("#gallery").html(actor.gallery.map(img => `
          <a href="${img.src}" data-lightbox="actor-gallery" data-title="${img.title}">
            <img src="${img.src}" alt="${img.title}">
          </a>
        `).join(''));

        //list project
        $("#projects").html(`
          <ul>
            ${actor.projects.map(project => `<li>${project.name}</li>`).join('')}
          </ul>
        `);

        // jQuery UI tabs
        $("#tabs").tabs();
      })
      .catch(error => {
        console.error('JSON data could not upload:', error);
        $(".project-detail").html("<p>failed to load data.Please try again.</p>");
      });
  }

  loadActor();
});
