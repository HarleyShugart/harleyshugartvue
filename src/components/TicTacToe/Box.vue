<script setup lang="ts">
import { ref, Ref } from 'vue';

const box: Ref<HTMLElement> = ref();

const setContent = (move: string): void => {
    box.value.innerHTML = move;
};

const insertO = (): void => {
    setContent('O');
};

const insertX = (): void => {
    setContent('X');
};
</script>

<template>
    <div 
        ref="box"
        class="grow self-center"
        @mousedown.right="insertO"
        @mousedown.left="insertX"
    >
        &nbsp;
    </div>
</template>