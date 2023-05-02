import React, { KeyboardEventHandler } from 'react';
import { PropsSearchField } from 'entities/main.interface';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';

const SearchField: React.FC<PropsSearchField> = ({
  placeholder,
  defaultValue,
}: PropsSearchField) => {
  const dispatch = useAppDispatch();
  const { getSearchValue } = userSlice.actions;

  const handleKeyDown = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if ((event as unknown as KeyboardEvent).key === 'Enter') {
      if (event.target.value) {
        const value = event?.target.value;
        dispatch(getSearchValue(value));
      } else {
        dispatch(getSearchValue(''));
      }
    }
  };

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
        onKeyDown={handleKeyDown as unknown as KeyboardEventHandler<HTMLInputElement>}
      />
    </form>
  );
};

export default SearchField;
