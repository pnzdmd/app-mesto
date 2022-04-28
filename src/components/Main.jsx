import React, { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  //const [userName, setUserName] = useState({});
  //const [userDescription, setuserDescription] = useState({});
  //const [userAvatar, setuserAvatar] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then((res) => {
        setCurrentUser(res[0]);
        setCards(res[1]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container'>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className='profile__avatar'
          />
          <button
            className='profile__avatar-edit'
            type='button'
            title='Обновить аватар'
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{currentUser.name}</h1>
          <button
            className='profile__btn-edit'
            type='button'
            onClick={props.onEditProfile}
          ></button>
          <p className='profile__about'>{currentUser.about}</p>
        </div>
        <button
          className='profile__btn-add'
          type='button'
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {cards.map((item) => (
            <Card key={item._id} card={item} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
