import React, { ReactElement } from 'react';
import './Form.css';

const countries = ['Canada', 'Ukraine', 'Belarus'];

export default class Form extends React.Component {
  render(): ReactElement {
    return (
      <div className="wrapper-form">
        <h1 className="wrapper-form-title">User Form</h1>
        <form className="form-user">
          <label htmlFor="name" className="form-user-label">
            {/* Do with const and for */}
            NAME
            <input id="name" className="form-user-input" type="text" placeholder="Name" />
          </label>
          <label htmlFor="surname" className="form-user-label">
            SURNAME
            <input id="surname" className="form-user-input" type="text" placeholder="Surname" />
          </label>
          <label htmlFor="date" className="form-user-label">
            DATE OF BIRTH
            <input id="date" className="form-user-input" type="date" />
          </label>
          <label htmlFor="country" className="form-user-label">
            COUNTRY:
            <select id="country">
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </label>
          <label htmlFor="personal-data" className="form-user-label-personal">
            <input id="personal-data" type="checkbox" className="form-user-checkbox-personal" />
            By submitting your contact information, you agree on processing of your personal data.
          </label>
          <div className="form-user-label-sex">
            <label htmlFor="sex-women" className="form-user-label-sex">
              <input id="sex-women" type="radio" name="sex" />
              Female
            </label>
            <label htmlFor="sex-men" className="form-user-label-sex">
              <input id="sex-men" type="radio" name="sex" />
              Male
            </label>
          </div>
          <input type="file" accept="image/*" />
        </form>
      </div>
    );
  }
}
