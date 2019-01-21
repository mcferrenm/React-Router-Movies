import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movie/${movie.id}`}
          className="saved-movie"
          key={movie.id}
        >
          {movie.title}
        </NavLink>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;
