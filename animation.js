function equalizeHeroLines() {
  const heroTitle = document.querySelector('.hero-title');
  const line1 = document.getElementById('heroLine1');
  const line2 = document.getElementById('heroLine2');
  if (!line1 || !line2) return;

  line1.style.letterSpacing = '';
  line2.style.letterSpacing = '';

  if (window.innerWidth <= 768) {
    const containerWidth = heroTitle.offsetWidth;
    [line1, line2].forEach(line => {
      const chars = line.textContent.length - 1;
      if (chars > 0) {
        const lineWidth = line.offsetWidth;
        line.style.letterSpacing = (containerWidth - lineWidth) / chars + 'px';
      }
    });
  } else {
    const w1 = line1.offsetWidth;
    const w2 = line2.offsetWidth;
    if (w1 > w2) {
      const extra = w1 - w2;
      const chars = line2.textContent.length - 1;
      line2.style.letterSpacing = (extra / chars) + 'px';
    }
  }
}

window.addEventListener('load', equalizeHeroLines);
window.addEventListener('resize', equalizeHeroLines);

