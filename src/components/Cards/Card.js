// == Import npm
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// == Import
import './cards.scss';

// == Composant
const Card = () => (
  <div className="card-component">
    <h2 className="card-title">Les Indestructibles 2</h2>
    <div className="card-category">
      Catégorie
    </div>
    <div className="card-thumbup">
      <ThumbUpIcon />
    </div>
    <div className="card-thumbup">
      <ThumbDownIcon />
    </div>
    <DeleteForeverIcon />
    <div className="card-like-dislike-ratio">
      <div />
    </div>
  </div>
);

// == Export
export default Card;
