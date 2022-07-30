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
  import FaqAccordion from "../components/FaqAccordion.vue";
  import EmailSubscription from "../components/EmailSubscription.vue";
  import FeatureButtonGroup from "../components/FeatureButtonGroup.vue";
  import CategoryCardGroup from "../components/CategoryCardGroup.vue";
  import { RouterLink } from "vue-router";
  import videoLanding from "../assets/video.mp4";
  import { onMounted, ref } from "vue";
  import Simple from "../components/navbar/Simple.vue";
  import Full from "../components/navbar/Full.vue";
  import { getAuth, onAuthStateChanged } from "@firebase/auth";

  const videoRef = ref(null);
  const isLogin = ref(false);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      isLogin.value = true;
      console.log("dari nav: ", user, uid);
    } else {
      console.log("dari nav: User Logout");
    }
  });

  onMounted(() => {
    videoRef.value.play();
  });
</script>

<template>
  <!-- <img
    class="w-full absolute top-0"
    :src="landingBG"
    alt="Landing Background"
  /> -->
  <nav v-if="!isLogin" class="fixed top-0 w-full z-50 flex justify-center p-12">
    <Simple />
  </nav>
  <div v-if="!isLogin" class="h-24"></div>

  <nav v-if="isLogin" class="fixed top-0 w-full z-50">
    <Full />
  </nav>
  <div v-if="isLogin" class="h-40"></div>

  <div
    class="w-screen h-screen absolute top-0 left-0 bg-gradient-to-tl from-sigap-secondary to-gray-50"
  >
    <div
      class="w-full h-full bg-gradient-to-t from-white via-transparent to-transparent"
    ></div>
  </div>

  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row py-16">
      <div class="w-5/12 flex flex-col gap-12">
        <div class="font-lato text-5xl font-bold">
          Apakah anda sedang mencari freelancers?
        </div>
        <div class="text-2xl text-opacity-60 text-black">
          Pekerjakan Freelancer hebat, cepat. <b>aglees</b> membantu Anda
          menyewa freelancer profesional dengan cepat
        </div>
        <RouterLink :to="{ name: 'pricelist' }">
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
        desc="Jaminan pembayaran aglees aman 100%"
      />
    </section>

    <section class="container pt-16 flex flex-row gap-16">
      <img :src="landingGirl" alt="Good" width="500" />
      <div class="grow flex flex-col gap-8">
        <div
          class="font-lato text-5xl font-bold text-left self-start uppercase"
        >
          <span class="text-4xl">Kenapa Harus</span><br />
          <span class="text-sigap-primary">aglees?</span>
        </div>
        <div class="h-full max-w-2xl grid grid-cols-3 relative">
          <div>
            <LandingFeatureCard
              class="z-40"
              :icon="discountMedal"
              title="Money Guarantee"
              >Garansi uang kembali 100% untuk proyek-proyek cacat atau secara
              alami kesalahan aglees.</LandingFeatureCard
            >
          </div>
          <div>
            <LandingFeatureCard
              class="z-40"
              :icon="wallet"
              title="Safe Transaction"
              >Transaksi aman dari pra produksi sampai pasca produksi dipantau
              oleh aglees dan dijamin keamanannya oleh
              aglees.</LandingFeatureCard
            >
          </div>
          <div>
            <LandingFeatureCard class="z-40" :icon="iconTime" title="Efficient"
              >Progress dan hasil pekerjaan oleh freelancer yang cenderung lebih
              cepat dan tepat untuk customer.</LandingFeatureCard
            >
          </div>
          <div>
            <LandingFeatureCard class="z-30" :icon="wave" title="Flexible"
              >Customer dapat memesan proyek sambil bersantai atau mempermudah
              mobilitas serta hasil pekerjaan dapat direvisi secara mudah, cepat
              dan tepat.</LandingFeatureCard
            >
          </div>
          <div>
            <LandingFeatureCard
              class="z-30"
              :icon="iconCheck"
              title="Good Service"
              >aglees mengedepankan kecepatan, ketepatan serta keterjangkauan
              hasil pekerjaan mulai dari tahap dealing transaction, pra produksi
              sampai hasil proyek sampai secara utuh di tangan
              customer.</LandingFeatureCard
            >
          </div>
        </div>
      </div>
    </section>

    <section class="w-screen h-screen relative">
      <div
        class="absolute px-16 text-white font-lato text-6xl font-extrabold text-opacity-40 flex flex-col items-start justify-center h-full gap-12 bg-black bg-opacity-70 w-full"
      >
        <div>Efficiency Value.</div>
        <div>Make it simple and practical.</div>
        <div>Positive Transactional.</div>
      </div>
      <video
        class="w-full h-full object-cover"
        ref="videoRef"
        :src="videoLanding"
        muted
        loop
      >
        video not supported
      </video>
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
          title="Apa keunggulan menggunakan aglees?"
          content="Kami memegang erat pada konsep efisiensi waktu dan harga. Selain itu profesionalitas freelancer dijunjung tinggi dan kami bertekad untuk menghadirkan fitur custom order untuk memberi ruang kepada freelancer kelas newbie untuk menjemput order calon customer juga kepada customer untuk bebas menentukan budget di fitur ini."
        />
        <FaqAccordion
          title="Ada berapa cara order di aglees?"
          content="Terdapat 2 cara order, yakni Instant Order dan Custom Order."
        />
        <FaqAccordion title="Bagaimana cara order di aglees?">
          <ol class="list-decimal">
            <li>
              Pada Instant Order, calon customer harus melakukan login atau sign
              up terlebih dahulu, kemudian nanti mengisi e-formulir yang sudah
              tersedia, harga jasa menyesuaikan jenis jasa, kualitas atau kelas
              freelancer, dan kecepatan pengerjaan.
            </li>
            <li class="mt-4">
              Pada Custom Order, calon customer tidak perlu login atau sign up
              terlebih dahulu, dan calon customer bebas menentukan budget untuk
              membayar jasa freelancer.
            </li>
          </ol>
        </FaqAccordion>
        <FaqAccordion
          title="Apakah di aglees terdapat fitur negosiasi?"
          content="Ya, fitur tersebut bernama Chat and Nego."
        />
        <FaqAccordion
          title="Apakah di aglees dapat mencicil?"
          content="Ya, ada metode pembayaran mencicil sebanyak 2 kali. Termin 1 membayar sebesar minimal 20%. Termin 2 membayar sisa dari pembayaran termin 1. Metode pembayaran ini berlaku untuk custom order saja."
        />
        <FaqAccordion
          title="Apakah di aglees dapat CoD?"
          content="Ya, ada metode pembayaran Cash on Delivery untuk calon customer yang tidak memiliki E-Wallet/Bank/Debit dan dapat dijangkau jaraknya. Untuk Cash on Delivery terdapat biaya penanganan sebesar Rp 5.000."
        />
        <FaqAccordion
          title="Bagaimana ketentuan transaksi di aglees?"
          content="Calon customer harus memperhatikan syarat dan ketentuan order yang tertera pada Syarat dan Ketentuan sebelum melakukan order. Semua bentuk persetujuan dari calon customer dianggap sebagai hal yang absah. Terkait kebijakan pembatalan order dari calon customer merupakan tanggung jawab dari calon customer, jika sebaliknya di tengah proyek berjalan dari pihak freelancer terdapat keterlambatan, maka calon customer dapat mengklaim garansi berupa uang kembali 100% atau proyek dialihkan kepada freelancer lain."
        />
        <FaqAccordion
          title="Bagaimana cara klaim garansi?"
          content="Calon customer harus melakukan login atau sign up terlebih dahulu. Di sebelah profile calon customer terdapat My Claim dan di sana akan diarahkan kepada support center untuk teknis klaim. Jika calon customer tidak membuat akun, maka klaim garansi tidak berlaku kecuali memiliki rekam jejak transaksi."
        />
        <FaqAccordion
          title="Apakah di aglees terdapat voucher diskon?"
          content="Ya. Voucher diskon didapatkan dari mengumpulkan poin setelah order dengan mengisi review feedback dan event-event aglees."
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
          title="Berapa harga untuk membeli jasa di aglees?"
          content="Rate harga di aglees mulai dari Rp 15K"
        />
        <FaqAccordion
          title="Berapa lama proyek yang dikerjakan di aglees?"
          content="Pengerjaan proyek tergantung pada jenis dan sub jenis jasa serta pemilihan fitur kecepatan pengerjaan, apabila Sigap merupakan fitur pengerjaan reguler, dan Super Sigap merupakan fitur pengerjaan cepat."
        />
        <FaqAccordion
          title="Apakah menambah permintaan revisi menambah biaya di aglees?"
          content="Ya, biaya revisi dihitung Rp 20K/permintaan."
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
