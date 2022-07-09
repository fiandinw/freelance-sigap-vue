<script setup>
  import { RouterView } from "vue-router";
  import Navbar from "./components/navbar/Navbar.vue";
  import Footer from "./components/Footer.vue";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;

      console.log("dari app: ", user, uid);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("dari app: User Logout");
    }
  });
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer
    v-if="
      !['register', 'login', 'myprofile', 'forgot', 'admin'].includes(
        $route.name
      )
    "
  />
</template>
