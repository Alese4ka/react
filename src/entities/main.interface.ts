import { FormEventHandler } from 'react';

export interface StateUserFormType {
  id: string;
  userName: string;
  userSurname: string;
  userDate: string;
  userCountry: string;
  userSex?: string;
  userPhoto?: FileList | string;
  userConfirm?: boolean;
}

export interface HeaderType {
  title: string;
}

export interface PropsSearchField {
  placeholder?: string;
  defaultValue?: string;
  handleChange?: FormEventHandler<HTMLInputElement>;
}

export interface PropsCard {
  userInfo?: StateUserFormType[];
}
