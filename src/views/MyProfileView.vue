<script setup>
  import Profile from "../components/navbar/Profile.vue";
  import FaqAccordion from "../components/FaqAccordion.vue";
  import HelpCenterButton from "../components/HelpCenterButton.vue";
  import iconWhatsapp from "../assets/icons/whatsapp.png";
  import { onMounted, onUnmounted, ref } from "vue";
  import {
    doc,
    getFirestore,
    onSnapshot,
    updateDoc,
  } from "@firebase/firestore";
  import swal from "sweetalert";
  import { RouterLink } from "vue-router";
  import { getAuth, onAuthStateChanged } from "@firebase/auth";

  const db = getFirestore();
  const auth = getAuth();

  let customerId = "c8txMBcP0JqRil0vJquS";

  const customerProfile = ref({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const getCustomerData = () => {
    const docref = doc(db, "customer", customerId);
    onSnapshot(docref, (doc) => {
      const resData = doc.data();
      customerProfile.value.username = resData.username;
      customerProfile.value.email = resData.email;
      customerProfile.value.password = resData.password;
      customerProfile.value.phone = resData.phone;
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      customerId = uid;
      getCustomerData();
      console.log("dari myprofile: ", user, uid);
    } else {
      console.log("dari myprofile: User Logout");
    }
  });

  onMounted(() => {
    console.log("ci=ust", customerId);
  });

  const handleSubmit = () => {
    const docref = doc(db, "customer", customerId);
    updateDoc(docref, {
      username: customerProfile.value.username,
      email: customerProfile.value.email,
      password: customerProfile.value.password,
      phone: customerProfile.value.phone,
    }).then(() => {
      swal("Simpan Berhasil", "Data Berhasil Diubah", "success");
    });
  };
</script>
<template>
  <div class="w-screen flex flex-row">
    <Profile />
    <main v-if="$route.hash == ''" class="p-16 w-9/12">
      <div class="text-center font-lato text-6xl">My Profile</div>
      <div class="flex flex-row justify-evenly mt-12">
        <div
          class="w-[350px] rounded-lg border-[1px] border-sigap-primary flex flex-col items-center gap-4 p-8"
        >
          <div class="flex flex-col items-center gap-4">
            <img
              class="w-[100px] h-[100px] rounded-[100%] object-cover"
              src="https://picsum.photos/50/50"
              alt="profil"
              width="100"
              height="100"
            />
            <div class="font-semibold text-2xl mb-20">
              {{ customerProfile.username }}
            </div>
            <!-- <div class="font-semibold text-sigap-gray text-base">
              {location}
            </div>
            <div class="font-semibold text-sigap-gray text-base">{status}</div> -->
          </div>
          <div
            class="font-semibold text-lg text-sigap-primary border-t-2 w-full flex items-center justify-center pt-4 cursor-pointer"
          >
            Upload Picture
          </div>
        </div>
        <div
          class="w-[550px] rounded-lg border-[1px] border-sigap-primary flex flex-col items-center py-4 gap-4"
        >
          <div>&nbsp;</div>
          <div class="grow border-y-2 w-full px-4 flex flex-col gap-2 py-4">
            <div class="flex flex-row gap-8">
              <div class="flex flex-col w-1/2">
                <label for="username">Username</label>
                <input
                  v-model="customerProfile.username"
                  class="border-[1px] border-sigap-gray rounded-lg p-2"
                  type="text"
                  id="username"
                />
              </div>
              <div class="flex flex-col w-1/2">
                <label for="email">Email</label>
                <input
                  v-model="customerProfile.email"
                  class="border-[1px] border-sigap-gray rounded-lg p-2"
                  type="text"
                  id="email"
                />
              </div>
            </div>
            <div class="flex flex-row gap-8">
              <div class="flex flex-col w-1/2">
                <label for="password">Password</label>
                <input
                  v-model="customerProfile.password"
                  class="border-[1px] border-sigap-gray rounded-lg p-2"
                  type="password"
                  id="password"
                />
              </div>
              <div class="flex flex-col w-1/2">
                <label for="phone">Nomor Telepon</label>
                <input
                  v-model="customerProfile.phone"
                  class="border-[1px] border-sigap-gray rounded-lg p-2"
                  type="number"
                  id="phone"
                />
              </div>
            </div>
            <!-- <div class="flex flex-row gap-8">
              <div class="flex flex-col w-1/2">
                <label for="firstname">Provinsi</label>
                <input
                  class="border-[1px] border-sigap-gray rounded-lg p-2"
                  type="text"
                  id="firstname"
                  name="firstname"
                />
              </div>
              <div class="flex flex-col w-1/2">
                <label for="firstname">Kota</label>
                <input
                  class="border-[1px] border-sigap-gray rounded-lg p-2"
                  type="text"
                  id="firstname"
                  name="firstname"
                />
              </div>
            </div> -->
          </div>
          <div class="w-full flex justify-end px-8">
            <button
              @click="handleSubmit"
              class="bg-sigap-primary text-white font-semibold text-lg px-4 py-2 rounded-lg"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-row justify-evenly">
        <button class="px-4 py-2 rounded-lg border-[1px] text-lg">
          <i class="fa fa-facebook-official" aria-hidden="true"></i
          >&nbsp;Connect With Facebook
        </button>
        <button class="px-4 py-2 rounded-lg border-[1px] text-lg">
          <i class="fa fa-google" aria-hidden="true"></i>&nbsp;Connect With
          Google
        </button>
      </div>
    </main>
    <main v-if="$route.hash == '#help'" class="p-16 w-9/12">
      <div class="text-center font-lato text-6xl mb-12">Support Center</div>
      <HelpCenterButton :icon="iconWhatsapp" title="Whatsapp Support Center" />
    </main>
    <main v-if="$route.hash == '#faq'" class="p-16 w-9/12 flex flex-col gap-8">
      <div class="text-center font-lato text-6xl">FAQ</div>
      <FaqAccordion
        title="Apa manfaat mengisi lengkap biodata akun pada profile?"
        content="Kami memiliki komit untuk tingkatan loyalitas kepada customer dengan memberi label tingkatan yang menggambatkan keloyalitasan."
      />
      <FaqAccordion
        title="Apa saja tingkatan loyalitas customer?"
        content="Silver, Gold, Platinum"
      />
      <FaqAccordion
        title="Apa manfaat tingkatan loyalitas customer?"
        content="Mendapat posisi strategis pada pembagian voucher diskon atau point."
      />
      <FaqAccordion
        title="Bagaimana jika saya lupa password?"
        content="Kamu dapat lakukan pengaturan ulang Reset Password dan kemudian masukkan alamat email kamu dengan benar, kemudian kode verifikasi akan dikirimkan ke email kamu."
      />
      <FaqAccordion
        title="Bagaimana cara saya mengubah password?"
        content="Kamu dapat mengubah password langsung pada bagian profile dan ubah password."
      />
      <FaqAccordion
        title="Apakah boleh mengganti alamat email?"
        content="Ya. Pastikan alamat email yang kamu ganti adalah alamat email yang aktif."
      />
      <FaqAccordion
        title="Bagaimana jika saya lupa alamat email atau alamat email di-non-aktifkan, dan nomor telepon tidak aktif?"
        content="Kamu dapat menghubungi Tim Sigap melalui kanal customer service-nya Freelance Sigap."
      />
      <FaqAccordion
        title="Apakah akun saya dapat ditangguhkan atau dihapus permanent oleh Freelance Sigap?"
        >Ya. Jika kamu melanggar norma yang ditetapkan oleh Freelance Sigap pada
        bagian
        <RouterLink
          class="text-sigap-primary font-semibold"
          :to="{ name: 'tos' }"
          >S&K</RouterLink
        >
        yang tertera.</FaqAccordion
      >
    </main>
  </div>
</template>
