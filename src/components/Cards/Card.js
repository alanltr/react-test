// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// == Composant
const Card = ({
  title,
  category,
  likes,
  dislikes,
}) => {
  const likePercentage = `${Math.round(((likes / (likes + dislikes)) * 100))}%`;

  return (
    <div className="card-component">
      <h2 className="card-title">{title}</h2>
      <div className="card-category">
        {category}
      </div>
      <button type="button" className="card-thumbup">
        <ThumbUpIcon />
      </button>
      <button type="button" className="card-thumbdown">
        <ThumbDownIcon />
      </button>
      <button type="button" className="card-delete">
        <DeleteForeverIcon />
      </button>
      <div className="card-like-dislike-ratio">
        <div style={{ width: `${likePercentage}` }} />
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

// == Export
export default Card;
