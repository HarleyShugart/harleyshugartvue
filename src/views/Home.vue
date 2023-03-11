<script lang="ts" setup>
import TabMenu from 'primevue/tabmenu';
import { reactive } from 'vue';

const menuItems = reactive([
    {
        label: 'Home', 
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Skills',
    },
    {
        label: 'Contact',
    },
    {
        label: 'Education'
    }
]);
</script>

<template>
    <!-- <tab-menu :model="menuItems"></tab-menu> -->

    <h2>Welcome!</h2>
    <h5>Check back soon for updates.</h5>
</template>
