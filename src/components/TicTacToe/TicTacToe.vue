<script setup lang="ts">
import Board from './Board.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { ref } from 'vue';

const board = ref();

const reset = (): void => {
    board.value.reset();
};

</script>

<template>
    <Card>
        <template #title>How to play</template>
        <template #content>
            <p>
                Just click on a box to make a move! Left clicks will make "X" moves, while right clicks will make "O" moves.
            </p>
        </template>
    </Card>
    <br><br>
    <Board ref="board"></Board>
    <br><br>
    <Button label="New Game" @click="reset"></Button>
</template>