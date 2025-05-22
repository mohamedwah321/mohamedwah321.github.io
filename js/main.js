document.addEventListener("DOMContentLoaded", function() {
  // 1. Landing → Main Content
  const landing = document.getElementById("landing");
  const mainContent = document.getElementById("main-content");
  if (landing && mainContent) {
    landing.addEventListener("click", function() {
      landing.style.display = "none";
      mainContent.style.display = "block";
    });
  }

  // 2. Toggle sections on index.html via nav links (href="#…")
  if (mainContent) {
    const links = document.querySelectorAll('nav ul li a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        // Hide hero + all sections
        document.querySelector(".hero").style.display = "none";
        document.querySelectorAll(".content-section").forEach(sec => {
          sec.style.display = "none";
        });
        // Show target section
        const targetId = this.getAttribute("href").slice(1);
        const section = document.getElementById(targetId);
        if (section) section.style.display = "block";
      });
    });
  }
});

