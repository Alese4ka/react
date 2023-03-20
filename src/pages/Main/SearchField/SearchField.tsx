import { PropsSearchField } from 'entities/main.interface';
import React, { ReactElement } from 'react';

export default class SearchField extends React.Component<PropsSearchField> {
  render(): ReactElement {
    const { placeholder } = this.props;
    const { defaultValue } = this.props;
    const { handleChange } = this.props;

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
}
