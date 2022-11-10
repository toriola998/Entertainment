<template>
    <article class="trending">
        <button>
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                    stroke="#FFF" stroke-width="1.5" fill="none"/>
            </svg>
        </button>
        <div>
            <p class="movie-info">
                <span>{{ movieYear}}</span>
                <span>
                    <img src="@/assets/icon-category-movie.svg" 
                        alt=""
                        role="presentation" 
                    />
                    {{ movieCategory }}
                </span>
                <span>{{ movieRating }}</span>
            </p>
            <h3>{{ movieTitle }}</h3>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    props: {
        movieYear: Number,
        movieCategory: String,
        movieRating : String,
        movieTitle : String
    }
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