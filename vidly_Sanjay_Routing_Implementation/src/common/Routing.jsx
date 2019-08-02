import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../components/NotFound";
import MoviesPage from "../components/moviesPage";
import CustomersPage from "../components/customersPage";
import RentalPage from "../components/rentalPage";
import Movies from "../components/Movies";
import MovieSpecificPage from "../components/MovieSpecificPage";

const Routing = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/movies/:id" component={MovieSpecificPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/customers" component={CustomersPage} />
        <Route path="/rentals" component={RentalPage} />
        <Route path="/" exact component={Movies} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default Routing;
