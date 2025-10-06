document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los videos de fondo
  const videos = document.querySelectorAll(".bg-video");

  videos.forEach(video => {
    const parentSection = video.closest("section");

    // Al pasar el mouse: reproduce
    parentSection.addEventListener("mouseenter", () => {
      video.play();
    });

    // Al salir: pausa y reinicia al inicio
    parentSection.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // vuelve al inicio
    });
  });
});

/* Hamburguesa */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle')
  const navLinks = document.querySelectorAll('.nav a')

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (toggle.checked) toggle.checked = false
    })
  })

  document.addEventListener('click', e => {
    const header = document.querySelector('.container-header')
    const isClickInside = header.contains(e.target)
    if (!isClickInside && toggle.checked) toggle.checked = false
  })
})
