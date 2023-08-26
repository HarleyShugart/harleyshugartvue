import { createApp } from 'vue';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import './index.css'
import 'primeicons/primeicons.css';

import 'primevue/resources/themes/saga-green/theme.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.mount('#app');
