import { FormEventHandler, KeyboardEventHandler } from 'react';

export interface StateUserFormType {
  id: string;
  userName: string;
  userSurname: string;
  userDate: string;
  userCountry: string;
  userSex: string;
  userPhoto: FileList | string;
  userConfirm: boolean;
}

export interface RickMortyType {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  created: string;
  episode: string[];
  location: LocationType;
  origin: LocationType;
}

export interface LocationType {
  name: string;
  url: string;
}

export interface HeaderType {
  title: string;
}

export interface PropsSearchField {
  placeholder?: string;
  defaultValue?: string;
  handleChange?: FormEventHandler<HTMLInputElement>;
  handleKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export interface PropsCard {
  userInfo?: StateUserFormType[];
  characterInfo?: RickMortyType[];
}
