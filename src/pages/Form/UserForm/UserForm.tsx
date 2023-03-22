/* eslint-disable no-return-assign */
import { UserFormType } from 'entities/main.interface';
import React, { createRef, ReactElement, Ref, RefObject } from 'react';
import './UserForm.css';

const countries = ['Canada', 'Ukraine', 'Belarus'];

export default class UserForm extends React.Component<UserFormType> {
  userName = React.createRef<HTMLInputElement>();
  userSurname = React.createRef<HTMLInputElement>();
  userDate = React.createRef<HTMLInputElement>();
  userCountry = React.createRef<HTMLSelectElement>();
  form = React.createRef<HTMLFormElement | null>();
  userPhoto = React.createRef<HTMLInputElement>();

  constructor(props: UserFormType) {
    super(props);

    this.userName = React.createRef();
    this.userSurname = React.createRef();
    this.userDate = React.createRef();
    this.userCountry = React.createRef();
    this.form = React.createRef();
    this.userPhoto = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const userName = this.userName.current!.value;
    const userSurname = this.userSurname.current!.value;
    const userDate = this.userDate.current!.value;
    const userCountry = this.userCountry.current!.value;
    // FIX
    const { sex } = this.form as unknown as HTMLFormElement;
    const userSex = sex.value;
    // FIX
    const userPhoto = (this.userPhoto as unknown as HTMLInputElement)!.files[0].name;
    const { agree } = this.form as unknown as HTMLFormElement;
    const userConfirm = agree.value;
    const user = {
      userName,
      userSurname,
      userDate,
      userCountry,
      userSex,
      userPhoto,
      userConfirm,
    };

    localStorage.setItem('user-form', JSON.stringify(user));
  }

  render(): ReactElement {
    return (
      <div className="wrapper">
        <div className="wrapper-form">
          <form
            className="form-user"
            onSubmit={this.handleSubmit}
            // FIX
            ref={(form) => (this.form = form as unknown as RefObject<HTMLFormElement | null>)}
          >
            <div className="form-user-box" />
            <div className="form-user-main-info">
              <label htmlFor="name" className="form-user-label">
                {/* FIX Do with const and for */}
                Name
                <input
                  id="name"
                  className="form-user-input"
                  ref={this.userName}
                  type="text"
                  placeholder="Name"
                />
              </label>
              <label htmlFor="surname" className="form-user-label">
                Surname
                <input
                  id="surname"
                  className="form-user-input"
                  ref={this.userSurname}
                  type="text"
                  placeholder="Surname"
                />
              </label>
              <label htmlFor="date" className="form-user-label">
                Date of birth
                <input id="date" className="form-user-input" ref={this.userDate} type="date" />
              </label>
            </div>
            <div className="form-user-add-info">
              <label htmlFor="country" className="form-user-label">
                Country:
                <select id="country" className="form-user-select" ref={this.userCountry}>
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </label>
              <div className="form-user-label-sex">
                <label htmlFor="sex-women" className="form-user-label-sex">
                  <input
                    id="sex-women"
                    className="form-user-input-sex"
                    type="radio"
                    value="Female"
                    name="sex"
                  />
                  Female
                </label>
                <label htmlFor="sex-men" className="form-user-label-sex">
                  <input
                    id="sex-men"
                    className="form-user-input-sex"
                    type="radio"
                    value="Male"
                    name="sex"
                  />
                  Male
                </label>
              </div>
              <input
                type="file"
                accept="image/*"
                className="form-user-file-input"
                // FIX
                ref={(input) => (this.userPhoto = input as unknown as RefObject<HTMLInputElement>)}
              />
              <label htmlFor="personal-data" className="form-user-label-personal">
                <input
                  id="personal-data"
                  type="checkbox"
                  value="agree"
                  name="agree"
                  className="form-user-checkbox-personal"
                />
                By submitting your contact information, you agree on processing of your personal
                data.
              </label>
            </div>
            <button type="submit" className="form-user-submit">
              <div className="form-user-submit-border" />
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
