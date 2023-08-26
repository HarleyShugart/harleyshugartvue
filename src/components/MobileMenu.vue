<script setup lang="ts">
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import {onMounted, ref} from 'vue';
import LinksMenu from './LinksMenu.vue';
import { useRouter } from 'vue-router';

const sidebar = ref();
const visible = ref<boolean>(false);

onMounted(() => {
    const router = useRouter();

    router.afterEach(async () => {
        visible.value = false;
    });
});
</script>

<template>
    <Button icon="pi pi-bars" @click="() => visible = true" class="md:hidden"/>

    <Sidebar v-model:visible="visible" ref="sidebar">
        <links-menu></links-menu>
    </Sidebar>
</template>

<style>
.p-sidebar{
    background-color: white;
}
</style>