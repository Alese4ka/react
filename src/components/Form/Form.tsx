/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { StateUserFormType } from 'entities/main.interface';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import countries from '../../entities/countries';
import { userSlice } from '../../store/reducers/UserSlice';
import { useAppDispatch } from '../../hooks/redux';

const Form = () => {
  const dispatch = useAppDispatch();
  const { setNewUser } = userSlice.actions;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    control,
  } = useForm<StateUserFormType>();

  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);
  const [userConfirmCheck, setUserConfirmCheck] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const sexArray = [
    { sex: 'Female', index: 'userSexF', toggle: toggleLeft },
    { sex: 'Male', index: 'userSex', toggle: toggleRight },
  ];

  const uploadFile = (fileList: FileList): string => {
    const images = [];
    images.push(URL.createObjectURL(fileList[0]));
    return images[0];
  };

  const submit: SubmitHandler<StateUserFormType> = (data): void => {
    const { userName, userSurname, userDate, userCountry, userSex, userPhoto, userConfirm } = data;
    const user: StateUserFormType = {
      id: `id${Math.random().toString(16).slice(2)}`,
      userName,
      userSurname,
      userDate,
      userCountry,
      userSex,
      userPhoto: uploadFile(userPhoto as FileList),
      userConfirm,
    };
    dispatch(setNewUser(user));
    setIsSaved(true);
    reset();
    setToggleLeft(false);
    setToggleRight(false);
    setUserConfirmCheck(false);
    setTimeout(() => {
      setIsSaved(false);
    }, 1000);
  };

  const toggleState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'Female') {
      setToggleLeft(!toggleLeft);
      setToggleRight(toggleLeft);
    } else {
      setToggleLeft(toggleRight);
      setToggleRight(!toggleRight);
    }
  };

  const handleUserConfirmChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserConfirmCheck(event.target.checked);
  };

  return (
    <div>
      <form className="form-user" onSubmit={handleSubmit(submit)}>
        <div className="form-user-box" />
        <div className="form-user-main-info">
          <label htmlFor="name" className="form-user-label">
            Name
            <input
              className={errors?.userName ? 'error' : 'form-user-input'}
              id="name"
              type="text"
              placeholder="Name"
              {...register('userName', {
                required: 'Name is required',
                maxLength: {
                  value: 8,
                  message: 'Name must be no more than 8 symbols',
                },
                pattern: {
                  value: /^[A-ZА-Я].+/,
                  message: 'Name should be start with uppercased letter',
                },
              })}
            />
          </label>
          <div data-testid="name-error">
            {errors?.userName && (
              <p className="error-text">{errors?.userName?.message || 'Error!'}</p>
            )}
          </div>
          <label htmlFor="surname" className="form-user-label">
            Surname
            <input
              className={errors?.userSurname ? 'error' : 'form-user-input'}
              id="surname"
              type="text"
              placeholder="Surname"
              {...register('userSurname', {
                required: 'Surname is required',
                maxLength: {
                  value: 8,
                  message: 'Surname must be no more than 8 symbols',
                },
                pattern: {
                  value: /^[A-ZА-Я].+/,
                  message: 'Surname should be start with uppercased letter',
                },
              })}
            />
          </label>
          <div data-testid="surname-error">
            {errors?.userSurname && (
              <p className="error-text">{errors?.userSurname?.message || 'Error!'}</p>
            )}
          </div>
          <label htmlFor="date" className="form-user-label">
            Date of birth
            <input
              className={errors?.userDate ? 'error' : 'form-user-input'}
              id="date"
              type="date"
              {...register('userDate', {
                required: 'Date is invalid',
              })}
            />
          </label>
          <div data-testid="date-error">
            {errors?.userDate && <p className="error-text">{errors?.userDate?.message}</p>}
          </div>
        </div>
        <div className="form-user-add-info">
          <label htmlFor="country" className="form-user-label">
            Country:
            <select
              id="country"
              defaultValue=""
              className={errors?.userCountry ? 'error' : 'form-user-select'}
              {...register('userCountry', {
                required: 'Country is required',
              })}
            >
              <option disabled value="">
                Choose country
              </option>
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
            <div data-testid="country-error">
              {errors?.userCountry && <p className="error-text">{errors?.userCountry?.message}</p>}
            </div>
          </label>
          <div className="form-user-form-sex">
            <label className="switcher">
              <Controller
                control={control}
                name="userSex"
                rules={{ required: 'required' }}
                render={({ field }) => (
                  <div className="switcher-box">
                    {sexArray.map((el) => (
                      <div key={el.index}>
                        <label
                          htmlFor={el.index}
                          className={
                            !el.toggle ? 'form-user-label-sex' : 'form-user-label-sex checked'
                          }
                        >
                          {el.sex}
                          <input
                            className="form-user-input-sex"
                            id={el.index}
                            type="radio"
                            value={el.sex}
                            {...register('userSex', { required: 'Sex is required' })}
                            onChange={(e) => field.onChange(toggleState(e))}
                            checked={el.toggle}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              />
              <div data-testid="sex-error">
                {errors?.userSex && <p className="error-text">{errors?.userSex?.message}</p>}
              </div>
            </label>
          </div>
          <input
            data-testid="file-input"
            id="file"
            type="file"
            accept="image/*"
            className="form-user-file-input"
            {...register('userPhoto', {
              required: 'File is required',
            })}
          />
          <div data-testid="file-error">
            {errors?.userPhoto && <p className="error-text">{errors?.userPhoto?.message}</p>}
          </div>
          <label htmlFor="personal-data" className="form-user-label-personal">
            <Controller
              control={control}
              name="userConfirm"
              render={({ field }) => (
                <input
                  data-testid="checkbox-input"
                  className="form-user-checkbox-personal"
                  id="personal-data"
                  type="checkbox"
                  {...register('userConfirm', { required: 'Checked is required' })}
                  onChange={(e) => field.onChange(handleUserConfirmChange(e))}
                  checked={userConfirmCheck}
                />
              )}
            />
            By submitting your contact information, you agree on processing of your personal data.
          </label>
          <div data-testid="checked-error">
            {errors?.userConfirm && <p className="error-text">{errors?.userConfirm?.message}</p>}
          </div>
        </div>
        <button type="submit" className="form-user-submit">
          <div className="form-user-submit-border" />
          Save
        </button>
      </form>
      <div>{isSaved ? <h3 className="saved-info">Information have been saved</h3> : ''}</div>
    </div>
  );
};

export default Form;
