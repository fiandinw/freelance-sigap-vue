<script setup>
  import landingBG from "../assets/landingBG.png";
  import landingHello from "../assets/landingHello.png";
  import iconFind from "../assets/icons/find.png";
  import iconGuard from "../assets/icons/guard.png";
  import iconLock from "../assets/icons/lock.png";
  import LandingStepCard from "../components/LandingStepCard.vue";
  import landingGirl from "../assets/landingGirl.png";
  import discountMedal from "../assets/icons/discountMedal.png";
  import wallet from "../assets/icons/wallet.png";
  import iconTime from "../assets/icons/time.png";
  import wave from "../assets/icons/wave.png";
  import iconCheck from "../assets/icons/check.png";
  import LandingFeatureCard from "../components/LandingFeatureCard.vue";
  import CategoryCard from "../components/CategoryCard.vue";
  import FaqAccordion from "../components/FaqAccordion.vue";
  import EmailSubscription from "../components/EmailSubscription.vue";
  import FeatureButtonGroup from "../components/FeatureButtonGroup.vue";
  import CategoryCardGroup from "../components/CategoryCardGroup.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <img
    class="w-full absolute top-0"
    :src="landingBG"
    alt="Landing Background"
  />

  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row py-16">
      <div class="w-5/12 flex flex-col gap-12">
        <div class="font-lato text-5xl font-bold">
          Apakah anda sedang mencari freelancers?
        </div>
        <div class="text-2xl text-opacity-60 text-black">
          Pekerjakan Freelancer hebat, cepat. <b>Freelance Sigap</b> membantu
          Anda menyewa freelancer profesional dengan cepat
        </div>
        <RouterLink :to="{ name: 'login' }">
          <button
            class="text-2xl font-bold text-white bg-sigap-primary w-fit px-20 py-5 rounded-full"
          >
            Temukan Freelance
          </button>
        </RouterLink>
      </div>

      <div class="flex items-center justify-center w-7/12">
        <img :src="landingHello" alt="Hello" width="311" height="357" />
      </div>
    </section>

    <section
      class="container bg-white py-6 rounded-lg flex flex-row items-start justify-evenly shadow-lg"
    >
      <LandingStepCard
        :icon="iconLock"
        title="Cari Freelancer"
        desc="Cari dan pilih freelancer berdasarkan portofolio, kemampuan dan ulasan."
      />
      <LandingStepCard
        :icon="iconFind"
        title="Berdiskusi"
        desc="Diskusikan detail pekerjaan yang anda inginkan"
      />
      <LandingStepCard
        :icon="iconGuard"
        title="Bayar"
        desc="Jaminan pembayaran freelance sigap aman 100%"
      />
    </section>

    <section class="container py-16 flex flex-row gap-16">
      <img :src="landingGirl" alt="Good" width="431" height="589" />
      <div class="grow flex flex-col gap-16">
        <div class="font-lato text-5xl font-bold text-right self-end">
          Carilah
          <span class="text-sigap-primary">Freelancer<br />Terbaik</span> disini
        </div>
        <div class="h-full max-w-2xl flex flex-row gap-8 flex-wrap">
          <LandingFeatureCard :icon="discountMedal" title="Money Guarantee" />
          <LandingFeatureCard :icon="wallet" title="Safe Transaction" />
          <LandingFeatureCard :icon="iconTime" title="Efficient" />
          <LandingFeatureCard :icon="wave" title="Flexible" />
          <LandingFeatureCard :icon="iconCheck" title="Good Service" />
        </div>
      </div>
    </section>

    <section class="w-screen h-screen relative bg-black px-16">
      <div
        class="absolute text-white font-lato text-6xl font-extrabold text-opacity-40 flex flex-col items-start justify-center h-full gap-12"
      >
        <div>Efficiency Value.</div>
        <div>Make it simple and practical.</div>
        <div>Positive Transactional.</div>
      </div>
    </section>

    <section class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center mb-14">
        Layanan Kami
      </div>
      <FeatureButtonGroup />
    </section>

    <section class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center mb-14">
        Kategori
      </div>
      <CategoryCardGroup />
    </section>

    <section id="faq" class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center">FAQ</div>
      <div class="flex flex-col mt-14 gap-8">
        <FaqAccordion
          title="Apa keunggulan menggunakan Freelance Sigap?"
          content="Kami memegang erat pada konsep efisiensi waktu dan harga. Selain itu profesionalitas freelancer dijunjung tinggi dan kami bertekad untuk menghadirkan fitur custom order untuk memberi ruang kepada freelancer kelas newbie untuk menjemput order calon customer juga kepada customer untuk bebas menentukan budget di fitur ini."
        />
        <FaqAccordion
          title="Ada berapa cara order di Freelance Sigap?"
          content="Terdapat 2 cara order, yakni Instant Order dan Custom Order."
        />
        <FaqAccordion
          title="Bagaimana cara order di Freelance Sigap?"
          content="1. Pada Instan Order, calon customer harus melakukan login atau sign up terlebih dahulu, kemudian nanti mengisi e-formulir yang sudah tersedia, harga jasa menyesuaikan jenis jasa, kualitas atau kelas freelancer, dan kecepatan pengerjaan. 2. Pada Custom Order, calon customer tidak perlu login atau signup terlebih dahulu, dan calon customer bebas menentukan budget untuk membayar jasa freelancer."
        />
        <FaqAccordion
          title="Apakah di Freelance Sigap terdapat fitur negosiasi?"
          content="Ya, fitur tersebut bernama Chat and Nego."
        />
        <FaqAccordion
          title="Apakah di Freelance Sigap dapat mencicil?"
          content="Ya, ada metode pembayaran mencicil sebanyak 2 kali. Termin 1 membayar sebesar minimal 20%. Termin 2 membayar sisa dari pembayaran termin 1. Metode pembayaran ini berlaku untuk custom order saja."
        />
        <FaqAccordion
          title="Apakah di Freelance Sigap dapat CoD?"
          content="Ya, ada metode pembayaran Cash on Delivery untuk calon customer yang tidak memiliki E-Wallet/Bank/Debit dan dapat dijangkau jaraknya. Untuk Cash on Delivery terdapat biaya penanganan sebesar Rp 5.000."
        />
        <FaqAccordion
          title="Bagaimana ketentuan transaksi di Freelance Sigap?"
          content="Calon customer harus memperhatikan syarat dan ketentuan order yang tertera pada Terms and Condition sebelum melakukan order. Semua bentuk persetujuan dari calon customer dianggap sebagai hal yang absah. Terkait kebijakan pembatalan order dari calon customer merupakan tanggung jawab dari calon customer, jika sebaliknya di tengah proyek berjalan dari pihak freelancer terdapat keterlambatan, maka calon customer dapat mengklaim garansi berupa uang kembali 100% atau proyek dialihkan kepada freelancer lain."
        />
        <FaqAccordion
          title="Bagaimana cara klaim garansi?"
          content="Calon customer harus melakukan login atau signup terlebih dahulu. Di sebelah profile calon customer terdapat My Claim dan di sana akan diarahkan kepada support center untuk teknis klaim. Jika calon customer tidak membuat akun, maka klaim garansi tidak berlaku kecuali memiliki rekam jejak transaksi."
        />
        <FaqAccordion
          title="Apakah di Freelance Sigap terdapat voucher diskon?"
          content="Ya. Voucher diskon didapatkan dari mengisi review feedback setelah order dan event-event Freelance Sigap."
        />
        <FaqAccordion
          title="Bagaimana cara klaim voucher diskon?"
          content="Calon customer dapat mengklaim voucher diskon di My Claim, kemudian voucher dapat digunakan sesuai dengan ketentuannya."
        />
        <FaqAccordion
          title="Bagaimana jika ingin menambah fitur atau request di tengah proyek?"
          content="Jika terdapat request di tengah berjalannya proyek, hal tersebut diukur oleh bobot permintaan. Jika permintaannya dalam kategori besar, dimungkinkan freelancer akan memberi tagihan pembayaran tambahan. Jika permintaannya hanya sebagian kecil, dimungkinkan freelancer memberi free paid."
        />
        <FaqAccordion
          title="Berapa harga untuk membeli jasa di Freelance Sigap?"
          content="Rate harga di Freelance Sigap mulai dari Rp 15.000"
        />
        <FaqAccordion
          title="Berapa lama proyek yang dikerjakan di Freelance Sigap?"
          content="Pengerjaan proyek tergantung pada jenis dan sub jenis jasa serta pemilihan fitur kecepatan pengerjaan, apabila Sigap merupakan fitur pengerjaan reguler, dan Super Sigap merupakan fitur pengerjaan cepat."
        />
        <FaqAccordion
          title="Apakah menambah permintaan revisi menambah biaya di Freelance Sigap?"
          content="Ya, biaya revisi dihitung Rp 20.000/permintaan."
        />
        <FaqAccordion
          title="Apa yang didapat setelah proyek selesai?"
          content="Calon customer akan mendapatkan voucher diskon, juga customer memiliki tingkatan customer yang dimana akan mempengaruhi harga dan cashback pembelian jasa."
        />
      </div>
    </section>

    <section class="w-screen">
      <EmailSubscription />
    </section>
  </main>
</template>
