import { BookData } from 'entities/bookData.interface';
import React, { ReactElement } from 'react';
import './Card.css';

export default class Card extends React.Component {
  render(): ReactElement {
    const books: BookData[] = [
      {
        id: 1,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book1.png',
        price: '$ 50.99',
      },
      {
        id: 2,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book2.jpeg',
        price: '$ 50.99',
      },
      {
        id: 3,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book1.png',
        price: '$ 50.99',
      },
      {
        id: 4,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book2.jpeg',
        price: '$ 50.99',
      },
      {
        id: 5,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book1.png',
        price: '$ 50.99',
      },
      {
        id: 6,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book2.jpeg',
        price: '$ 50.99',
      },
      {
        id: 7,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book1.png',
        price: '$ 50.99',
      },
      {
        id: 8,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book2.jpeg',
        price: '$ 50.99',
      },
      {
        id: 9,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book1.png',
        price: '$ 50.99',
      },
      {
        id: 10,
        title: 'Normal People',
        author: 'Sally Rooney',
        img: './book2.jpeg',
        price: '$ 50.99',
      },
    ];

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
