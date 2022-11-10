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

        <section aria-label="trending" class="trend-wrap">
            <h2 id="trending">Trending</h2>
            <div>
                <Trending />
                <Trending /> 
                <Trending />
                <Trending />
                <Trending /> 
                <Trending />
                <Trending /> 
            </div>
        </section>

        <section aria-label="recommended-movies" class="recommended-movies">
            <h2 id="recommended-movies">Recommended for you</h2>
            <div>
                <Recommend />
                <Recommend />
                <Recommend />
                <Recommend />
                <Recommend />
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Trending from '@/components/Trending.vue';
import Recommend from '@/components/Recommend.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Trending,
    Recommend
  },
});
</script>

<style lang="scss" scoped>
</style>
