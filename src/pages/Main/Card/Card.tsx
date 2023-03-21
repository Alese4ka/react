import React, { ReactElement } from 'react';
import books from '../../../entities/books';
import './Card.css';

export default class Card extends React.Component {
  render(): ReactElement {
    const list = books.map((element) => {
      return (
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
      );
    });

    return <div className="cards">{list}</div>;
  }
}
