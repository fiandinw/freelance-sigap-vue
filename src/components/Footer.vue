<script setup>
  import LogoComponent from "./LogoComponent.vue";
</script>
<template>
  <div class="px-28 py-36">
    <div class="grid grid-cols-4 gap-8">
      <div class="flex flex-col gap-6">
        <!-- <div class="font-lato font-bold text-4xl">
          <span class="text-sigap-primary font-extrabold">Freelance</span> Sigap
        </div> -->
        <LogoComponent />
        <div class="font-poppins text-lg">
          Pekerjakan Freelancer hebat, cepat. Aglees membantu Anda menyewa
          freelancer profesional dengan cepat
        </div>
        <div class="flex flex-row items-center gap-2">
          <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <div class="lg:pl-16">
        <div class="font-poppins font-medium text-2xl">For Clients</div>
        <div class="mt-8">
          <ul>
            <li>Find Freelancers</li>
            <li>Status Order</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="font-poppins font-medium text-2xl">For Freelancers</div>
        <div class="mt-8">
          <ul>
            <li>Find Work</li>
            <li>Create Account</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="font-poppins font-medium text-2xl">Call Us</div>
        <div class="mt-8">
          <ul>
            <li class="flex items-center gap-2">
              <i class="fa fa-map-marker fa-2x w-8" aria-hidden="true"></i>
              Cibiru
            </li>
            <li class="flex items-center gap-2">
              <i class="fa fa-phone fa-2x w-8" aria-hidden="true"></i>
              085159596077
            </li>
            <li class="flex items-center gap-2">
              <i class="fa fa-envelope fa-2x w-8" aria-hidden="true"></i>
              aglees@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full text-center text-sigap-gray font-poppins text-lg mt-32">
      2022 aglees. All right reserved
    </div>
  </div>
</template>
