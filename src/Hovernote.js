import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import {Login} from "./components/Login";
import {Notes} from "./components/Notes";

export const Hovernote = () => {
  return (
    <Router>
      <Route path="/login/" component={Login} />
      <Route path="/notes/" component={Notes} />
    </Router>
  )
}
