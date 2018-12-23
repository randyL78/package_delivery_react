import React from 'react';

const Container = props => 
  <main className="page-limited">
    <h1>{props.title || "Welcome"}</h1>
  </main>;

export default Container;