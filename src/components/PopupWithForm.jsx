import React from 'react';

const PopupWithForm = ({
  popupType,
  isOpen,
  title,
  popupNameForm,
  name,
  children,
  submitButtonText,
  onClose,
}) => {
  return (
    <div
      className={`popup popup_${popupType} ${isOpen ? 'popup_opened' : null}`}
    >
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <form
          className={`popup__form popup__form_${popupNameForm}`}
          name={name}
          noValidate
        >
          {children}
          <button
            className='popup__btn-save'
            type='submit'
            data-value={submitButtonText}
          >
            {submitButtonText}
          </button>
        </form>
        <button
          className='popup__btn-close'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupWithForm;

/* <div className='popup popup_profile'>
  <div className='popup__container'>
    <h2 className='popup__title'>Редактировать профиль</h2>
    <form className='popup__form popup__form_profile' name='profile' novalidate>
      <fieldset className='popup__fieldset'>
        <label className='popup__label'>
          <input
            type='text'
            className='popup__input popup__input_type_name'
            id='firstname'
            name='firstname'
            placeholder='Имя'
            minlength='2'
            maxlength='40'
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
            minlength='2'
            maxlength='200'
            required
          />
          <span className='error' id='description-error'></span>
        </label>
      </fieldset>
      <button className='popup__btn-save' type='submit'>
        Сохранить
      </button>
    </form>
    <button className='popup__btn-close' type='button'></button>
  </div>
</div>;
 */
