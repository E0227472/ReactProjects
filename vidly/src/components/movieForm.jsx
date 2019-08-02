import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { saveMovie, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    // data will be the movie object
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    console.log(movieId);
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),

    genreId: Joi.string()
      .required()
      .label("Genre"),

    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Stock Number"),

    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Rate")
  };
  // method to add data to the fake movies array
  doSubmit = () => {
    const { data } = this.state;
    saveMovie(data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/**Extract out the input field of label and input so that can reuse*/}
          {this.renderInput("title", "Title")}
          {this.renderDropDown("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
