<template>
    <router-view/>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }

    button,
    input {
        background: none;
        border: 0;
    }

    button:focus {
        outline: 2px dashed $red;
    } 

    .trending,
    article .movie {
        background-repeat: no-repeat;
        background-size: cover;
        height: 10rem;
        position: relative;
        border-radius: 15px;
    }

    .trending,
    .movies{
        h3 {
            font-weight: 500;
            font-size: 1.05rem;
        }

        h3, p {
            color: #fff;
        }

        p {
            opacity: 0.75;
            font-weight: 300;

            span:nth-child(2)::before,
            span:nth-child(2)::after {
                content: "";
                display: inline-flex;
                height: .25rem;
                width: .25rem;
                background: #FFFFFF;
                mix-blend-mode: normal;
                opacity: 0.5;
                border-radius: 25px;
                margin: 0 .4rem;
            }
        }

        span img { margin-right: .4rem; }

        button {
            background: #10141E;
            // mix-blend-mode: normal;
            // opacity: 0.5;
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    props: {
        // msg: String,
    },
});
</script>