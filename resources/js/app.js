import '@/assets/css/app.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppLayout from '@/components/Layouts/AppLayout.vue';
import  VSelect  from "vue-select";
import "vue-select/dist/vue-select.css";
import 'flowbite';


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
    .use(router)
    .component('AppLayout', AppLayout)
    .component("Select", VSelect)
    .mount('#app')