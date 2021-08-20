import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import About from './About';
import { Redirect, useHistory } from 'react-router-dom';

function Home() {
  // const [isHome, setHome] = useState(true);

  // if (!isHome) {
  //   return <Redirect to="/about" />;
  // }
  const history = useHistory();

  const routeChange = () => {
    let path = `/about`;
    history.push(path);
  };
  const [button] = useState(true);

  return (
    <div id="homePage" className="page-heading">
      <h1>Jenna Le</h1>
      <hr />
      <h3>Hello, I am a full-stack Java web developer</h3>
      <hr />
      <hr />
      <Button
        className="homeButton"
        size="small"
        color="light"
        style={{ backgroundColor: 'black', color: 'white' }}
        // onClick={() => setHome(false)}
        onClick={routeChange}
      >
        Check My Work
      </Button>
    </div>
  );
}

export default Home;
