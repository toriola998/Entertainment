<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
      <section aria-label="bookmarked-movies" class="recommended-movies">
          <h2 id="bookmarked-movies">Bookmarked Movies</h2>
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
import SearchInput from '@/components/SearchInput.vue';

export default defineComponent({
name: 'Home',
components: {
  Movies,
  SearchInput
},
});
</script>

<style lang="scss" scoped>
</style>
