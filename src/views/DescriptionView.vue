<script setup>
  import FloatingDescriptionCard from "../components/FloatingDescriptionCard.vue";
  import ReviewCard from "../components/ReviewCard.vue";
  import EmailSubscription from "../components/EmailSubscription.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container py-6 font-semibold text-sigap-primary text-lg">
      {Breadcrumb} / {Breadcrumb}
    </section>

    <section class="container py-2">
      <img
        class="w-9/12 aspect-video object-cover"
        src="https://picsum.photos/300/100"
        alt="header"
        width="1280"
        height="720"
      />
    </section>

    <section class="container py-8 font-lato text-4xl text-sigap-primary">
      {Service title}
    </section>

    <section class="container flex flex-row gap-8">
      <div class="w-7/12">
        <div class="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          ex minima harum dignissimos neque voluptas totam quidem,
          exercitationem similique deserunt, nam saepe obcaecati excepturi
          maxime ducimus quam voluptatum nulla assumenda deleniti repudiandae
          dolor. Dolore sunt recusandae repellendus amet, officia voluptatum
          optio non voluptas esse quo quia hic corrupti maiores quae illo
          adipisci vel. Aut iure ex sint dolorum nemo doloribus cum numquam
          exercitationem commodi autem facilis in architecto eius, mollitia quo,
          rem dolorem. Debitis corporis odio, delectus magnam blanditiis
          temporibus placeat magni saepe asperiores distinctio, possimus ab
          totam aspernatur autem neque ipsam eaque illum non amet, nostrum
          similique ipsa. Dicta!
        </div>
      </div>
      <div class="w-5/12 relative flex justify-center">
        <FloatingDescriptionCard />
      </div>
    </section>

    <section class="container mt-12">
      <div class="w-7/12">
        <div class="font-lato text-4xl text-sigap-primary">Freelancer</div>
        <div class="border-2 border-sigap-gray px-8 py-12 relative mt-4">
          <button
            class="absolute right-0 top-0 px-8 py-4 border-[1px] border-sigap-primary font-bold text-lg text-sigap-primary m-4"
          >
            Hubungi saya
          </button>
          <div class="flex flex-row gap-8">
            <img
              class="w-[110px] h-[110px] object-cover rounded-[100%]"
              src="https://picsum.photos/110/110"
              alt=""
              width="110"
              height="110"
            />
            <div>
              <div class="font-semibold text-2xl">{Freelancer}</div>
              <div>Bitang</div>
              <div class="text-lg mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                repellendus quibusdam, natus numquam tenetur reiciendis maiores
                nulla quisquam impedit culpa.
              </div>
            </div>
          </div>
          <div class="divider border-t-[1px] border-sigap-gray my-6"></div>
          <div class="flex flex-row items-center justify-evenly">
            <div class="flex flex-col items-center">
              <div class="text-lg">Anggota Sejak</div>
              <div class="font-semibold text-2xl text-sigap-primary">
                MM/YYYY
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-lg">Penyelesaian</div>
              <div class="font-semibold text-2xl text-sigap-primary">0 %</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-lg">Terjual</div>
              <div class="font-semibold text-2xl text-sigap-primary">
                0 Kali
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-lg">Respon</div>
              <div class="font-semibold text-2xl text-sigap-primary">0 Jam</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-12">
      <div class="w-7/12">
        <div class="font-lato text-4xl text-sigap-primary">Ulasan</div>
        <div class="mt-4">
          <ReviewCard />
        </div>
      </div>
    </section>

    <section class="w-screen mt-24">
      <EmailSubscription />
    </section>
  </main>
</template>
