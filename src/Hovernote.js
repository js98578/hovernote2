import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import {Login} from "./Login";
import {Notes} from "./Notes";

export const Hovernote = () => {
  return (
    <Router>
      <Route path="/login/" component={Login} />
      <Route path="/notes/" component={Notes} />
    </Router>
  )
}
