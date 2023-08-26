import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Education from '@/views/Education.vue';
import Skills from '@/views/Skills.vue';
import Games from '@/views/Games.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/education',
        component: Education
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/games',
        component: Games
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;