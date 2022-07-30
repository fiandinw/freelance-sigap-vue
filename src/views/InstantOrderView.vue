<script setup>
  import swal from "sweetalert";
  import router from "../router";

  const handleSubmit = () => {
    swal("Order Sukses", "Sukses", "success").then(() => {
      router.push({ name: "orderdetail" });
    });
  };
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-5xl">
      Instant <span class="text-sigap-primary">Order</span>
    </div>
    <section class="container flex flex-col items-start py-16">
      <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-4">
        <div class="form-group">
          <label class="font-semibold text-lg" for="nama">Nama</label>
          <input
            class="w-full border-2 border-sigap-primary rounded-lg px-4 py-1"
            type="text"
            id="nama"
            placeholder="Masukan Nama Anda"
          />
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="email">Alamat EMail</label>
          <input
            class="w-full border-2 border-sigap-primary rounded-lg px-4 py-1"
            type="text"
            id="email"
            placeholder="Masukan Email Anda"
          />
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="telepon"
            >Nomor Telepon</label
          >
          <input
            class="w-full border-2 border-sigap-primary rounded-lg px-4 py-1"
            type="text"
            id="telepon"
            placeholder="Masukan Nomor Telepon Anda (+62)"
          />
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="jasa">Jenis Jasa</label>
          <select
            class="w-full bg-sigap-primary text-white rounded-lg px-4 py-1"
            name="jasa"
            id="jasa"
          >
            <option value="jasa1">jasa1</option>
            <option value="jasa2">jasa2</option>
            <option value="jasa3">jasa3</option>
          </select>
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="subjasa"
            >Sub Jenis Jasa</label
          >
          <select
            class="w-full bg-sigap-primary text-white rounded-lg px-4 py-1"
            name="subjasa"
            id="subjasa"
          >
            <option value="jasa1">jasa1</option>
            <option value="jasa2">jasa2</option>
            <option value="jasa3">jasa3</option>
          </select>
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="paket">Paket</label>
          <select
            class="w-full bg-sigap-primary text-white rounded-lg px-4 py-1"
            name="paket"
            id="paket"
          >
            <option value="jasa1">jasa1</option>
            <option value="jasa2">jasa2</option>
            <option value="jasa3">jasa3</option>
          </select>
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="level"
            >Kategori Freelance</label
          >
          <select
            class="w-full bg-sigap-primary text-white rounded-lg px-4 py-1"
            name="level"
            id="level"
          >
            <option value="jasa1">jasa1</option>
            <option value="jasa2">jasa2</option>
            <option value="jasa3">jasa3</option>
          </select>
        </div>
        <div class="form-group flex flex-row items-center gap-2">
          <input type="radio" name="speed" id="sigap" />
          <label for="sigap">sigap</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="speed" id="supersigap" />
          <label for="supersigap">supersigap</label>
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="estimasi"
            >Estimasi Pengerjaan</label
          >
          <select
            class="w-full bg-sigap-primary text-white rounded-lg px-4 py-1"
            name="estimasi"
            id="estimasi"
          >
            <option value="jasa1">jasa1</option>
            <option value="jasa2">jasa2</option>
            <option value="jasa3">jasa3</option>
          </select>
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="revisi">Batas Revisi</label>
          <select
            class="w-full bg-sigap-primary text-white rounded-lg px-4 py-1"
            name="revisi"
            id="revisi"
          >
            <option value="jasa1">jasa1</option>
            <option value="jasa2">jasa2</option>
            <option value="jasa3">jasa3</option>
          </select>
        </div>
        <div class="form-group">
          <label class="font-semibold text-lg" for="deskripsi"
            >Catatan Tambahan</label
          >
          <textarea
            class="w-full border-2 border-sigap-primary rounded-lg px-4 py-1"
            name="deskripsi"
            id="deskripsi"
            rows="5"
          ></textarea>
        </div>
        <div class="mt-8 font-semibold text-lg">
          Petunjuk, Syarat dan Ketentuan
        </div>
        <ol class="list-decimal pl-4">
          <li>
            Pastikan data yang Anda input pada form e-order sudah benar dan
            sesuai.
          </li>
          <li>
            Freelancer pada platform website Freelance Sigap bekerja dengan
            professional dan sudah melewati beberapa tahap verifikasi.
          </li>
          <li>Jam kerja Freelance Sigap pada 06.00 WIB – 17.00 WIB.</li>
          <li>
            Pengerjaan jasa dimulai saat Anda menginput form e-order diantara
            jam 06.00 – 17.00 WIB.
          </li>
          <li>
            Perhitungan pengerjaan jasa akan ditunda esok hari jika Anda
            menginput form e-order melebihi jam 17.00 WIB.
          </li>
          <li>
            Estimasi waktu yang disediakan sudah mencakupi proses pra-produksi
            sampai post-produksi.
          </li>
          <li>
            Untuk beberapa jenis jasa tertentu seperti Web Development, Web
            Application, Branding Video, Pre-Wedding Video, Wedding Video,
            Official Music Video, Short Movie, Movie, Wedding Photo terbentuk
            atas 1 tim dan memiliki bonus 1 hari untuk brainstorming konsep
            (terhitung estimasi pengerjaan jasa setelah 1 hari brainstorming
            konsep).
          </li>
          <li>
            Kategori serta rating Freelancer menggambarkan kinerja Freelancer.
          </li>
          <li>
            Batas revisi yang disediakan untuk Freelance Sigap dengan berbagai
            kategori yaitu sebanyak 1 kali, sedangkan batas revisi yang
            disediakan untuk Freelance Super Sigap dengan berbagai kategori
            yaitu sebanyak 1 sampai 3 kali.
          </li>
          <li>
            Kolom Additional Request ditujukan untuk Anda (sebagai klien)
            menspesifikasikan output produk yang Anda inginkan.
          </li>
          <li>
            Jika Freelancer melanggar perjanjian sesuai dengan permintaan klien
            (terjadi keterlambatan, maka pihak Freelance Sigap akan bertanggung
            jawab atas kerugian waktu, dan sebagainya).
          </li>
          <li>
            Jika Freelancer melakukan tindakan pelecehan, pencemoohan, ancaman,
            atau tindakan tercela lainnya mohon laporkan ke email:
            report@freelancesigap.com dan pihak Freelance Sigap akan
            menindaklanjutinya, serta jika dikategorikan sebagai pelanggaran
            berat, maka pihak Freelance Sigap akan memprosesnya sesuai prosedur
            hukum yang berlaku.
          </li>
          <li>
            Jika Anda (sebagai klien) menyalahi aturan serta melanggar
            perjanjian diluar dari yang diinput pada form e-order, maka bersedia
            untuk menerima sanksi berupa dihanguskan request ordernya dan tidak
            ada refund (pengembalian dana).
          </li>
          <li>
            Jika Anda (sebagai klien) melakukan tindakan pelecehan, pencemoohan,
            ancaman, atau tindakan tercela lainnya kepada pihak Freelancer, maka
            pihak Freelancer berhak memblock secara tidak hormat dan
            dihanguskannya request order, jika demikian mendapati Anda (sebagai
            klien) melakukan tindakan tercela dengan kategori berat, maka
            bersedia untuk mengikuti prosedur hukum yang berlaku.
          </li>
          <li>
            Pelanggaran kategori ringan: Membuat risih, Mencemooh, Mencaci maki,
            Mengganggu privasi tanpa persetujuan diantara keduanya, Respon
            negatif yang berlebihan, Berlaku tidak waras.
          </li>
          <li>
            Pelanggaran kategori berat: Pembunuhan karakter, Penuduhan,
            Melakukan tindakan pelecehan seksual, Mengancam, Menipu, Pornografi,
            Rasis.
          </li>
          <li>Pihak customer tunduk terhadap aturan yang sudah dibuat.</li>
          <li>
            Kedua pihak diharap mematuhi petunjuk, syarat dan ketentuan yang
            sudah dibuat.
          </li>
        </ol>
        <div class="flex flex-row items-center gap-4">
          <input type="checkbox" name="tos" id="tos" /><label for="tos"
            >Saya sebagai klien mematuhi segala aturan pada S&K diatas</label
          >
        </div>
        <button
          class="text-white bg-sigap-primary font-lato font-bold px-8 py-2 rounded-xl text-4xl w-fit"
        >
          Submit
        </button>
      </form>
    </section>
  </main>
</template>
