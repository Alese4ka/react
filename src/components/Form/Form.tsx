/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement } from 'react';
import { ErrorType, FormType, StateFormType, StateUserFormType } from 'entities/main.interface';
import validate from '../../helpers/validate';
import countries from '../../entities/countries';

export default class Form extends React.Component<FormType, StateFormType> {
  userForm = React.createRef<HTMLFormElement>();

  constructor(props: FormType) {
    super(props);

    this.state = {
      userName: '',
      userSurname: '',
      userDate: '',
      userCountry: '',
      userSex: false,
      userPhoto: '',
      userConfirm: false,
      userSexValue: '',
      toggleLeft: true,
      toggleRight: true,
      isSubmit: false,
    };

    this.userForm = React.createRef();

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserSurnameChange = this.handleUserSurnameChange.bind(this);
    this.handleUserDateChange = this.handleUserDateChange.bind(this);
    this.handleUserCountryChange = this.handleUserCountryChange.bind(this);
    this.handleUserSexChange = this.handleUserSexChange.bind(this);
    this.handleUserConfirmChange = this.handleUserConfirmChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.toggleLeftState = this.toggleLeftState.bind(this);
    this.toggleRightState = this.toggleRightState.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ isSubmit: true });
    this.setState({ userName: event.target.value });
  }

  handleUserSurnameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ isSubmit: true });
    this.setState({ userSurname: event.target.value });
  }

  handleUserDateChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ isSubmit: true });
    this.setState({ userDate: event.target.value });
  }

  handleUserCountryChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    this.setState({ isSubmit: true });
    this.setState({ userCountry: event.target.value });
  }

  handleUserSexChange(value: string): void {
    this.setState({ isSubmit: true });
    this.setState({ userSex: true });
    this.setState({ userSexValue: value });
  }

  handleUserConfirmChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ isSubmit: true });
    this.setState({ userConfirm: event.target.checked });
  }

  handleSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
    if (!this.canBeSubmitted()) {
      this.setState({ isSubmit: true });
      event.preventDefault();
      return;
    }

    event.preventDefault();
    this.setState({ isSubmit: true });
    const { userName } = this.state;
    const { userSurname } = this.state;
    const { userDate } = this.state;
    const { userCountry } = this.state;
    const { userSexValue } = this.state;
    const { userPhoto } = this.state;
    const { userConfirm } = this.state;
    const user: StateUserFormType = {
      id: `id${Math.random().toString(16).slice(2)}`,
      userName,
      userSurname,
      userDate,
      userCountry,
      userSexValue,
      userPhoto,
      userConfirm,
    };
    const { submit } = this.props;
    submit(user);
    this.resetForm();
    this.setState({ isSubmit: false });
  }

  resetForm(): void {
    this.setState({
      userName: '',
      userSurname: '',
      userDate: '',
      userCountry: '',
      userSex: false,
      userPhoto: '',
      userConfirm: false,
      toggleLeft: true,
      toggleRight: true,
    });
    this.userForm.current!.reset();
  }

  uploadFile(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target!.files![0];
    if (file) {
      const image = URL.createObjectURL(file);
      this.setState({ userPhoto: image });
    }
  }

  toggleLeftState() {
    const { toggleLeft } = this.state;
    this.setState({
      toggleLeft: !toggleLeft,
      toggleRight: toggleLeft,
    });
    this.checkSexValidation();
    this.handleUserSexChange('Female');
  }

  toggleRightState() {
    const { toggleRight } = this.state;
    this.setState({
      toggleLeft: toggleRight,
      toggleRight: !toggleRight,
    });
    this.checkSexValidation();
    this.handleUserSexChange('Male');
  }

  checkSexValidation() {
    const { refs } = this.props;
    this.setState({
      userSex: !!(refs.refUserSexF?.current?.checked || refs.refUserSex?.current?.checked),
    });
  }

  canBeSubmitted() {
    const { userName, userSurname, userDate, userCountry, userSex, userPhoto, userConfirm } =
      this.state;

    const errors = validate(
      userName,
      userSurname,
      userDate,
      userCountry,
      userSex,
      userPhoto,
      userConfirm
    );
    const isDisabled = Object.keys(errors).some((field) => errors[field as keyof ErrorType]);

    return !isDisabled;
  }

  render(): ReactElement {
    const { refs } = this.props;
    const {
      refUserName,
      refUserSurname,
      refUserDate,
      refUserCountry,
      refUserSex,
      refUserSexF,
      refUserPhoto,
      refUserConfirm,
    } = refs || {};
    const { isSubmit } = this.state;
    const { userName } = this.state;
    const { userSurname } = this.state;
    const { userDate } = this.state;
    const { userCountry } = this.state;
    const { userSex } = this.state;
    const { userPhoto } = this.state;
    const { userConfirm } = this.state;
    const { toggleLeft } = this.state;
    const { toggleRight } = this.state;

    const errors = validate(
      userName,
      userSurname,
      userDate,
      userCountry,
      userSex,
      userPhoto,
      userConfirm
    );
    const isDisabled = Object.keys(errors).some((field) => errors[field as keyof ErrorType]);

    const shouldMarkError = (field: string) => {
      const hasError = errors[field as keyof ErrorType];
      const shouldShow = isSubmit;

      return hasError ? shouldShow : false;
    };

    return (
      <div>
        <form className="form-user" ref={this.userForm} onSubmit={this.handleSubmit}>
          <div className="form-user-box" />
          <div className="form-user-main-info">
            <label htmlFor="name" className="form-user-label">
              Name
              <input
                className={shouldMarkError('userName') ? 'error' : 'form-user-input'}
                id="name"
                type="text"
                placeholder="Name"
                ref={refUserName}
                onChange={this.handleUserNameChange}
              />
            </label>
            <div
              data-testid="name-error"
              className={shouldMarkError('userName') ? 'error-text' : 'error-text-none'}
            >
              Name is required or starts with uppercased letter
            </div>
            <label htmlFor="surname" className="form-user-label">
              Surname
              <input
                className={shouldMarkError('userSurname') ? 'error' : 'form-user-input'}
                id="surname"
                type="text"
                placeholder="Surname"
                ref={refUserSurname}
                onChange={this.handleUserSurnameChange}
              />
            </label>
            <div
              data-testid="surname-error"
              className={shouldMarkError('userSurname') ? 'error-text' : 'error-text-none'}
            >
              Surname is required or starts with uppercased letter
            </div>
            <label htmlFor="date" className="form-user-label">
              Date of birth
              <input
                className={shouldMarkError('userDate') ? 'error' : 'form-user-input'}
                id="date"
                type="date"
                ref={refUserDate}
                onChange={this.handleUserDateChange}
              />
            </label>
            <div
              data-testid="date-error"
              className={shouldMarkError('userDate') ? 'error-text' : 'error-text-none'}
            >
              Date is invalid
            </div>
          </div>
          <div className="form-user-add-info">
            <label htmlFor="country" className="form-user-label">
              Country:
              <select
                id="country"
                defaultValue="defaultValue"
                className={shouldMarkError('userCountry') ? 'error' : 'form-user-select'}
                ref={refUserCountry}
                onChange={this.handleUserCountryChange}
              >
                <option disabled value="defaultValue">
                  Choose country
                </option>
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </label>
            <div
              data-testid="country-error"
              className={shouldMarkError('userCountry') ? 'error-text' : 'error-text-none'}
            >
              Country is required
            </div>
            <div className="form-user-form-sex">
              <label className="switcher">
                <input
                  className="form-user-input-sex"
                  type="radio"
                  id="switch_left"
                  name="switchToggle"
                  value="Female"
                  ref={refUserSexF}
                  onChange={this.toggleLeftState}
                  checked={!toggleLeft}
                />
                <label htmlFor="switch_left" className="form-user-label-sex">
                  Female
                </label>

                <input
                  className="form-user-input-sex"
                  type="radio"
                  id="switch_right"
                  name="switchToggle"
                  value="Male"
                  ref={refUserSex}
                  onChange={this.toggleRightState}
                  checked={!toggleRight}
                />
                <label htmlFor="switch_right" className="form-user-label-sex">
                  Male
                </label>
              </label>
            </div>
            <div
              data-testid="sex-error"
              className={shouldMarkError('userSex') ? 'error-text' : 'error-text-none'}
            >
              Sex is required
            </div>
            <input
              data-testid="file-input"
              id="file"
              type="file"
              accept="image/*"
              className="form-user-file-input"
              ref={refUserPhoto}
              onChange={this.uploadFile}
            />
            <div
              data-testid="file-error"
              className={shouldMarkError('userPhoto') ? 'error-text' : 'error-text-none'}
            >
              File is required
            </div>
            <label htmlFor="personal-data" className="form-user-label-personal">
              <input
                data-testid="checkbox-input"
                className="form-user-checkbox-personal"
                id="personal-data"
                type="checkbox"
                value="agree"
                name="agree"
                ref={refUserConfirm}
                onChange={this.handleUserConfirmChange}
              />
              By submitting your contact information, you agree on processing of your personal data.
            </label>
            <div
              data-testid="checked-error"
              className={shouldMarkError('userConfirm') ? 'error-text' : 'error-text-none'}
            >
              Checked is required
            </div>
          </div>
          <button
            type="submit"
            className={isDisabled ? 'form-user-error' : 'form-user-submit'}
            disabled={isDisabled}
          >
            <div
              className={isDisabled ? 'form-user-submit-border-error' : 'form-user-submit-border'}
            />
            Save
          </button>
        </form>
      </div>
    );
  }
}
