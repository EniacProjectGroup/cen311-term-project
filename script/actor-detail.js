const actors = {
  edoneill: {
    title: "Ed O'Neill",
    about: `
      <img src="images/actors/ed-oneill.jpg" alt="Ed O'Neill" style="width:200px;">
      <p>Ed O'Neill is an American actor known for Modern Family and Married with Children.</p>
      <p><strong>Born:</strong> April 12, 1946</p>
    `,
    gallery: [
      { src: "images/projects/ed-actors1.jpg", title: "Gallery 1" },
      { src: "images/projects/ed-actors2.jpg", title: "Gallery 2" },
      { src: "images/projects/ed-actors3.jpg", title: "Gallery 3" }
    ],
    projects: [
      { src: "images/projects/fallout.jpg", name: "The Fallout" },
      { src: "images/projects/modern-family.jpg", name: "Modern Family" }
    ]
  },
  leylaferay: {
    title: "Leyla Feray",
    about: `
      <img src="images/actors/leyla-feray.jpg" alt="Leyla Feray" style="width:200px;">
      <p>Leyla Feray is a Turkish actress known for historical dramas like "Uyanış: Büyük Selçuklu".</p>
      <p><strong>Born:</strong> May 8, 1993</p>
    `,
    gallery: [
      { src: "images/actors/leyla1.jpg", title: "Gallery 1" },
      { src: "images/actors/leyla2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/bepanthol.jpg", name: "Bepanthol Commercial" },
      { src: "images/projects/uyanis.jpg", name: "Uyanış: Büyük Selçuklu" }
    ]
  },
  tomhanks: {
    title: "Tom Hanks",
    about: `
      <img src="images/actors/tom-hanks.jpg" alt="Tom Hanks" style="width:200px;">
      <p>Tom Hanks is an American actor known for Forrest Gump and Cast Away.</p>
      <p><strong>Born:</strong> July 9, 1956</p>
    `,
    gallery: [
      { src: "images/actors/tom1.jpg", title: "Gallery 1" },
      { src: "images/actors/tom2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/greenmile.jpg", name: "The Green Mile" }
    ]
  },
  juliebowen: {
    title: "Julia Bowen",
    about: `
      <img src="images/actors/julie-bowen.jpg" alt="Julia Bowen" style="width:200px;">
      <p>Julia Bowen is best known for her role in Modern Family.</p>
      <p><strong>Born:</strong> March 3, 1970</p>
    `,
    gallery: [
      { src: "images/actors/julia1.jpg", title: "Gallery 1" },
      { src: "images/actors/julia2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/modern-family.jpg", name: "Modern Family" }
    ]
  },
  tyburrell: {
    title: "Ty Burrell",
    about: `
      <img src="images/actors/ty-burrell.jpg" alt="Ty Burrell" style="width:200px;">
      <p>Ty Burrell is famous for playing Phil Dunphy in Modern Family.</p>
      <p><strong>Born:</strong> August 22, 1967</p>
    `,
    gallery: [
      { src: "images/actors/ty1.jpg", title: "Gallery 1" },
      { src: "images/actors/ty2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/modern-family.jpg", name: "Modern Family" }
    ]
  },
  jessetylerferguson: {
    title: "Jesse Tyler Ferguson",
    about: `
      <img src="images/actors/jesse-tyler-ferguson.jpg" alt="Jesse Tyler Ferguson" style="width:200px;">
      <p>Jesse Tyler Ferguson played Mitchell in Modern Family.</p>
      <p><strong>Born:</strong> October 22, 1975</p>
    `,
    gallery: [
      { src: "images/actors/jesse1.jpg", title: "Gallery 1" },
      { src: "images/actors/jesse2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/modern-family.jpg", name: "Modern Family" }
    ]
  },
  emiliaclarke: {
    title: "Emilia Clarke",
    about: `
      <img src="images/actors/emilia-clarke.jpg" alt="Emilia Clarke" style="width:200px;">
      <p>Emilia Clarke is a British actress best known for Game of Thrones.</p>
      <p><strong>Born:</strong> October 23, 1986</p>
    `,
    gallery: [
      { src: "images/actors/emilia1.jpg", title: "Gallery 1" },
      { src: "images/actors/emilia2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/got.jpg", name: "Game of Thrones" }
    ]
  },
  sofiavergara: {
    title: "Sofia Vergara",
    about: `
      <img src="images/actors/sofia-vergara.jpg" alt="Sofia Vergara" style="width:200px;">
      <p>Sofia Vergara is a Colombian-American actress known for Modern Family.</p>
      <p><strong>Born:</strong> July 10, 1972</p>
    `,
    gallery: [
      { src: "images/actors/sofia1.jpg", title: "Gallery 1" },
      { src: "images/actors/sofia2.jpg", title: "Gallery 2" }
    ],
    projects: [
      { src: "images/projects/modern-family.jpg", name: "Modern Family" }
    ]
  }
};

function getActorId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('actor');
}

function loadActor() {
  const actorId = getActorId();
  const actor = actors[actorId];

  if (!actor) {
    document.querySelector(".project-detail").innerHTML = "<h2>Actor not found!</h2>";
    return;
  }

  document.getElementById("actor-title").innerText = actor.title;
  document.getElementById("about").innerHTML = actor.about;

  document.getElementById("gallery").innerHTML = actor.gallery.map(img => `
    <a href="${img.src}" data-lightbox="actor-gallery" data-title="${img.title}">
      <img src="${img.src}" alt="${img.title}">
    </a>
  `).join('');

  document.getElementById("projects").innerHTML = `
    <ul>
      ${actor.projects.map(project => `<li>${project}</li>`).join('')}
    </ul>
  `;

  $("#tabs").tabs();
}

$(document).ready(function() {
  loadActor();
});



