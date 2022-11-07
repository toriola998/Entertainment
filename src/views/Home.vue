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
                <h1 id="trending">Trending</h1>
                <div>
                    <Trending />
                    <Trending />
                </div>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue'; // @ is an alias to /src
import Trending from '@/components/Trending.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TheNavBar,
    Trending
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
    padding: .6rem 0 1.5rem 0;

    &:focus-within {
        outline: 2px dashed $red;
    }

    input {
        width: 100%;
        padding-left: 1rem;
        color: #fff;
        outline: 0;
    }

    input::placeholder {
        font-weight: 300;
        color: #fff;
        opacity: 0.5;
    }
}

h1, h2 {
    font-size: 1.5rem;
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
</style>
