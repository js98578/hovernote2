import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import * as Space from 'react-spaces';
import {Left} from "./Left";

export const Notes = () => {
  return (
    <React.Fragment>
      <Space.ViewPort>
        <Space.LeftResizable scrollable={true} size="20%">
          <Left/>
        </Space.LeftResizable>
        <Space.Fill scrollable={true}>
          2
        </Space.Fill>
        <Space.Right scrollable={true} size="50%">
          3
        </Space.Right>
      </Space.ViewPort>

    </React.Fragment>
  )
}
