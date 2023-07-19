<script setup lang="ts">
import Box from './Box.vue';
</script>

<template>
    <div class="grid grid-cols-3 aspect-square">
        <div class="border-b-4 border-r-4 flex">
            <Box></Box>
        </div>
        <div class="border-b-4 border-r-4 flex">
            <Box></Box>
        </div>
        <div class="border-b-4 flex">
            <Box></Box>
        </div>
        
        <div class="border-b-4 border-r-4 flex">
            <Box></Box>
        </div>
        <div class="border-b-4 border-r-4 flex">
            <Box></Box>
        </div>
        <div class="border-b-4 flex">
            <Box></Box>
        </div>
        
        <div class="border-r-4 flex">
            <Box></Box>
        </div>
        <div class="border-r-4 flex">
            <Box></Box>
        </div>
        <div class="flex">
            <Box></Box>
        </div>
        
    </div>
</template>