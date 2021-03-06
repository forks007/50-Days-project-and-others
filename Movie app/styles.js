const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b784331f5f76fa010afe28bf3272de08&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b784331f5f76fa010afe28bf3272de08&query="'


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const title = document.getElementById('title')

title.addEventListener('click',()=>{
    window.location.reload()
    
})

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)

}
function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {title , poster_path, vote_average, overview} = movie
        movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByVote(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`
        main.appendChild(movieEl)
        
    });
}

function getClassByVote(vote) {
    let color = ''
    if(vote>= 8){
         color = 'green'
    }else if(vote>=5){
        color = 'orange'
    }else{
        color ='red'
    }
    return color
}

form.addEventListener('submit',(e)=> {
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }
})