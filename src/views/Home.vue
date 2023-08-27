<script lang="ts" setup>
import Card from 'primevue/card';
</script>

<template>    
<div class="page-content">
    <Card>
        <template #title>
            Welcome!
        </template>
        <template #content>
            <p>
                I intend for this site to serve as a reference for anyone who wants to know more about me, my resume, or my hobbies.
            </p>
            <p>
                As this site is a work-in-progress, please check back from time-to-time if you are looking for a section which does not yet exist, or for new visual changes.
            </p>
            <p>
                If you're interested in following along with the code for this site, you can do so by viewing <a href="https://github.com/HarleyShugart/harleyshugartvue" target="_blank">this repository on GitHub</a>.
            </p>
        </template>
    </Card>
</div>
</template>

<style>
.page-content {
    display: block;
}

.page-content p {
    margin: 1rem 0 2rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
}
</style>