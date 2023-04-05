import { useLocation } from 'react-router-dom';
import { StateUserFormType } from 'entities/main.interface';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import HeaderRouter from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import './UserForm.css';

const UserForm = () => {
  const [userCards, setUserCards] = useState<StateUserFormType[]>([]);

  const onSubmit: SubmitHandler<StateUserFormType> = (user: StateUserFormType): void => {
    setUserCards([...userCards, user]);
  };

  const location = useLocation();
  if (location) {
    const nameUrl = location.pathname.slice(1);
    return (
      <div data-testid="form-page">
        <HeaderRouter title={nameUrl} />
        <div className="wrapper">
          <div className="wrapper-form">
            <Form onSubmit={onSubmit} />
          </div>
        </div>
        <div className="user-info-cards">
          <Card userInfo={userCards} />
        </div>
      </div>
    );
  }
  return (
    <div data-testid="form-page">
      <HeaderRouter title="Not Found" />
      <h1>Not Found</h1>
    </div>
  );
};

export default UserForm;
