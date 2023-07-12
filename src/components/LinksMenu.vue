<script setup lang="ts">
import Menu from 'primevue/menu';
import MenuItem from 'primevue/menuitem';

const menuItems = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Education',
        to: '/education'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
];
</script>

<template>
    <Menu :model="menuItems"></Menu>
</template>