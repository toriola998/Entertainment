<template>
    <nav class="nav-bar">
        <div>
            <router-link to="/">
                <img src="@/assets/logo.svg" alt="Home - Entertainment app" />        
            </router-link>

            <ul class="icon-nav">
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
            </ul>

            <button>
                <img src="@/assets/image-avatar.png" 
                    alt="Your image" 
                    height="30" 
                    image="30"
                    />
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheNavBar',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">  
.nav-bar {
    >div{
        background-color: $semi-dark-blue;
        padding: 1rem;
        @include flex($flex_position: space-between); 
    }
}

.icon-nav {
    button:nth-child(2){
        margin: 0 1.1rem;
    }

    button:nth-child(3) {
        margin-right: 1.1rem;
    }
}

@media screen and (min-width: 650px){  
    .nav-bar {
        padding: 1rem;
        
        >div {  
            border-radius: 20px;
        }
    }

    .icon-nav {
    button:nth-child(2){
        margin: 0 1.8rem;
    }

    button:nth-child(3) {
        margin-right: 1.8rem;
    }
}
}
</style>
