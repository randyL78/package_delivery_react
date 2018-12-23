import React from 'react';
import StaticForm from './StaticForm';
import DisplayWidget from './DisplayWidget';

const Home = props => 
  <main className="page-limited grid_container">
    <StaticForm />
    <DisplayWidget title="Package is scheduled to arrive on:" info={props.currentPackage.schedule} />
    <DisplayWidget title="Weather at time of delivery will be:" info={props.currentPackage.weather}/>
  </main>;

export default Home;