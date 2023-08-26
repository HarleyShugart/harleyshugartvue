<script setup lang="ts">
import Menu from 'primevue/menu';

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
    },
    {
        label: 'Games',
        to: '/games'
    }
];
</script>

<template>
    <div class="justify-center content-center">
        <Menu :model="menuItems"></Menu>
    </div>
</template>

<style>
.p-menu {
    background: none !important;
    border: none !important;
}

.p-menuitem-text {
    font-size: large;
    font-weight: bold;
}
</style>