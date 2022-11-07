<template>
    <router-view/>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }

    button,
    input {
        background: none;
        border: 0;
    }

    button:focus {
        outline: 2px dashed $red;
    } 
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    props: {
        // msg: String,
    },
});
</script>