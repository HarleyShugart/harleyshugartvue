<script setup>
import { useLayout } from '@/layout/composables/layout';

const { onMenuToggle } = useLayout();

</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img src="../../layout/images/logo-dark.svg" alt="logo" />
            <!--TODO: update logo-->
            <span>Harley Shugart</span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>
    </div>
</template>