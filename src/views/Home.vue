<template>
    <main class="home-inner">
       <SearchInput placeholder="Search for movies or Tv Series"/>
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
import SearchInput from '@/components/SearchInput.vue';
import Trending from '@/components/Trending.vue';
import Recommend from '@/components/Recommend.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Trending,
    SearchInput,
    Recommend
  },
});
</script>

<style lang="scss" scoped>
</style>
