import { createApp, ref } from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import './index.css'

import '@/assets/styles.scss';


const app = createApp(App);

app.use(PrimeVue, {ripple: true});

app.use(router);

app.mount('#app');
