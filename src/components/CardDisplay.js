import React, { useState, useEffect } from 'react';
import Ghibli from '../img/ghibli.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { ImagesList } from './ImagesList';
export default function CardDisplay() {
  const items = [];

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((films) => {
        for (const film of films) {
          if (film.title === 'My Neighbor Totoro') {
            items.push(film);
          } else if (film.title === "Kiki's Delivery Service") {
            items.push(film);
          } else if (film.title === 'Princess Mononoke') {
            items.push(film);
          } else if (film.title === 'Spirited Away') {
            items.push(film);
          } else if (film.title === "Howl's Moving Castle") {
            items.push(film);
          } else if (film.title === 'Ponyo') {
            items.push(film);
          }
        }
        console.log(items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function cardDesign() {
    for (let i = 0; i < 6; i++) {
      const design = items.map((id) => {
        return (
          <Card key={id}>
            <CardActionArea>
              <CardMedia image={ImagesList[i]} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {items.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {items[i].description.substring(0, 200)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                `Director: {items[i].director}`
              </Typography>
            </CardActions>
          </Card>
        );
      });
    }
  }
  return cardDesign;
}
