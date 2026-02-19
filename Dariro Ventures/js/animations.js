/* ═══════════════════════════════════════════════
   js/animations.js
   Scroll-reveal using IntersectionObserver.
   Elements with class="reveal" fade up when
   they enter the viewport.
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after reveal so it doesn't reset
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,         // trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px'  // slightly earlier than default
    }
  );

  revealEls.forEach(el => observer.observe(el));
});
