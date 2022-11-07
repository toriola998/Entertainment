<template>
    <div class="home"> 
        <TheNavBar />
        <div class="home-inner">
            <div class="input-wrap">
                <img src="@/assets/icon-search.svg" 
                    alt="" 
                    role="presentation" 
                    height="20" />
                <input placeholder="Search for movies or TV series" type="text" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    TheNavBar,
  },
});
</script>

<style lang="scss" scoped>

.home  {
    background-color: $dark-blue;
    min-height: 100vh;
    width:  100vw;

    .home-inner { padding: 1rem; }
}

.input-wrap {
    @include flex(unset);
    padding: .3rem 0;
    
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
</style>
