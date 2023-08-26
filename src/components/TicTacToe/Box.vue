<script setup lang="ts">
import { computed, ComputedRef, ref, Ref } from 'vue';

export interface BoxProps {
    borderTop?: boolean,
    borderBottom?: boolean,
    borderLeft?: boolean,
    borderRight?: boolean,
};

const props = withDefaults(defineProps<BoxProps>(), {
    borderTop: false,
    borderBottom: false,
    borderLeft: false,
    borderRight: false
});

const box = ref();
const content = ref();

const setContent = (move: string): void => {
    content.value.innerHTML = move;
};

const insertO = (): void => {
    setContent('O');
};

const insertX = (): void => {
    setContent('X');
};

const classes: ComputedRef<string> = computed<string>(() => {
    let calculatedClassses = '';

    if(props.borderBottom){
        calculatedClassses += 'border-b-4 ';
    }

    if(props.borderTop){
        calculatedClassses += 'border-t-4 ';
    }

    if(props.borderLeft){
        calculatedClassses += 'border-l-4 ';
    }

    if(props.borderRight){
        calculatedClassses += 'border-r-4 ';
    }

    return calculatedClassses;
});

</script>

<template>
    <div
        ref="box"
        :class="`${classes} flex`"
        @click="insertX"
        @dblclick="insertO"
    >
        <div ref="content" class="grow pt-14 h-full"></div>
    </div>
</template>