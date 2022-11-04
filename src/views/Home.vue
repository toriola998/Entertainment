<template>
    <div class="home"> 
        <TheNavBar />
        <div class="input-wrap">
            <img src="" alt="" role="presentation" />
            <input placeholder="Search for movies or TV series" type="text"/>
        </div>
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

<style lang="scss" scoped>
// @import "./../styles/main";
.home  {
    background-color: $dark-blue;
    min-height: 100vh;
    width:  100vw;
}
</style>
