window.OCTO_BANTUAN = {
  app: 'Kolab',
  intro: 'Mulai dari memuat model IFC dan jadwal CSV di tab "Progres", cek hasilnya di model 3D, lalu lanjut ke review, clash, rencana mingguan, dan inspeksi lapangan.',
  langkah: [
    ['Masuk', 'Saat dibuka, aplikasi meminta masuk dengan akun Gmail. Setelah itu muncul layar Kolab: pilih "Masuk dengan Google", "Masuk dengan Microsoft", "Pakai folder tersinkron di komputer", atau "Buka file tanpa proyek" bila hanya ingin mencoba sendiri.'],
    ['Coba dulu dengan contoh', 'Klik "Coba mode demo (semua peran)" di layar masuk, atau "Coba dengan gedung contoh 4 lantai" di area model. Data contoh tidak tersimpan permanen.'],
    ['Muat model IFC', 'Di tab "Progres", bagian "Model IFC", klik "Pilih folder proyek" (semua .ifc di dalamnya digabung) atau "Pilih file IFC". File juga bisa diseret ke area model.'],
    ['Muat jadwal CSV', 'Klik "Pilih file CSV" di bagian "Jadwal MS Project (CSV)". Unduh "Template CSV" bila belum punya contoh format. File XML dari MS Project bisa diimpor lewat "Impor MS Project (.xml)".'],
    ['Cocokkan kolom', 'Atur "Kolom WBS", "Kolom status", "Kolom mulai", "Kolom selesai", dan "Format tanggal" bila tidak terbaca otomatis. Isi "Nilai yang dianggap finish" sesuai kolom status di jadwal Anda.'],
    ['Cek properti WBS', 'Di "Properti WBS di IFC", isi nama parameter model yang memuat kode WBS lalu klik "Terapkan". Elemen yang tidak cocok tercantum di "Laporan pencocokan".'],
    ['Lihat progres di model', 'Pakai tombol mode di atas: "Hanya finish", "Semua status", "Jadwal 4D" (ada slider tanggal dan tombol putar), atau "SPI" untuk mewarnai elemen menurut kinerja jadwal. Klik elemen untuk melihat detailnya.'],
    ['Review dan clash', 'Pakai alat "Komentar" untuk menandai temuan di model (tab "Review"), dan jalankan clash detection di tab "Clash" untuk mencari benturan antar model.'],
    ['Rencanakan dan periksa lapangan', 'Tab "Rencana" menyusun rencana mingguan dari jadwal, dan tab "Inspeksi" mencatat temuan lapangan lengkap dengan foto dan lokasi.'],
    ['Simpan dan bagikan', 'Komentar, markup, dan hasil clash tersimpan otomatis di browser ini. Klik "Simpan file review" untuk berbagi, atau pakai proyek bersama agar tersimpan di folder tim. Hasil bisa diekspor lewat "Ekspor BCF" dan "Ekspor CSV".']
  ],
  panduan: [
    ['Tampilan dan alat model', [
      ['"Hanya finish" / "Semua status"', 'Mode warna: hanya elemen yang sudah selesai ditampilkan, atau semua elemen dengan warna status masing-masing.'],
      ['"Jadwal 4D"', 'Menampilkan model menurut tanggal. Pakai tombol putar, pilihan kecepatan (1 hari, 1 minggu, 1 bulan per langkah), slider tanggal, dan "Tanggal status". Centang "Tampilkan elemen yang belum mulai (transparan)" bila perlu.'],
      ['"SPI"', 'Mewarnai elemen menurut Schedule Performance Index. Klik elemen untuk melihat SPI, PV, dan EV di panel detail.'],
      ['"Pilih"', 'Klik elemen untuk melihat detail dan data baris jadwalnya. Putar dengan seret, geser dengan klik kanan, zoom dengan gulir.'],
      ['"Komentar"', 'Klik titik di model untuk menaruh komentar. Tombol nonaktif bila peran Anda tidak boleh berkomentar.'],
      ['"Ukur"', 'Klik titik awal lalu titik akhir; titik sudut menempel otomatis.'],
      ['"Sketsa"', 'Seret untuk menggambar di permukaan model. "Undo" membatalkan markup terakhir, "Hapus markup" membuang markup yang belum dilampirkan.'],
      ['"Paskan"', 'Menyesuaikan tampilan agar seluruh model terlihat.']
    ]],
    ['Tab "Progres"', [
      ['"Pilih folder proyek" / "Pilih file IFC"', 'Memuat model. Folder Google Drive atau OneDrive yang tersinkron di komputer bisa dipilih langsung; file .csv jadwal dan .bpvreview.json di folder yang sama ikut dimuat.'],
      ['"Kunci penghubung ke model"', 'Pilih "Kode WBS" atau "ID aktivitas" sebagai penghubung baris jadwal dengan elemen model.'],
      ['Centang inherit', 'Bila dicentang, elemen ikut status dan tanggal WBS induknya (mis. 1.2 finish, maka 1.2.x ikut).'],
      ['"Kinerja jadwal (EVM)"', 'Isi "Baseline mulai", "Baseline selesai", "Kolom bobot", "Kolom % selesai", dan "Hari kerja untuk rencana (PV)" agar SPI bisa dihitung.'],
      ['"Kinerja jadwal (SPI)"', 'Atur "Tanggal status" untuk melihat KPI, kurva S rencana lawan aktual, dan tabel per WBS. Klik baris tabel untuk memfokuskan elemennya.'],
      ['"Ringkasan" dan "Laporan pencocokan"', 'Ringkasan persentase progres, serta daftar WBS yang tidak cocok antara model dan jadwal.'],
      ['"Simpan setelan ini untuk semua anggota"', 'Muncul pada proyek bersama bagi peran yang berhak; menyimpan setelan kolom untuk seluruh tim.']
    ]],
    ['Tab "Review"', [
      ['"+ Komentar"', 'Membuat komentar baru: isi "Judul", "Deskripsi", "Prioritas", "Tenggat", dan "Ditugaskan ke". Markup ukur atau sketsa di layar bisa dilampirkan.'],
      ['Status komentar', 'Setiap komentar berstatus "Open", "In progress", atau "Closed". Menutup komentar hanya bisa oleh peran yang diizinkan.'],
      ['Saring daftar', 'Tombol "Semua" / "Open" / "In progress" / "Closed", centang "Hanya untuk model yang sedang dimuat", dan "Hanya yang ditugaskan ke saya" (pada proyek bersama).'],
      ['"Ekspor BCF" / "Impor BCF" / "Ekspor CSV"', 'Tukar isu dengan aplikasi BIM lain lewat BCF, atau ekspor daftar ke CSV.'],
      ['"Simpan file review" / "Buka file review"', 'Menyimpan atau membuka file .bpvreview.json agar tim melihat review yang sama.']
    ]],
    ['Tab "Clash"', [
      ['"Set A" dan "Set B"', 'Pilih model yang dibandingkan. Centang "Cek juga benturan di dalam model yang sama" untuk benturan internal.'],
      ['"Toleransi (mm)"', 'Tembusan lebih kecil dari nilai ini diabaikan (bawaan 10).'],
      ['"Jalankan clash detection"', 'Mencari hard clash. Bukaan, ruang (IfcSpace), dan elemen yang hanya bersentuhan tidak dihitung. Menjalankan ulang mempertahankan ID dan status; clash yang hilang otomatis menjadi "Selesai".'],
      ['"Jadikan issue (clash Baru/Aktif)"', 'Mengubah clash yang masih baru atau aktif menjadi komentar di tab "Review".'],
      ['"Ekspor CSV clash"', 'Mengekspor daftar clash ke file CSV.']
    ]],
    ['Tab "Rencana" (Last Planner)', [
      ['Syarat', 'Butuh jadwal CSV dengan kolom tanggal mulai dan selesai yang sudah dimuat di tab "Progres".'],
      ['"Rencana mingguan"', 'Pindah minggu dengan tombol panah, lihat "PPC minggu ini" dan tren per minggu. "Ikut tanggal status" mengembalikan ke minggu tanggal status.'],
      ['"Lookahead 6 minggu"', 'Daftar pekerjaan 6 minggu ke depan. Klik "Komit minggu ini" untuk memasukkan ke rencana minggu terpilih; pekerjaan hanya boleh dikomit bila semua kendalanya selesai.'],
      ['Hasil komitmen', 'Tandai tiap komitmen "Selesai" atau "Tidak selesai"; bila tidak selesai, pilih alasannya. Isi kolom "Pelaksana / subkon" bila perlu.'],
      ['"Daftar kendala"', 'Catat hambatan lewat "+ Tambah kendala" atau "+ Kendala" di tiap pekerjaan, lalu "Simpan kendala". Tandai dengan "Tandai selesai" bila sudah teratasi.'],
      ['"Ekspor CSV"', 'Data Last Planner tersimpan di browser ini per proyek dan belum disinkronkan ke Drive tim; ekspor CSV untuk arsip atau rapat mingguan.']
    ]],
    ['Tab "Inspeksi"', [
      ['"+ Inspeksi baru"', 'Isi "Judul temuan", "Kategori", "Prioritas", "Lokasi / lantai / area", dan "Uraian". Centang "Perlu respon" untuk meminta tanggapan, lalu isi "Ditujukan ke" dan "Tenggat respon".'],
      ['Foto', '"Ambil foto" memakai kamera, "Pilih dari galeri" memakai foto yang ada. Beri keterangan tiap foto.'],
      ['Lokasi', '"Ambil GPS" mencatat koordinat; "Pilih titik di model" menandai titik secara manual. Titik inspeksi bisa ditampilkan di model lewat centang "Tampilkan titik inspeksi di model".'],
      ['"Tambah titik kalibrasi"', 'Di "Georeferensi (GPS ke model)": berdiri di titik yang mudah dikenali, klik titik itu di model, lalu ambil GPS. Titik kedua yang berjauhan menentukan arah utara.'],
      ['Detail inspeksi', 'Tulis tanggapan, "Kirim komentar" atau "Kirim sebagai respon", "Tandai selesai", "Buka lagi", dan "Ubah".'],
      ['"Buat laporan (sesuai filter)"', 'Membuka laporan siap cetak atau simpan PDF dari tombol "Cetak / Simpan PDF". Tersedia juga "Ekspor CSV", "Simpan file", dan "Buka file".']
    ]],
    ['Jadwal (Gantt)', [
      ['Tombol "Jadwal (Gantt)"', 'Di bilah atas; membuka penjadwal sederhana ala MS Project yang tersinkron dengan model.'],
      ['"+ Tugas" dan "+ Sub-tugas"', 'Menambah tugas. Tombol panah mengatur tingkat dan urutan; "Hapus" membuang tugas. Kolom: Nama tugas, WBS, Durasi, Mulai, Selesai, Pendahulu, %, Elemen.'],
      ['"Tautkan elemen"', 'Pilih tugas, aktifkan tombol ini, lalu klik elemen di model untuk menautkan atau melepas. Ada juga "+ Elemen terpilih" dan "Lepas tautan".'],
      ['"Buat dari model" dan "Dari CSV dimuat"', 'Membuat jadwal otomatis dari model (per lantai dan jenis elemen), atau mengubah CSV yang sedang dimuat menjadi jadwal yang bisa diedit.'],
      ['"Set baseline"', 'Menyimpan tanggal sekarang sebagai baseline.'],
      ['"Mulai proyek", "Hari kerja", "Skala"', 'Pengaturan tanggal mulai, kalender kerja, dan skala bagan (Hari, Minggu, Bulan, Kuartal).'],
      ['"Sinkron otomatis" dan "Terapkan"', 'Menerapkan jadwal ke status, Jadwal 4D, dan SPI model, otomatis atau sekali jalan.'],
      ['"CSV", "Simpan file", "Buka file"', 'Ekspor CSV format MS Project, serta simpan atau buka file jadwal. "Simpan ke Drive" dan "Buka dari Drive" memakai Google Drive Anda sendiri.']
    ]],
    ['Tim dan akun', [
      ['Chip akun di pojok kanan atas', 'Klik untuk membuka menu: "Ganti proyek", "Konsol Super Admin" (khusus Super Admin), "Ganti pengguna demo" (mode demo), dan "Keluar".'],
      ['Peran', 'Peran bawaan: Super Admin, Koordinator BIM, Project Manager, Supervisor, Site Engineer, Reviewer, dan Viewer. Peran menentukan siapa boleh berkomentar, menutup issue, dan mengelola tim.'],
      ['Tab "Tim"', 'Muncul pada proyek bersama bila peran Anda berhak. Berisi "Tim proyek", "Undang anggota", "Peran & izin", "Tempat sampah issue", dan "Aktivitas proyek".'],
      ['Penyimpanan proyek bersama', 'Proyek disimpan di Google Drive, OneDrive, atau folder tersinkron milik tim; akses diatur per email.']
    ]]
  ],
  pintasan: [
    ['V', 'Alat "Pilih"'],
    ['K', 'Alat "Komentar"'],
    ['U', 'Alat "Ukur"'],
    ['S', 'Alat "Sketsa"'],
    ['F', 'Paskan tampilan ("Paskan")'],
    ['Ctrl+Z', 'Batalkan markup terakhir'],
    ['Esc', 'Batalkan sketsa, ukuran, atau komentar yang sedang dibuat; kembali ke alat "Pilih"; tutup detail elemen'],
    ['Panah kiri / kanan', 'Pindah antar tab (saat fokus ada di tombol tab)'],
    ['Insert', 'Tambah tugas di panel Gantt (saat fokus di tabel Gantt)'],
    ['Alt+Panah kiri / kanan', 'Naikkan atau turunkan tingkat tugas di panel Gantt']
  ],
  bagian: ['Umum', 'Progres dan SPI', 'Model 3D dan alat', 'Review dan BCF', 'Clash', 'Rencana dan Inspeksi', 'Jadwal Gantt', 'Tim dan akun']
};
