import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import Heart from "../common/heart";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/ListGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(), // => returns an array of movie objects
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(), // => return an array of genres
    moviesDisplay: paginate(getMovies(), 1, 4)
  };
// deletes the movie from the array when the delete button is clicked by the user
  deleteMovie = movie => {
    // returning an array with all the movie objects except movie
    const{currentPage, pageSize, movies} = this.state;
    const movieList = movies.filter(m => m._id !== movie._id);
    const moviesDisplay = paginate(movieList, currentPage, pageSize );
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
    const {pageSize, movies } = this.state;
   const moviesDisplayCopy = paginate(movies, page, pageSize);
   this.setState({ moviesDisplay: moviesDisplayCopy, currentPage: page });
  };

  handleGenreChange = (genre) => {
    const{movies} = this.state;
    const moviesGenre = movies.filter(movie => movie.genre.name == genre);
    this.setState({moviesDisplay: moviesGenre});
  };
  handleAllGenres = () => {
    const {movies} = this.state;
    this.setState({moviesDisplay: movies});
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies, genres, moviesDisplay } = this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;
    //const moviesList = paginate(movies, currentPage, pageSize);
    return (
      <React.Fragment>
        <p>Showing {count} in the database</p>
        <div className="float-right">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Number in Stock</th>
                <th scope="col">Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {moviesDisplay.map((movie, key) => (
                <tr key={key}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Heart
                      clicked={() => this.handleLike(movie)}
                      liked={movie.liked}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.deleteMovie(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
        <div className="float-left">
          <span className="border">
            <ListGroup 
            genres={genres} 
            onHandleGenre={this.handleGenreChange}
            onHandleAllGenres = {this.handleAllGenres} />
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
