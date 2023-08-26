<script setup lang="ts">
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import {ref} from 'vue';
import LinksMenu from './LinksMenu.vue';

export interface MenuProps {

}

const visible = ref<boolean>(false);
</script>

<template>
    <Button icon="pi pi-bars" @click="() => visible = true" class="md:hidden"/>

    <Sidebar v-model:visible="visible">
        <links-menu></links-menu>
    </Sidebar>
</template>

<style>
.p-sidebar{
    background-color: white;
}
</style>