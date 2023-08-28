<script setup lang="ts">
import Box from './Box.vue';
import { Ref, ref } from 'vue';

export interface BoardProps {
    move: string
};

const props = withDefaults(defineProps<BoardProps>(), {
    
});

const topLeft = ref();
const topMiddle = ref();
const topRight = ref();

const middleLeft = ref();
const middle = ref();
const middleRight = ref();

const bottomLeft = ref();
const bottomMiddle = ref();
const bottomRight = ref();

const movesMatch = (box1: Ref<any>, box2: Ref<any>, box3: Ref<any>): boolean => {
    if(!box1.value.hasMove() || !box2.value.hasMove() || !box3.value.hasMove()){
        return false;
    }

    const move1 = box1.value.getMove();
    const move2 = box2.value.getMove()
    const move3 = box3.value.getMove();

    if(move1 !== move2){
        return false;
    }

    if(move2 !== move3){
        return false;
    }

    return true;
};

const topRowMovesMatch = (): boolean => {
    return movesMatch(topLeft, topMiddle, topRight);
};

const middleRowMovesMatch = (): boolean => {
    return movesMatch(middleLeft, middle, middleRight);
};

const bottomRowMovesMatch = (): boolean => {
    return movesMatch(bottomLeft, bottomMiddle, bottomRight);
};

const leftColumnMovesMatch = (): boolean => {
    return movesMatch(topLeft, middleLeft, bottomLeft);
};

const middleColumnMovesMatch = (): boolean => {
    return movesMatch(topMiddle, middle, bottomMiddle);
};

const rightColumnMovesMatch = (): boolean => {
    return movesMatch(topRight, middleRight, bottomRight);
};

const diagonalTopLeftBottomRightMovesMatch = (): boolean => {
    return movesMatch(topLeft, middle, bottomRight);
};

const diagonalTopRightBottomLeftMovesMatch = (): boolean => {
    return movesMatch(topRight, middle, bottomLeft);
};

const isGameOver = (): boolean => {
    const rowWin = topRowMovesMatch() || middleRowMovesMatch() || bottomRowMovesMatch();
    const columnWin = leftColumnMovesMatch() || middleColumnMovesMatch() || rightColumnMovesMatch();


    return rowWin || columnWin || diagonalTopLeftBottomRightMovesMatch() || diagonalTopRightBottomLeftMovesMatch();
};

const checkGameOver = async (): Promise<void> => { 
    setTimeout(() => {
        if(!isGameOver()){
            return;
        }

        alert('Game Over!')
    }, 10);
};

const reset = (): void => {
    topLeft.value.reset();
    topMiddle.value.reset();
    topRight.value.reset();

    middleLeft.value.reset();
    middle.value.reset();
    middleRight.value.reset();

    bottomLeft.value.reset();
    bottomMiddle.value.reset();
    bottomRight.value.reset();
};

defineExpose({reset});

</script>

<template>
    <div class="grid grid-cols-3 aspect-square board">
        <Box 
            ref="topLeft"
            border-bottom 
            border-right
            @move="checkGameOver"
            :move="props.move"
            >
        </Box>
        <Box
            ref="topMiddle"
            border-bottom 
            border-right
            @move="checkGameOver"
            :move="props.move"
        >
        </Box>
        <Box
            ref="topRight"
            border-bottom 
            @move="checkGameOver"
            :move="props.move"
        >
        </Box>
        <Box 
            ref="middleLeft"
            border-bottom 
            border-right
            @move="checkGameOver"
            :move="props.move"
            >
        </Box>
        <Box
            ref="middle"
            border-bottom 
            border-right
            @move="checkGameOver"
            :move="props.move"
        >
        </Box>
        <Box
            ref="middleRight"
            border-bottom 
            @move="checkGameOver"
            :move="props.move"
        >
        </Box>
        <Box 
            ref="bottomLeft"
            border-right
            @move="checkGameOver"
            :move="props.move"
            >
        </Box>
        <Box
            ref="bottomMiddle"
            border-right
            @move="checkGameOver"
            :move="props.move"
        >
        </Box>
        <Box ref="bottomRight" @move="checkGameOver" :move="props.move"></Box>
    </div>
</template>