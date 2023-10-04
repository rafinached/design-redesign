import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Part1 from "../pages/part1";
import Part2 from "../pages/part2";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/part1" component={Part1} />
      <Route path="/part2" component={Part2} />
    </Switch>
);
