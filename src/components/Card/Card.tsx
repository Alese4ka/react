/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import { PropsCard, RickMortyType } from 'entities/main.interface';
import React, { useState } from 'react';
import MyLoader from "../Loader/Loader";
import './Card.css';
import CardModal from "../CardModal/CardModal";

const Card = (props: PropsCard) => {
  const { userInfo } = props;
  const { characterInfo, isLoading } = props;
  const [modalActive, setModalActive] = useState(false);
  const [, setIsError] = useState('');
  const [character, setCharacter] = useState<RickMortyType>({
    id: 0,
    name: '',
    species: '',
    status: '',
    gender: '',
    image: '',
    created: '',
    episode: ['', ''],
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: ''
    },
  });

  const loadCharacters = (name?: string, id?: number) => {
    fetch(
      name
        ? id
          ? `https://rickandmortyapi.com/api/character/${id}`
          : `https://rickandmortyapi.com/api/character?name=${name}`
        : 'https://rickandmortyapi.com/api/character'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCharacter(result);
        },
        (error) => {
          setIsError(error);
        }
      );
  };

  const openModal: React.MouseEventHandler = (event: React.MouseEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).src;
    const currentCharacter = characterInfo?.find((element) => element.image === value)
    loadCharacters(currentCharacter?.name, currentCharacter?.id);
    setModalActive(true);
  }

  return (
    <>
      {isLoading ? <MyLoader /> :
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
                      alt={element.userName} />
                  </div>
                  <div className="card-author">Agree to data processing</div>
                </div>
              </div>
            ))
            : <div data-testid="cards" className="cards">
              {characterInfo
                ?
                characterInfo!.map((element) => (
                  <div data-testid="cards" className="card" key={element.id}>
                    <div className="card-title">
                      <div>{element.name}</div>
                    </div>
                    <div className="card-author">{element.status}</div>
                    <div className="card-info">
                      <div className="click-img" onClick={openModal}>
                        <img className="card-info-img" src={element.image} alt="character_picture" />
                      </div>
                    </div>
                  </div>
                ))
                : <div>Nothing found</div>
              }
            </div>
          }
        </div>
      }
      <CardModal active={modalActive} setActive={setModalActive} character={character} />
    </>
  );
}

export default Card;


