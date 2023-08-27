<script setup lang="ts">
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Harley',
        items: [
            { 
                label: 'Home', 
                to: '/' },
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
        ]
    },
]);

</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item :item="item" :index="i"></app-menu-item>
        </template>
    </ul>
</template>