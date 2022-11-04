<template>
  <router-view/>
</template>

<style lang="scss">
@import "./styles/main";
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button {
        background: none;
        //outline: 1px dashed $red;
        border: 0;

        &:focus {
            outline: 2px dashed $red;
        }
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