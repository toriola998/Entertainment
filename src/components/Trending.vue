<template>
    <article class="trending">
        <button>
            <img 
                src="@/assets/icon-bookmark-empty.svg" 
                alt="Bookmark this movie" />
        </button>
        <div>
            <p class="movie-info">
                <span>2019</span>
                <span>
                    <img src="@/assets/icon-category-movie.svg" 
                        alt=""
                        role="presentation" 
                    />
                    Movie
                </span>
                <span>PG</span>
            </p>
            <h3>Beyond Earth</h3>
        </div>
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
        min-width: 18rem;
        margin: 2rem 1rem 0 0;

        >div {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
        }
    }
@media screen and (min-width: 720px){
    .trending {
        min-width: 470px;
        height: 13rem;
    }
}
</style>