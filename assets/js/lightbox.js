(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var closeBtn = document.getElementById('lightboxClose');

  if (!lightbox) return;

  document.querySelectorAll('[data-full]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      lightboxImg.src = link.getAttribute('data-full');
      lightboxImg.alt = link.querySelector('img') ? link.querySelector('img').alt : '';
      lightboxCaption.textContent = link.getAttribute('data-caption') || '';
      lightbox.classList.add('open');
    });
  });

  function close() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
