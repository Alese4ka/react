/* eslint-disable prettier/prettier */
import { PropsCard } from 'entities/main.interface';
import React from 'react';
import './Card.css';

const Card = (props: PropsCard) => {
  const { userInfo } = props;
  const { characterInfo } = props;

  return (
    <div data-testid="cards" className="cards">
      {userInfo
        ? userInfo!.map((element) => (
          <div className="card" key={element.id}>
            <div className="card-title">
              <div>{element.userSurname}</div>
              <div>{element.userName}</div>
            </div>
            <div className="card-author">Sex: {element.userSex}</div>
            <div className="card-author">Date of birth: {element.userDate}</div>
            <div className="card-author">Country: {element.userCountry}</div>
            <div className="card-info">
              <div>
                <img
                  className="card-info-img"
                  src={element.userPhoto as string}
                  alt={element.userName}
                />
              </div>
              <div className="card-author">Agree to data processing</div>
            </div>
          </div>
        ))
        : characterInfo!.map((element) => (
          <div data-testid="cards" className="card" key={element.id}>
            <div className="card-title">
              <div>{element.name}</div>
            </div>
            <div className="card-author">{element.status}</div>
            <div className="card-info">
              <div>
                <img className="card-info-img" src={element.image} alt="character_picture" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
