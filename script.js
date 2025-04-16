document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // Tutup semua bagian lainnya
    document.querySelectorAll('.content-section').forEach(section => {
      if (section !== targetContent) {
        section.classList.add('hidden'); // Sembunyikan bagian lainnya
        section.querySelector('.modern-box')?.classList.remove('active'); // Hapus animasi teks
      }
    });

    // Toggle bagian yang dipilih
    targetContent.classList.toggle('hidden');

    // Tambahkan animasi teks jika bagian terlihat
    if (!targetContent.classList.contains('hidden')) {
      const textBox = targetContent.querySelector('.modern-box');
      setTimeout(() => {
        textBox?.classList.add('active'); // Tambahkan kelas active setelah 100ms
      }, 100);
    }
  });
});
