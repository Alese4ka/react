/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { ErrorType, StateUserFormType } from 'entities/main.interface';
import { SubmitHandler, UseFormRegister } from 'react-hook-form';
import {
  validate,
  validateUserConfirm,
  validateUserCountry,
  validateUserDate,
  validateUserName,
  validateUserPhoto,
  validateUserSex,
  validateUserSurname,
} from '../../helpers/validate';
import countries from '../../entities/countries';

export type NewFormProps = {
  onSubmit: SubmitHandler<StateUserFormType>;
  register: UseFormRegister<StateUserFormType>;
};

const Form: React.FC<NewFormProps> = (props) => {
  const { onSubmit, register } = props;

  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userSex, setUserSex] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');
  const [userConfirm, setUserConfirm] = useState(false);
  const [userSexValue, setUserSexValue] = useState('');
  const [toggleLeft, setToggleLeft] = useState(true);
  const [toggleRight, setToggleRight] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorSurname, setIsErrorSurname] = useState(false);
  const [isErrorDate, setIsErrorDate] = useState(false);
  const [isErrorCountry, setIsErrorCountry] = useState(false);
  const [isErrorSex, setIsErrorSex] = useState(false);
  const [isErrorPhoto, setIsErrorPhoto] = useState(false);
  const [isErrorConfirm, setIsErrorConfirm] = useState(false);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  };

  const handleUserSurnameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserSurname(event.target.value);
  };

  const handleUserDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserDate(event.target.value);
  };

  const handleUserCountryChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setUserCountry(event.target.value);
  };

  const handleUserSexChange = (value: string): void => {
    setUserSex(true);
    setUserSexValue(value);
  };

  const handleUserConfirmChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserConfirm(event.target.checked);
  };

  const canBeSubmitted = (): boolean => {
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
  };

  const resetForm = (): void => {
    setUserName('');
    setUserSurname('');
    setUserDate('');
    setUserCountry('');
    setUserSex(false);
    setUserPhoto('');
    setUserConfirm(false);
    setToggleLeft(true);
    setToggleRight(true);
    setIsErrorName(false);
    setIsErrorSurname(false);
    setIsErrorDate(false);
    setIsErrorCountry(false);
    setIsErrorSex(false);
    setIsErrorPhoto(false);
    setIsErrorConfirm(false);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    setIsErrorName(validateUserName(userName));
    setIsErrorSurname(validateUserSurname(userSurname));
    setIsErrorDate(validateUserDate(userDate));
    setIsErrorCountry(validateUserCountry(userCountry));
    setIsErrorSex(validateUserSex(userSex));
    setIsErrorPhoto(validateUserPhoto(userPhoto));
    setIsErrorConfirm(validateUserConfirm(userConfirm));

    if (!canBeSubmitted()) {
      setIsSubmit(true);
      event.preventDefault();
      return;
    }
    event.preventDefault();
    setIsSubmit(true);
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
    onSubmit(user);
    setIsSaved(true);
    resetForm();
    setTimeout(() => {
      setIsSaved(false);
    }, 1000);
    setIsSubmit(false);
  };

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target!.files![0];
    if (file) {
      const image = URL.createObjectURL(file);
      setUserPhoto(image);
    }
  };

  const toggleLeftState = (): void => {
    setToggleLeft(!toggleLeft);
    setToggleRight(toggleLeft);
    handleUserSexChange('Female');
  };

  const toggleRightState = (): void => {
    setToggleLeft(toggleLeft);
    setToggleRight(!toggleLeft);
    handleUserSexChange('Male');
  };

  const errors = validate(
    userName,
    userSurname,
    userDate,
    userCountry,
    userSex,
    userPhoto,
    userConfirm
  );
  const isDisabled =
    Object.keys(errors).some((field) => errors[field as keyof ErrorType]) && isSubmit;

  return (
    <div>
      <form className="form-user" onSubmit={handleSubmit}>
        <div className="form-user-box" />
        <div className="form-user-main-info">
          <label htmlFor="name" className="form-user-label">
            Name
            <input
              className={isErrorName ? 'error' : 'form-user-input'}
              id="name"
              type="text"
              placeholder="Name"
              {...register('userName', { maxLength: 8 })}
              onChange={handleUserNameChange}
            />
          </label>
          <div data-testid="name-error">
            {isErrorName ? (
              <div className="error-text">Name is required or starts with uppercased letter</div>
            ) : (
              <div className="error-text-name">Name must be no more than 8 characters</div>
            )}
          </div>
          <label htmlFor="surname" className="form-user-label">
            Surname
            <input
              className={isErrorSurname ? 'error' : 'form-user-input'}
              id="surname"
              type="text"
              placeholder="Surname"
              {...register('userSurname', { maxLength: 8 })}
              onChange={handleUserSurnameChange}
            />
          </label>
          <div data-testid="surname-error">
            {isErrorSurname ? (
              <div className="error-text">Name is required or starts with uppercased letter</div>
            ) : (
              <div className="error-text-name">Surname must be no more than 8 characters</div>
            )}
          </div>
          <label htmlFor="date" className="form-user-label">
            Date of birth
            <input
              className={isErrorDate ? 'error' : 'form-user-input'}
              id="date"
              type="date"
              {...register('userDate')}
              onChange={handleUserDateChange}
            />
          </label>
          <div data-testid="date-error" className={isErrorDate ? 'error-text' : 'error-text-none'}>
            Date is invalid
          </div>
        </div>
        <div className="form-user-add-info">
          <label htmlFor="country" className="form-user-label">
            Country:
            <select
              id="country"
              defaultValue="defaultValue"
              className={isErrorCountry ? 'error' : 'form-user-select'}
              {...register('userCountry')}
              onChange={handleUserCountryChange}
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
            className={isErrorCountry ? 'error-text' : 'error-text-none'}
          >
            Country is required
          </div>
          <div className="form-user-form-sex">
            <label className="switcher">
              <input
                className="form-user-input-sex"
                type="radio"
                id="switch_left"
                value="Female"
                {...register('userSexF')}
                onChange={toggleLeftState}
                checked={!toggleLeft}
              />
              <label htmlFor="switch_left" className="form-user-label-sex">
                Female
              </label>

              <input
                className="form-user-input-sex"
                type="radio"
                id="switch_right"
                value="Male"
                {...register('userSex')}
                onChange={toggleRightState}
                checked={!toggleRight}
              />
              <label htmlFor="switch_right" className="form-user-label-sex">
                Male
              </label>
            </label>
          </div>
          <div data-testid="sex-error" className={isErrorSex ? 'error-text' : 'error-text-none'}>
            Sex is required
          </div>
          <input
            data-testid="file-input"
            id="file"
            type="file"
            accept="image/*"
            className="form-user-file-input"
            {...register('userPhoto')}
            onChange={uploadFile}
          />
          <div data-testid="file-error" className={isErrorPhoto ? 'error-text' : 'error-text-none'}>
            File is required
          </div>
          <label htmlFor="personal-data" className="form-user-label-personal">
            <input
              data-testid="checkbox-input"
              className="form-user-checkbox-personal"
              id="personal-data"
              type="checkbox"
              value="agree"
              checked={userConfirm}
              {...register('userConfirm')}
              onChange={handleUserConfirmChange}
            />
            By submitting your contact information, you agree on processing of your personal data.
          </label>
          <div
            data-testid="checked-error"
            className={isErrorConfirm ? 'error-text' : 'error-text-none'}
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
      <div>{isSaved ? <h3 className="saved-info">Information have been saved</h3> : ''}</div>
    </div>
  );
};

export default Form;
