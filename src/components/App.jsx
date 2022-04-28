import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  // изменение профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  // добавление карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // изменение аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  // удаление карточки
  const [isAreYouSurePopupOpen, setIsAreYouSurePopupOpen] =
    React.useState(false);

  // открытиие изображения
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAreYouSureClick() {
    setIsAreYouSurePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAreYouSurePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick} // редактирование профиля
        onAddPlace={handleAddPlaceClick} // добавление карточки
        onEditAvatar={handleEditAvatarClick} // изменение аватара
        onAreYouSure={handleAreYouSureClick} // удаление карточки
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        popupType={`profile`}
        title='Редактировать профиль'
        popupNameForm={`profile`}
        name={`profile`}
        submitButtonText='Сохранить'
        onClose={closeAllPopups}
      >
        <fieldset className='popup__fieldset'>
          <label className='popup__label'>
            <input
              type='text'
              className='popup__input popup__input_type_name'
              id='firstname'
              name='firstname'
              placeholder='Имя'
              minLength='2'
              maxLength='40'
              required
            />
            <span className='error' id='firstname-error'></span>
          </label>
          <label className='popup__label'>
            <input
              type='text'
              className='popup__input popup__input_type_about'
              id='description'
              name='description'
              placeholder='Профессия'
              minLength='2'
              maxLength='200'
              required
            />
            <span className='error' id='description-error'></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        popupType={`card`}
        title='Новое место'
        popupNameForm={`card`}
        name={`card`}
        submitButtonText='Создать'
        onClose={closeAllPopups}
      >
        <fieldset className='popup__fieldset'>
          <label className='popup__label'>
            <input
              type='text'
              className='popup__input popup__input_type_name'
              id='firstname'
              name='firstname'
              placeholder='Имя'
              minLength='2'
              maxLength='40'
              required
            />
            <span className='error' id='firstname-error'></span>
          </label>
          <label className='popup__label'>
            <input
              type='text'
              className='popup__input popup__input_type_about'
              id='description'
              name='description'
              placeholder='Профессия'
              minLength='2'
              maxLength='200'
              required
            />
            <span className='error' id='description-error'></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAreYouSurePopupOpen}
        popupType={`confirmation`}
        title='Вы уверены?'
        popupNameForm={`confirm`}
        name={`confirm`}
        submitButtonText='Да'
        onClose={closeAllPopups}
      ></PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        popupType={`avatar`}
        title='Обновить аватар'
        popupNameForm={`avatar`}
        name={`avatar`}
        submitButtonText='Сохранить'
        onClose={closeAllPopups}
      >
        <fieldset className='popup__fieldset'>
          <label className='popup__label'>
            <input
              type='url'
              className='popup__input popup__input_type_descr'
              id='avatar'
              name='link-avatar'
              placeholder='Ссылка на картинку'
              required
            />
            <span className='error' id='avatar-error'></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
