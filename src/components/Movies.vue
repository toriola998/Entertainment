<template>
    <article class="movies">
        <div class="movie">
            <button>
                <img 
                    src="@/assets/icon-bookmark-empty.svg" 
                    alt="Bookmark this movie" />
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
        width: 30%;
    }
}
</style>