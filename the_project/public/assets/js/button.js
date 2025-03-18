document.addEventListener("DOMContentLoaded", function() {
    const tilbageKnap = document.getElementById("tilbageKnap");
    const week1Knap = document.getElementById("week1Knap");
    const week2Knap = document.getElementById("week2Knap");
    const week3Knap = document.getElementById("week3Knap");
    const week4Knap = document.getElementById("week4Knap");
    const week5Knap = document.getElementById("week5Knap");
    const week6Knap = document.getElementById("week6Knap");
  
    if (tilbageKnap) {
      tilbageKnap.addEventListener("click", function() {
        window.location.href = "/";
      });
    }
  
    if (week1Knap) {
      week1Knap.addEventListener("click", function() {
        window.location.href = "/weeks/1";
      });
    }
    if (week2Knap) {
        week2Knap.addEventListener("click", function() {
          window.location.href = "/weeks/2";
        });
      }
    if  (week3Knap) {
        week3Knap.addEventListener("click", function() {
            window.location.href = "/weeks/3";
          });
    }
    if  (week4Knap) {
        week4Knap.addEventListener("click", function() {
            window.location.href = "/weeks/4";
          });
    }
    if  (week5Knap) {
        week5Knap.addEventListener("click", function() {
            window.location.href = "/weeks/5";
          });
    }
    if  (week6Knap) {
        week6Knap.addEventListener("click", function() {
            window.location.href = "/weeks/6";
          });
    }
  });