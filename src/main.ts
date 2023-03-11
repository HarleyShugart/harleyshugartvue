import { createApp } from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import router from './router';

import 'primevue/resources/themes/tailwind-light/theme.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.mount('#app');
