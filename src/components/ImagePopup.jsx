function ImagePopup({ card, onClose }) {
  console.log(card);

  return (
    <div className={`popup popup_img ${card.link && 'popup_opened'}`}>
      <div className='popup__image-container'>
        <img src={card.link} alt={card.name} className='popup__image' />
        <p className='popup__image-title'>{card.name}</p>
        <button
          className='popup__btn-close popup__btn-close_img'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
