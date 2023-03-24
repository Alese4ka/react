/* eslint-disable import/no-named-as-default */
import { StateForm, StateUserFormType, WithRouterProps } from 'entities/main.interface';
import React, { ReactElement } from 'react';
import HeaderRouter from '../../components/Header/Header';
import withRouter from '../../helpers/HOC';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import './UserForm.css';

export default class UserForm extends React.Component<WithRouterProps, StateForm> {
  userName: React.RefObject<HTMLInputElement>;
  userSurname: React.RefObject<HTMLInputElement>;
  userDate: React.RefObject<HTMLInputElement>;
  userCountry: React.RefObject<HTMLSelectElement>;
  userSexF: React.RefObject<HTMLInputElement> | undefined;
  userSex: React.RefObject<HTMLInputElement> | undefined;
  userConfirm: React.RefObject<HTMLInputElement>;
  userPhoto: React.RefObject<HTMLInputElement>;

  constructor(props: WithRouterProps) {
    super(props);

    this.userName = React.createRef();
    this.userSurname = React.createRef();
    this.userDate = React.createRef();
    this.userCountry = React.createRef();
    this.userSexF = React.createRef();
    this.userSex = React.createRef();
    this.userPhoto = React.createRef();
    this.userConfirm = React.createRef();

    this.state = {
      userCards: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user: StateUserFormType): void {
    const { userCards } = this.state;
    this.setState({ userCards: [...userCards, user] });
    alert(`${this.userName.current!.value} ${this.userSurname.current!.value}`);
  }

  render(): ReactElement {
    const { userCards } = this.state;
    const { location } = this.props;
    if (location) {
      const nameUrl = location.pathname.slice(1);
      return (
        <div>
          <HeaderRouter title={nameUrl} />
          <div className="wrapper">
            <div className="wrapper-form">
              <Form
                submit={this.handleSubmit}
                refs={{
                  refUserName: this.userName,
                  refUserSurname: this.userSurname,
                  refUserDate: this.userDate,
                  refUserCountry: this.userCountry,
                  refUserSexF: this.userSexF,
                  refUserSex: this.userSex,
                  refUserPhoto: this.userPhoto,
                  refUserConfirm: this.userConfirm,
                }}
              />
            </div>
          </div>
          <div className="user-info-cards">
            <Card userInfo={userCards} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <HeaderRouter title="not found" />
        <div className="wrapper">
          <div className="wrapper-form">
            <Form
              submit={this.handleSubmit}
              refs={{
                refUserName: this.userName,
                refUserSurname: this.userSurname,
                refUserDate: this.userDate,
                refUserCountry: this.userCountry,
                refUserSexF: this.userSexF,
                refUserSex: this.userSex,
                refUserPhoto: this.userPhoto,
                refUserConfirm: this.userConfirm,
              }}
            />
          </div>
        </div>
        <div className="user-info-cards">
          <Card userInfo={userCards} />
        </div>
      </div>
    );
  }
}

export const UserFormRouter = withRouter(UserForm);
