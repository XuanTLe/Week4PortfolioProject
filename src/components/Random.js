import React, { useState, useEffect } from 'react';
import Ghibli from '../img/ghibli.jpg';
import { Container, Row, Col } from 'react-grid-system';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { ImagesList } from './ImagesList';

export default function Random(props) {
  const [isHover, setHover] = useState(false);

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((films) => {
        for (const film of films) {
          if (film.title === 'My Neighbor Totoro') {
            setItems([
              ...items,
              {
                id: film.id,
                description: film.description,
                director: film.director,
              },
            ]);
          } else if (film.title === "Kiki's Delivery Service") {
            setItems([
              ...items,
              {
                id: film.id,
                description: film.description,
                director: film.director,
              },
            ]);
          } else if (film.title === 'Princess Mononoke') {
            setItems([
              ...items,
              {
                id: film.id,
                description: film.description,
                director: film.director,
              },
            ]);
          } else if (film.title === 'Spirited Away') {
            setItems([
              ...items,
              {
                id: film.id,
                description: film.description,
                director: film.director,
              },
            ]);
          } else if (film.title === "Howl's Moving Castle") {
            setItems([
              ...items,
              {
                id: film.id,
                description: film.description,
                director: film.director,
              },
            ]);
          } else if (film.title === 'Ponyo') {
            setItems([
              ...items,
              {
                id: film.id,
                description: film.description,
                director: film.director,
              },
            ]);
          }
        }
        console.log(items);
        console.log(items[0].title);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      <h1 className="titleRand">~~ Ghibli Studio is What I Love ~~</h1>;
      <div className="logo">
        <img src={Ghibli} width="100" height="100" />
        <p></p>
      </div>
      {/* <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <CardActionArea>
                <CardMedia image={ImagesList[0]} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    `Tiltle ${items[0].title}`
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {items[0].description.substring(0, 200)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                  `Director: {items[0].director}`
                </Typography>
              </CardActions>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <CardActionArea>
                <CardMedia image={ImagesList[1]} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items[1].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {items[1].description.substring(0, 200)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                  `Director: {items[1].director}`
                </Typography>
              </CardActions>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <CardActionArea>
                <CardMedia image={ImagesList[2]} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items[2].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {items[2].description.substring(0, 200)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                  `Director: {items[2].director}`
                </Typography>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Col lg={4} md={6} sm={12}>
          <Card>
            <CardActionArea>
              <CardMedia image={ImagesList[3]} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {items[3].title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {items[3].description.substring(0, 200)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                `Director: {items[3].director}`
              </Typography>
            </CardActions>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card>
            <CardActionArea>
              <CardMedia image={ImagesList[4]} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {items[4].title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {items[4].description.substring(0, 200)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                `Director: {items[4].director}`
              </Typography>
            </CardActions>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card>
            <CardActionArea>
              <CardMedia image={ImagesList[5]} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {items[5].title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {items[5].description.substring(0, 200)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                `Director: {items[5].director}`
              </Typography>
            </CardActions>
          </Card>
        </Col>
        <Row></Row>
      </Container> */}
    </>
  );
}
