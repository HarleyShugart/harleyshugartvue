<script setup lang="ts">
import Menu from 'primevue/menu';
import { ref } from 'vue';

const menu = ref();

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
        label: 'Games',
        to: '/games'
    }
];
</script>

<template>
    <div class="justify-center content-center">
        <Menu ref="menu" :model="menuItems"></Menu>
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