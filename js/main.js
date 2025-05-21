// عند النقر على أي مكان في صفحة الهبوط:
document.getElementById('landing').addEventListener('click', function() {
  // أخفِ landing
  this.style.display = 'none';
  // أظهر main content
  document.getElementById('main-content').style.display = 'block';
});
