import React, { Component } from "react";

const listGroup = props => {
  const { genres, onHandleGenre, onHandleAllGenres } = props;
  return (
    <ul className="list-group">
      <li
        className="list-group-item"
        style={{ cursor: "pointer" }}
        onClick={onHandleAllGenres}
      >
        All Genres
      </li>
      {genres.map(genre => (
        <li
          key={genre._id}
          onClick={() => onHandleGenre(genre.name)}
          className="list-group-item"
          style={{ cursor: "pointer" }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default listGroup;
