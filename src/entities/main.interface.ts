import { FormEventHandler, LegacyRef, RefObject } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface StateSearch {
  searchValue: string;
}

export interface ErrorType {
  userName: boolean;
  userSurname: boolean;
  userDate: boolean;
  userCountry: boolean;
  userSex: boolean;
  userPhoto: boolean;
  userConfirm: boolean;
}
export interface StateForm {
  userCards: StateUserFormType[];
}

export interface StateUserFormType {
  id: string;
  userName: string;
  userSurname: string;
  userDate: string;
  userCountry: string;
  userSexValue: string;
  userPhoto: string;
  userConfirm: boolean;
}

export interface StateFormType {
  userName: string;
  userSurname: string;
  userDate: string;
  userCountry: string;
  userSex: boolean;
  userPhoto: string;
  userConfirm: boolean;
  userSexValue: string;
  toggleLeft: boolean;
  toggleRight: boolean;
  isSubmit: boolean;
}

export interface UserFormType {
  title: string;
}

export interface FormType {
  submit: (user: StateUserFormType) => void;
  refs: RefsFormType;
}

export interface RefsFormType {
  refUserName: React.RefObject<HTMLInputElement>;
  refUserSurname: React.RefObject<HTMLInputElement>;
  refUserDate: React.RefObject<HTMLInputElement>;
  refUserCountry: LegacyRef<HTMLSelectElement> | undefined;
  refUserSex: RefObject<HTMLInputElement> | undefined;
  refUserSexF: RefObject<HTMLInputElement> | undefined;
  refUserPhoto: React.RefObject<HTMLInputElement>;
  refUserConfirm: React.RefObject<HTMLInputElement>;
}

export interface PropsSearchField {
  placeholder?: string;
  defaultValue?: string;
  handleChange?: FormEventHandler<HTMLInputElement>;
}

export interface PropsCard {
  userInfo: StateUserFormType[];
}

export interface WithRouterProps {
  title?: string;
  location?: ReturnType<typeof useLocation>;
  params?: Record<string, string>;
  navigate?: ReturnType<typeof useNavigate>;
}
