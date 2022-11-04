<template>
    <div class="nav-bar">
        <router-link to="/">
            <img src="@/assets/logo.svg" alt="Home - Entertainment app" />        
        </router-link>

        <div class="icon-nav">
            <button>
                <img src="@/assets/icon-nav-home.svg" alt="Home screen" />
            </button>

            <button>
                <img src="@/assets/icon-nav-movies.svg" alt="See more movies" />
            </button>

            <button>
                <img src="@/assets/icon-nav-tv-series.svg" alt="Click to see tv series" />
            </button>

            <button>
                <img src="@/assets/icon-nav-bookmark.svg" alt="Click to check your bookmarks" />
            </button>
        </div>

        <button>
            <img src="@/assets/image-avatar.png" 
                alt="Your image" 
                height="30" 
                image="30"
                />
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheNavBar',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../styles/main";
.nav-bar {
    background-color: $semi-dark-blue;
    padding: 1rem;
    @include flex($flex_position: space-between); 
}

.icon-nav {

    button:nth-child(2){
        margin: 0 1.1rem;
    }

    button:nth-child(3) {
        margin-right: 1.1rem;
    }
}
</style>
