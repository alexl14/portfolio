// Scroll reveal
function revealOnScroll() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Cursor glow
var glow = document.getElementById('glowCursor');
document.addEventListener('mousemove', function(e) {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Active nav link
var navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', function() {
  document.querySelectorAll('section[id]').forEach(function(section) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= 200 && rect.bottom >= 200) {
      navLinks.forEach(function(link) {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + section.id) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
});
