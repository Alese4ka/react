/* eslint-disable prettier/prettier */
import { PropsCard } from 'entities/main.interface';
import React from 'react';
import books from '../../entities/books';
import './Card.css';

function Card(props: PropsCard) {
  const { userInfo } = props;

  return (
    <div data-testid="cards" className="cards">
      {userInfo
        ? userInfo.map((element) => (
          <div className="card" key={element.id}>
            <div className="card-title">
              <div>{element.userSurname}</div>
              <div>{element.userName}</div>
            </div>
            <div className="card-author">Sex: {element.userSexValue}</div>
            <div className="card-author">Date of birth: {element.userDate}</div>
            <div className="card-author">Country: {element.userCountry}</div>
            <div className="card-info">
              <div>
                <img
                  className="card-info-img"
                  src={element.userPhoto || element.userCurrentPhoto}
                  alt={element.userName}
                />
              </div>
              <div className="card-author">Agree to data processing</div>
            </div>
          </div>
        ))
        : books.map((element) => (
          <div data-testid="cards" className="card" key={element.id}>
            <div className="card-title">
              <img src="./plus.svg" alt="add" />
              <div>{element.title}</div>
            </div>
            <div className="card-author">{element.author}</div>
            <div className="card-info">
              <div>
                <img className="card-info-img" src={element.img} alt={element.title} />
              </div>
              <div className="card-info-price">{element.price}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
