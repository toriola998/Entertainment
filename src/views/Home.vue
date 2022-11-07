<template>
    <div class="home"> 
        <TheNavBar />
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
                </div>
            </section>

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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue'; // @ is an alias to /src
import Trending from '@/components/Trending.vue';
import Movies from '@/components/Movies.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TheNavBar,
    Trending,
    Movies
  },
});
</script>

<style lang="scss" scoped>
.home  {
    background-color: $dark-blue;
    min-height: 100vh;
    width:  100vw;
    .home-inner { 
        padding: 1rem; 
    }
}

.input-wrap {
    @include flex(unset);
    padding: .5rem 0;
    margin-bottom: 1.5rem;

    &:focus-within {
        outline: 2px dashed $red;
    }

    input {
        width: 100%;
        padding-left: 1rem;
        color: #fff;
        outline: 0;
        font-size: 1.1rem;
        font-weight: 300;
    }

    input::placeholder {
        font-weight: 300;
        color: #fff;
        opacity: 0.5;
    }
}

h2, h3 {
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;
}

.trend-wrap{
    >div {
        display: flex;
        overflow-x: scroll;
        -ms-overflow-style: none; // for Internet Explorer, Edge
        scrollbar-width: none; // for Firefox
    
        &::-webkit-scrollbar {
            display:none; // for Chrome, Safari and Opera
        }
        
        >div {
            margin-right: 1rem;
        }
    }
}

.recommended-movies {
    h2 { margin: 1.5rem 0;}

    >div {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
}

@media screen and (min-width: 700px){
    .recommended-movies {
        >div {
            gap: 1.5rem;
        }
    }

    h2, h3 {
        font-size: 1.56rem;
    }
}
</style>
