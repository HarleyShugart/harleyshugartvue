import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Education from '@/views/Education.vue';
import Skills from '@/views/Skills.vue';
import Contact from '@/views/Contact.vue';

const routes = [
    {
        path: '/',
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
        path: '/contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;