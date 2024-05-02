let films = [];

function addFilm() {
    const titleInput = document.getElementById('title');
    const genreInput = document.getElementById('genre');
    const yearInput = document.getElementById('year');
    const ratingInput = document.getElementById('rating');

    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const year = parseInt(yearInput.value);
    const rating = ratingInput.value.trim();

    if (!title || !genre || isNaN(year) || !rating) {
        alert('Требуется корректно заполнить поля!');
        return;
    }

    const film = {
        title: title,
        genre: genre,
        year: year,
        rating: rating,
        displayInfo: function () {
            return `${this.title} ${this.genre} (${this.year}), Рейтинг: ${this.rating}`;
        }
    };

    films.push(film);
    updateFilmList();
    titleInput.value = '';
    genreInput.value = '';
    yearInput.value = '';
    ratingInput.value = '';
}

function updateFilmList() {
    const filmList = document.getElementById('film-list');
    filmList.innerHTML = '';
    films.forEach((film, index) => {
        const li = document.createElement('li');
        li.classList.add('film-item');
        li.textContent = film.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = function() {
            editFilm(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            deleteFilm(index);
        };
        li.appendChild(deleteButton);

        filmList.appendChild(li);
    });
}

function editFilm(index) {
    const film = films[index];
    const newTitle = prompt('Введите название фильма:', film.title);
    const newGenre = prompt('Введите жанр фильма:', film.genre);
    const newYear = parseInt(prompt('Введите год выпуска фильма:', film.year));
    const newRating = prompt('Введите рейтинг фильма:', film.rating);

    if (!newTitle || !newGenre || isNaN(newYear) || !newRating) {
        alert('Требуется корректно заполнить все поля!');
        return;
    }

    film.title = newTitle;
    film.genre = newGenre;
    film.year = newYear;
    film.rating = newRating;

    updateFilmList();
}

function deleteFilm(index) {
    films.splice(index, 1);
    updateFilmList();
}