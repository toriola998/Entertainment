<template>
    <main class="home-inner">
        <SearchInput placeholder="Search for movies or Tv Series"/>
        <section aria-label="trending" class="trend-wrap">
            <h2 id="trending">Trending</h2>
            <div>
                <Trending v-for="movie in movieList" :key="movie.title"
                    :movieCategory="movie.category"
                    :movieRating="movie.rating"
                    :movieYear="movie.year"
                    :movieTitle="movie.title"  
                    >   
                </Trending>
            </div>
        </section>

        <!-- :image="`url(${movie.thumbnail.regular.small})`" -->
        <section aria-label="recommended-movies" class="recommended-movies">
            <h2 id="recommended-movies">Recommended for you</h2>
            <div class="inner-recomend">
                <Recommend v-for="movie in movieList" :key="movie.title"
                     :movieCategory="movie.category"
                    :movieRating="movie.rating"
                    :movieYear="movie.year"
                    :movieTitle="movie.title" 
                    :movieCover="movie.thumbnail.regular.small"
                    />
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from '@/components/SearchInput.vue';
import Trending from '@/components/Trending.vue';
import Recommend from '@/components/Recommend.vue';
import { mapState } from 'vuex'

export default defineComponent({
    name: 'Home',
    components: {
        Trending,
        SearchInput,
        Recommend
    },
    methods: {
        
    },
    computed: {
        ...mapState({
            //return this.$store.state.da
            movie: (state : any) => state.movie,
        }),
        movieList() {
            return JSON.parse(JSON.stringify(this.movie))
        },
        // trendingList() {
        //     this.movieList.filter(movie : any  => {
        //         return movie.isTrending === true
        //     });
        // } 
    },
    mounted() {
        console.log(this.movieList)
    }
});
</script>

<style lang="scss" scoped>
</style>
