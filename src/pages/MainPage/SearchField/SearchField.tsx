import { PropsSearchField } from 'entities/main.interface';
import React from 'react';

const SearchField: React.FC<PropsSearchField> = ({
  placeholder,
  defaultValue,
  handleChange,
  handleKeyDown,
}: PropsSearchField) => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        data-testid="search"
        className="form-input"
        id="search"
        type="search"
        name="search"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onInput={handleChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default SearchField;
