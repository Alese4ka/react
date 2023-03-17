import { FormEventHandler } from 'react';

export interface Props {
  props: string;
}

export interface State {
  searchValue: string;
}

export interface PropsSearchField {
  placeholder?: string;
  defaultValue: string;
  handleChange: FormEventHandler<HTMLInputElement>;
}
