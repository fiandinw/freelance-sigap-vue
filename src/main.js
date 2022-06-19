import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './index.css'


import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "freelance-sigap.firebaseapp.com",
  projectId: "freelance-sigap",
  storageBucket: "freelance-sigap.appspot.com",
  messagingSenderId: "703884377188",
  appId: "1:703884377188:web:175905ab18b0e79e7bf371",
  measurementId: "G-EJ9EB2JESZ"
};

const app = createApp(App)

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

app.use(createPinia())
app.use(router)

app.mount('#app')
