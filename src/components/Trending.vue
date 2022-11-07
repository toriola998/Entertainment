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
            <h2>Beyond Earth</h2>
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
        background-repeat: no-repeat;
        background-size: cover;
        height: 10rem;
        min-width: 18rem;
        border-radius: 10px;
        position: relative;
        margin: 2rem 1rem 0 0;

        span img { margin-right: .4rem; }

        >div {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
        }

        p {
            opacity: 0.75;
            font-weight: 300;

            span:nth-child(2)::before,
            span:nth-child(2)::after {
                content: "";
                display: inline-flex;
                height: .3rem;
                width: .3rem;
                background: #FFFFFF;
                mix-blend-mode: normal;
                opacity: 0.5;
                border-radius: 20px;
                margin: 0 .7rem;
            }
        }

        h2, p {
            color: #fff;
        }

        h2 {
            font-weight: 500;
            font-size: 1.2rem;
        }

        button {
            background: #10141E;
            mix-blend-mode: normal;
            opacity: 0.5;
            height: 2rem;
            width: 2rem;
            border-radius: 15px;
            position: absolute;
            right: .7rem;
            top: .7rem;
            @include flex();
        }
    }
</style>