<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';

export interface BoxProps {
    borderTop?: boolean,
    borderBottom?: boolean,
    borderLeft?: boolean,
    borderRight?: boolean,
    move: string
};

const props = withDefaults(defineProps<BoxProps>(), {
    borderTop: false,
    borderBottom: false,
    borderLeft: false,
    borderRight: false,
});

const box = ref();
const content = ref();

let boxMove: string = '';
const oColorClass: string = 'text-red-600';
const xColorClass: string = 'text-violet-700';

const emit = defineEmits<{
  (e: 'move'): void
}>();

const hasMove = (): boolean => {
    return boxMove !== '';
};

const getMove = (): string => {
    return boxMove;
};

const setContent = (move: string, colorClass: string): void => {
    content.value.innerHTML = move;
    content.value.classList.add(colorClass);
    boxMove = move;
    emit('move');
};

const moveColor = computed<string>(() => {
    return props.move.toLowerCase() === 'x'
        ? xColorClass
        : oColorClass;
});

const insertMove = (): void => {
    setContent(props.move, moveColor.value)
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

const reset = (): void => {
    content.value.innerHTML = '&nbsp;';
    const contentHtmlElement = content.value as HTMLElement;
    contentHtmlElement.classList.remove(oColorClass);
    contentHtmlElement.classList.remove(xColorClass);
    boxMove = '';
};

defineExpose({hasMove, getMove, reset});

</script>

<template>
    <div
        ref="box"
        :class="`${classes} box border-black`"
        @click="insertMove"
    >
        <div ref="content" class="text-3xl font-bold pt-14 h-full">&nbsp;</div>
    </div>
</template>