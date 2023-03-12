<script lang="ts" setup>
import TabMenu from 'primevue/tabmenu';
import { reactive } from 'vue';

const menuItems = reactive([
    {
        label: 'Home', 
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Skills',
    },
    {
        label: 'Contact',
    },
    {
        label: 'Education'
    }
]);
</script>

<template>
    <!-- <div class="tab-container"> -->
        <tab-menu 
            :model="menuItems"
            >
        </tab-menu>
    <!-- </div> -->
    
    <h2>Welcome!</h2>
    <h5>Check back soon for updates.</h5>
</template>

<style>
.p-tabmenu{
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tabmenu-nav{
    width: 75%;
}

.p-tabmenuitem{
    width: 25%;
}

.p-menuitem-link{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>