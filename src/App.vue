<script setup lang="ts">
import { RouterView } from 'vue-router';
import TabMenu from 'primevue/tabmenu';

const menuItems = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Education',
        to: '/education'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
];
</script>

<template>
    <tab-menu 
      :model="menuItems"
      >
  </tab-menu>

  <router-view v-slot="{Component, route}">
    <transition name="slide-fade" mode="out-in">
        <component :is="Component" :key="route.path"></component>
    </transition>
  </router-view>
</template>

<style>
html{
  height: 100%;
}

#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  height: 100%;
}

.p-tabmenu{
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 601px){
  .p-tabmenu-nav{
     width: 75%;
  }
}


@media (max-width: 600px){
  .p-tabmenu-nav{
     width: 100%;
  }
}

.p-tabmenuitem{
    width: 25%;
}

.p-menuitem-link{
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

ul {
    text-align: start;
    list-style-type: circle;
}
</style>
