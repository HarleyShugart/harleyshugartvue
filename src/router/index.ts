import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Education from '@/views/Education.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/education',
        component: Education
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;