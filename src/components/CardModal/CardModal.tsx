/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './CardModal.css';
import characterAPI from '../../services/CharacterService';

export interface CardModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

const CardModal = (props: CardModalProps) => {
  const { active, setActive, id } = props;
  const { data } = characterAPI.useFetchCharacterIdQuery(id);

  return (
    <div
      data-testid="card-modal"
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box">
          <div className="modal-box-name">
            <div className="modal-box-name-title">{data?.name}</div>
            <img src={data?.image} alt="character_picture" />
          </div>
          <div className="modal-box-info">
            <div>
              Status: <p className="modal-box-info-span">{data?.status}</p>
            </div>
            <div>
              Species: <p className="modal-box-info-span">{data?.species}</p>
            </div>
            <div>
              Gender: <p className="modal-box-info-span">{data?.gender}</p>
            </div>
            <div>
              Created: <p className="modal-box-info-span">{data?.created}</p>
            </div>
            <div>
              Episode: <p className="modal-box-info-span">{data?.episode}</p>
            </div>
            <div>
              Location: <p className="modal-box-info-span">{data?.location.name}</p>
            </div>
            <div>
              Origin: <p className="modal-box-info-span">{data?.origin.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
