/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PropsCard } from 'entities/main.interface';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCharacterModal } from '../../store/reducers/ActionCreators';
import MyLoader from '../Loader/Loader';
import './Card.css';
import CardModal from '../CardModal/CardModal';

const Card = (props: PropsCard) => {
  const dispatch = useAppDispatch();
  const { character } = useAppSelector((state) => state.characterReducer);

  const { userInfo } = props;
  const { characterInfo, isLoading } = props;
  const [modalActive, setModalActive] = useState(false);

  const openModal: React.MouseEventHandler = (event: React.MouseEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).src;
    const currentCharacter = characterInfo?.find((element) => element.image === value);
    dispatch(fetchCharacterModal(currentCharacter?.name, currentCharacter?.id));
    setModalActive(true);
  };

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div data-testid="cards" className="cards">
          {userInfo ? (
            userInfo!.map((element) => (
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
          ) : (
            <div data-testid="cards" className="cards">
              {characterInfo ? (
                characterInfo!.map((element) => (
                  <div data-testid="cards" className="card" key={element.id}>
                    <div className="card-title">
                      <div>{element.name}</div>
                    </div>
                    <div className="card-author">{element.status}</div>
                    <div className="card-info">
                      <div className="click-img" onClick={openModal}>
                        <img
                          className="card-info-img"
                          src={element.image}
                          alt="character_picture"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>Nothing found</div>
              )}
            </div>
          )}
        </div>
      )}
      <CardModal active={modalActive} setActive={setModalActive} character={character} />
    </>
  );
};

export default Card;
