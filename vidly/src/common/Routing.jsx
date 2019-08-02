import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../components/NotFound";
import Customers from "../components/customers";
import Rentals from "../components/rentals";
import Movies from "../components/Movies";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import MovieForm from "../components/movieForm";

const Routing = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/movies/:id" component={MovieForm} />
        <Route
          path="/movies/new"
          component= {MovieForm}
        />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
};

export default Routing;
