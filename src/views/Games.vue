<script setup lang="ts">
import TicTacToe from '../components/TicTacToe/TicTacToe.vue';
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="p-5">
            TicTacToe
        </div>
        <div class="p-5 self-center flex sm:w-5/6 md:w-2/4">
            <div class="flex-col grow">
                <TicTacToe></TicTacToe>
            </div>
        </div>
    </div>
</template>