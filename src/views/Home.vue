<template>
    <div class="home"> 
        <TheNavBar />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    TheNavBar,
  },
});
</script>

<style scoped lang="scss">
</style>
