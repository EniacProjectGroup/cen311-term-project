"use strict";
// This script loads the header and footer HTML files into the body of the document.
// It uses jQuery to prepend the header and append the footer to the body.
// The header and footer are loaded from "layout/header.html" and "layout/footer.html" respectively.
// The script waits for the document to be ready before executing the loading of the header and footer.

$(document).ready(function () {
  $("body").prepend(`<div id="header"></div>`);
  $("#header").load("layout/header.html");
  $("body").append(`<div id="footer"></div>`);
  $("#footer").load("layout/footer.html");
});
