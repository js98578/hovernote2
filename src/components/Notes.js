import React from 'react';
import * as Space from 'react-spaces';
import Left from './Left';

export const Notes = () => {
  return (
    <>
      <Space.ViewPort>
        <Space.LeftResizable scrollable={true} size="15%">
          <Left />
        </Space.LeftResizable>
        <Space.Fill scrollable={true}>
          <div className="border-l border-gray-200 h-screen"></div>
        </Space.Fill>
        <Space.Right scrollable={true} size="50%">
          <div className="border-l border-gray-200 h-screen"></div>
        </Space.Right>
      </Space.ViewPort>
    </>
  );
};
