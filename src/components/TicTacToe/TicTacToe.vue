<script setup lang="ts">
import Board from './Board.vue';
import Button from 'primevue/button';
import { ref } from 'vue';

const board = ref();

const reset = (): void => {
    board.value.reset();
};

</script>

<template>
    <Board></Board>
    <br><br>
    <Button label="New Game" @click="reset"></Button>
</template>