import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import * as Space from 'react-spaces';

export const Notes = () => {
  return (
    <React.Fragment>
      <Space.ViewPort>
        <Space.Left size="20%">
          1
        </Space.Left>
        <Space.Fill>
          2
        </Space.Fill>
        <Space.Right size="50%">
          3
        </Space.Right>
      </Space.ViewPort>

    </React.Fragment>
  )
}
