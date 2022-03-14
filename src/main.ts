import { createApp } from 'vue';
import App from '@/App.vue';
import HomeVue from './components/Home.vue';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
app.component('home', HomeVue);
app.mount('#app');
