<script setup lang="ts">
import { RouterView } from 'vue-router';
import MobileMenu from './components/MobileMenu.vue';
import LinksMenu from './components/LinksMenu.vue';
</script>

<template>
  <div class="md:hidden">
    <mobile-menu></mobile-menu>
    
    <router-view v-slot="{Component, route}">
      <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>

  <div class="desktop-app hidden md:flex flex-row divide-x-2">
    <div class="">
      <links-menu></links-menu>
    </div>
    <div class="grow">
      <router-view v-slot="{Component, route}">
        <transition name="slide-fade" mode="out-in">
            <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
html, body{
  height: 100%;
  widows: 100%;
  margin: 0;
}

#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  overflow-wrap: break-word;
}

.p-tabmenu{
    display: flex;
    align-items: center;
    justify-content: center;
}

.desktop-app {
  height: 100%;
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

h1 {
  margin-bottom: 2rem;
  font-size: x-large !important;
  font-weight: bold !important;
}
</style>
