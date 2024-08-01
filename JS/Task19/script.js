
async function fetchMovies() {

    const apiUrl = 'https://www.omdbapi.com/?s=Batman&apikey=9b963f1c';
    try {
        const response = await axios(apiUrl);
        console.log(response.data);
        if (response.data.Response === "True") {
            displayMovies(response.data.Search);
        } else {
            console.error('Error fetching movies:', response.Error);
        }
    }
    catch (error) { console.error('Error:', error) }
}

// Function to display movies
function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
        <img class="movie-poster" src=${movie.Poster} alt=${movie.Title}/>
            <div class="movie-title">${movie.Title}</div>
            <div class="movie-year">${movie.Year}</div>
        `;

        movieContainer.appendChild(movieCard);
    });
}

// Callback function to add a movie
function addMovieCallback(title, year, poster, callback) {
    const newMovie = {
        Title: title,
        Year: year,
        Poster: poster
    };
    callback(newMovie);
}

// Function to display added movie
function displayAddedMovie(movie) {
    const movieContainer = document.getElementById('movie-container');
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    movieCard.innerHTML = `
    <img class="movie-poster" src=${movie.Poster} alt=${movie.Title}/>
        <div class="movie-title">${movie.Title}</div>
        <div class="movie-year">${movie.Year}</div>
    `;

    movieContainer.appendChild(movieCard);
}

// Event listener for form submission
document.getElementById('movie-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const poster = document.getElementById('poster').value;

    addMovieCallback(title, year, poster, displayAddedMovie);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.getElementById('poster').value = '';
});

// Fetch movies on page load
fetchMovies();
