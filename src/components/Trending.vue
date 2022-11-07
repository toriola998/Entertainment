<template>
    <article class="trending">

    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import TheNavBar from '@/components/TheNavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
   // TheNavBar,
  },
});
</script>

<style lang="scss" scoped>
    .trending {
        background-image: url('./../assets/thumbnails/112/regular/small.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 10rem;
        width: 20rem;
        border-radius: 10px;
    }
</style>