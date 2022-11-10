<template>
    <article class="movies">
        <div class="movie">
            <button>
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                    stroke="#FFF" stroke-width="1.5" fill="none"/>
                </svg>
            </button>
        </div> 
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

<style lang="scss" scoped>
article  {
    width: 47%;
    .movie {
        background-image: url('./../assets/thumbnails/112/regular/small.jpg');
        margin-bottom: 1rem;
    }
}

@media screen and (min-width: 700px){
    article  { 
        width: 220px;
    }
}

@media screen and (min-width: 1200px){
    article  { 
        width: 280px;
    }
}
</style>