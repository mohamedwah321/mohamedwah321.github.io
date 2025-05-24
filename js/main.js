document.addEventListener("DOMContentLoaded", function() {
  const landing = document.getElementById("landing");
  const mainContent = document.getElementById("main-content");
  const infographic = document.getElementById("exp-infographic");

  // 1. إخفاء landing وأظهار المحتوى الرئيسي
  if (landing && mainContent) {
    landing.addEventListener("click", function() {
      landing.style.display = "none";
      mainContent.style.display = "block";
    });
  }

  // 2. ربط روابط التنقل
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      
      // إذا الرابط يؤشر إلى صفحة خارجية (cv.html) فاتركه
      if (!href.startsWith("#")) return;

      e.preventDefault();

      // أخفِ الهيرو وجميع الأقسام والإنفوجراف
      document.querySelector(".hero").style.display = "none";
      document.querySelectorAll(".content-section").forEach(sec => sec.style.display = "none");
      infographic.style.display = "none";

      // إذا نقرة الخبرة
      if (this.id === "link-experience") {
        infographic.style.display = "block";
      } else {
        // أقسام أخرى بالاعتماد على المعرف (#projects, #courses…)
        const targetId = href.slice(1);
        const section = document.getElementById(targetId);
        if (section) section.style.display = "block";
      }
    });
  });
});
