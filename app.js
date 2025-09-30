"use strict";
$(document).ready(function () {

});

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add .btn");
  const payment = document.getElementById("card");
  const closeBtn = document.querySelector(".close-btn");

  addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      payment.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    payment.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === payment) {
      payment.style.display = "none";
    }
  });
});
