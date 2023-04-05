/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './CardModal.css';
import { RickMortyType } from 'entities/main.interface';

export interface CardModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  character: RickMortyType;
}

const CardModal = (props: CardModalProps) => {
  const { active, setActive, character } = props;

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box">
          <div className="modal-box-name">
            <div className="modal-box-name-title">{character.name}</div>
            <img src={character.image} alt="character_picture" />
          </div>
          <div className="modal-box-info">
            <div>
              Status: <p className="modal-box-info-span">{character.status}</p>
            </div>
            <div>
              Species: <p className="modal-box-info-span">{character.species}</p>
            </div>
            <div>
              Gender: <p className="modal-box-info-span">{character.gender}</p>
            </div>
            <div>
              Created: <p className="modal-box-info-span">{character.created}</p>
            </div>
            <div>
              Episode: <p className="modal-box-info-span">{character.episode}</p>
            </div>
            {/* {/* <div>{character.location}</div> */}
            {/* <div>{character.origin as unknown as LocationType}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
