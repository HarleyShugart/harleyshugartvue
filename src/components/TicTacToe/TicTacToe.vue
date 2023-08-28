<script setup lang="ts">
import Board from './Board.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

const board = ref();

const reset = (): void => {
    board.value.reset();
};

const moveButtonValue = ref('X');
const moveOptions = ref(['X', 'O']); 

</script>

<template>
    <div class="content-center text-center">
        <Card>
            <template #title>How to play</template>
            <template #content>
                <p>
                    Click either the "X" or "O" button to select your move type. Then just click in a box to place your move!
                </p>
            </template>
        </Card>
        <br><br>
        <SelectButton v-model="moveButtonValue" :options="moveOptions"></SelectButton>
        <br><br>
        <Board ref="board" :move="moveButtonValue"></Board>
        <br><br>
        <Button label="New Game" @click="reset"></Button>
    </div>
</template>

<style scoped>
button {
    background-color: #4CAF50 !important;
}
</style>