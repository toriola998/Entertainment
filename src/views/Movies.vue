<template>
    <main class="home-inner">
        <div class="input-wrap">
            <img src="@/assets/icon-search.svg" 
                alt="" 
                role="presentation" 
                height="20"
                width="20" />
            <input placeholder="Search for movies or TV series" type="text" />
        </div>

        <section aria-label="recommended-movies" class="recommended-movies">
            <h2 id="recommended-movies">Recommended for you</h2>
            <div>
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Movies from '@/components/Recommend.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Movies
  },
});
</script>

<style lang="scss" scoped>
</style>
