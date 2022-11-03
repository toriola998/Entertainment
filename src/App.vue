<template>
  <router-view/>
</template>

<style lang="scss">
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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