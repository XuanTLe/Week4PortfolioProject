import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import GitRe from '../img/git.png';
import Weather from '../img/weather.png';
import Task from '../img/task.png';
import '../App.css';
function Projects() {
  return (
    <>
      <div className="titleProject">
        <h1>My Projects</h1>
      </div>
      <Container className="gridStyle2">
        <Row className="pro">
          <Col lg={4}>
            <Card
              className="cardStyle"
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weather App
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  bg="dark"
                  text="light"
                  image={Weather}
                />
                <CardContent className="par">
                  <Typography variant="body1" color="light" component="p">
                    A responsive web app that allows users search for a city’s
                    temperature, description of the weather, feels like, etc.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="buttonCard" size="large" color="light">
                    <a href="https://xuantle.github.io/WeatherApp/">
                      Go to App
                    </a>
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className="cardStyle"
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Github Finder
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  bg="dark"
                  text="light"
                  image={GitRe}
                />
                <CardContent>
                  <Typography variant="body1" color="light" component="p">
                    A responsive web app that allows people to find any GitHub
                    user and their information.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="dark" className="buttonCard">
                  <a href="https://xuantle.github.io/GitHubFinder/">
                    Go to App
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="cardStyle"
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    To-do List
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  bg="dark"
                  text="light"
                  image={Task}
                />
                <CardContent>
                  <Typography variant="body1" color="light" component="p">
                    A to-do list app that lets user add new task, remove a task,
                    and delete all task
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="buttonCard" size="large" color="light">
                  <a href="https://xuantle.github.io/">Go to App</a>
                </Button>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
