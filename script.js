document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // Tutup semua konten lainnya
    document.querySelectorAll('.content-section').forEach(section => {
      if (section !== targetContent) {
        section.classList.add('hidden');
      }
    });

    // Tampilkan atau sembunyikan konten target
    targetContent.classList.toggle('hidden');
  });
});