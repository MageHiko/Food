"use strict";
$(document).ready(function () {

});

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add .btn");
  const popup = document.getElementById("card");
  const closeBtn = document.querySelector(".close-btn");

  addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
