import React from 'react';
import remove_img from '../images/remove_img.png';

const Card = ({ card, onCardClick }) => {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <figure className='element'>
      <img
        src={card.link}
        alt={card.name}
        className='element__img'
        onClick={handleClick}
      />
      <img
        src={remove_img}
        alt='Удаление изображения'
        className='element__img_remove'
      />
      <figcaption className='element__group'>
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__like'>
          <button className='element__like-btn' type='button'></button>
          <p className='element__like-count'>0</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
