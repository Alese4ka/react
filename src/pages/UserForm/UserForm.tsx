import { useLocation } from 'react-router-dom';
import React from 'react';
import HeaderRouter from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import './UserForm.css';
import { useAppSelector } from '../../hooks/redux';

const UserForm = () => {
  const { users } = useAppSelector((state) => state.characterReducer);
  const location = useLocation();

  if (location) {
    const nameUrl = location.pathname.slice(1);
    return (
      <div data-testid="form-page">
        <HeaderRouter title={nameUrl} />
        <div className="wrapper">
          <div className="wrapper-form">
            <Form />
          </div>
        </div>
        <div className="user-info-cards">
          <Card users={users} />
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
