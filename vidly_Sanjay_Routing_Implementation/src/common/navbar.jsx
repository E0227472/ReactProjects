import React from "react";
import { NavLink } from "react-router-dom";
import MoviesPage from "../components/moviesPage";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-link" to="/">
        Vidly 
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <NavLink className="nav-link" to="/movies">
              Movies <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals <span class="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
