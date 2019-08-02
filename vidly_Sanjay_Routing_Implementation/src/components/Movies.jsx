import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [], // => returns an array of movie objects
    pageSize: 4,
    currentPage: 1,
    genres: [], // => return an array of genres
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" }
  };
  // set state over here as react can render dom while the data is being fetched
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  // deletes the movie from the array when the delete button is clicked by the user
  deleteMovie = movie => {
    // returning an array with all the movie objects except movie
    const { currentPage, pageSize, movies } = this.state;
    const movieList = movies.filter(m => m._id !== movie._id);
    const moviesDisplay = paginate(movieList, currentPage, pageSize);
    this.setState({ movies: movieList, moviesDisplay: moviesDisplay });
  };
  // handle the heart shaped button changing color and shape when clicked
  handleLike = movie => {
    const { movies } = this.state;
    var moviesCopy = [...movies];
    const index = moviesCopy.indexOf(movie);
    moviesCopy[index].liked = !moviesCopy[index].liked;
    this.setState({ movies: moviesCopy });
  };
  // sets the current page
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  // sets the genre name and current page as 1 when filter clicked.
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(genre.name);
  };
  //sorts the column either by asc or desc using lodash library's sorting feature
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // 1. method filters the movies if the user selects a genre, otherwise all movies displayed
  // 2. only paginated movies are displayed
  // 3. returns an annonymous object with 2 properties
  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      movies,
      selectedGenre,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(m => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const moviesList = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: moviesList };
  };
  render() {
    const { length: count } = this.state.movies;
    const { genres, selectedGenre } = this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedGenre={selectedGenre}
            onitemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} in the database</p>
          <MoviesTable
            movies={data}
            onDelete={this.deleteMovie}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
