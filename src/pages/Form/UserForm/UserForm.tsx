import { StateForm, StateUserFormType, UserFormType } from 'entities/main.interface';
import React, { ReactElement } from 'react';
import Card from '../../../components/Card/Card';
import CustomInput from '../../../components/CustomInput/CustomInput';
import './UserForm.css';

export default class UserForm extends React.Component<UserFormType, StateForm> {
  userName: React.RefObject<HTMLInputElement>;
  userSurname: React.RefObject<HTMLInputElement>;
  userDate: React.RefObject<HTMLInputElement>;
  userCountry: React.RefObject<HTMLSelectElement>;
  userSexF: React.RefObject<HTMLInputElement> | undefined;
  userSex: React.RefObject<HTMLInputElement> | undefined;
  userConfirm: React.RefObject<HTMLInputElement>;
  userPhoto: React.RefObject<HTMLInputElement>;

  constructor(props: UserFormType) {
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

    this.handleSubmitted = this.handleSubmitted.bind(this);
  }

  handleSubmitted(user: StateUserFormType) {
    const { userCards } = this.state;
    this.setState({ userCards: [...userCards, user] });
    alert(`${this.userName.current!.value} ${this.userSurname.current!.value}`);
  }

  render(): ReactElement {
    const { userCards } = this.state;

    return (
      <div>
        <div className="wrapper">
          <div className="wrapper-form">
            <CustomInput
              submit={this.handleSubmitted}
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
