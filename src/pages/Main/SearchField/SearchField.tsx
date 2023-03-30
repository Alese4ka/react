import { PropsSearchField } from 'entities/main.interface';
import React from 'react';

function SearchField({ placeholder, defaultValue, handleChange }: PropsSearchField) {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-input"
        id="search"
        type="search"
        name="search"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onInput={handleChange}
      />
    </form>
  );
}

export default SearchField;
