const movieTitle = document.querySelector("#movie-title")
const movieGenre = document.querySelector("#movie-genre")
const movieYear = document.querySelector("#movie-year")
const addBtn = document.querySelector("#add-btn")

const starPicker = document.querySelectorAll(".star")
const ratingVal = document.querySelector("#rating-val")

const searchInput = document.querySelector("#search-input")
const sortSelect = document.querySelector("#sort-select")

const movieList = document.querySelector("#movie-list")
const movieCount = document.querySelector("#movie-count")
const avgRating = document.querySelector("#avg-rating")

let movies = []
let rating = 0

starPicker.forEach(function(star) {
  star.addEventListener("click", function() {
    rating = Number(star.dataset.val)
    ratingVal.textContent = rating + " / 5"

    starPicker.forEach(function(item) {
      if (Number(item.dataset.val) <= rating) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  })
})

addBtn.addEventListener("click", function() {
  const title = movieTitle.value
  const genre = movieGenre.value
  const year = movieYear.value

  if (title === "" || year === "" || rating === 0) {
    alert("Please enter the movie, year and rating")
    return
  }

  const movie = {
    title: title,
    genre: genre,
    year: Number(year),
    rating: rating
  }

  movies.push(movie)
  displayMovies()

  movieTitle.value = ""
  movieYear.value = ""
  rating = 0
  ratingVal.textContent = "0 / 5"

  starPicker.forEach(function(star) {
    star.classList.remove("active")
  })
})

function displayMovies() {
  movieList.innerHTML = ""

  if (movies.length === 0) {
    movieList.innerHTML = `
      <p class="empty-msg">Add your first movie above!</p>
    `
    updateStats()
    return
  }

  movies.forEach(function(movie, index) {
    const card = document.createElement("div")

    card.classList.add("movie-card")

    card.innerHTML = `
      <div class="movie-rank">${index + 1}</div>

      <div class="movie-info">
        <div class="movie-title-text">${movie.title}</div>

        <div class="movie-meta">
          <span class="movie-year">${movie.year}</span>
          <span class="movie-genre">${movie.genre}</span>

          <span class="movie-stars">
            ${"★".repeat(movie.rating)}
            <span class="empty-star">${"★".repeat(5 - movie.rating)}</span>
          </span>
        </div>
      </div>

      <button class="movie-delete" onclick="deleteMovie(${index})">×</button>
    `

    movieList.appendChild(card)
  })

  updateStats()
}

function deleteMovie(index) {
  movies.splice(index, 1)
  displayMovies()
}

function updateStats() {
  movieCount.textContent = movies.length + " movies"

  if (movies.length === 0) {
    avgRating.textContent = "Avg: —"
    return
  }

  let total = 0

  movies.forEach(function(movie) {
    total = total + movie.rating
  })

  const average = total / movies.length
  avgRating.textContent = "Avg: " + average.toFixed(1) + " ★"
}

searchInput.addEventListener("input", function() {
  const query = searchInput.value.toLowerCase()

  const filteredMovies = movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(query)
  })

  displayFilteredMovies(filteredMovies)
})

function displayFilteredMovies(movieArray) {
  movieList.innerHTML = ""

  if (movieArray.length === 0) {
    movieList.innerHTML = `
      <p class="empty-msg">No movies found.</p>
    `
    return
  }

  movieArray.forEach(function(movie, index) {
    const card = document.createElement("div")

    card.classList.add("movie-card")

    card.innerHTML = `
      <div class="movie-rank">#${index + 1}</div>

      <div class="movie-info">
        <div class="movie-title-text">${movie.title}</div>

        <div class="movie-meta">
          <span class="movie-year">${movie.year}</span>
          <span class="movie-genre">${movie.genre}</span>

          <span class="movie-stars">
            ${"★".repeat(movie.rating)}
            <span class="empty-star">${"★".repeat(5 - movie.rating)}</span>
          </span>
        </div>
      </div>
    `

    movieList.appendChild(card)
  })
}

sortSelect.addEventListener("change", function() {
  if (sortSelect.value === "newest") {
    movies.sort(function(a, b) {
      return b.year - a.year
    })
  }

  if (sortSelect.value === "oldest") {
    movies.sort(function(a, b) {
      return a.year - b.year
    })
  }

  if (sortSelect.value === "rating-high") {
    movies.sort(function(a, b) {
      return b.rating - a.rating
    })
  }

  if (sortSelect.value === "rating-low") {
    movies.sort(function(a, b) {
      return a.rating - b.rating
    })
  }

  if (sortSelect.value === "az") {
    movies.sort(function(a, b) {
      return a.title.localeCompare(b.title)
    })
  }

  displayMovies()
})