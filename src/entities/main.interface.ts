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

export interface InfoType {
  count: number;
  next: string;
  pages: number;
  prev: null;
}
export interface DataFromApi {
  info: InfoType;
  results: RickMortyType[];
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
}

export interface PropsCard {
  users?: StateUserFormType[];
  characterInfo?: RickMortyType[];
  isLoading?: boolean;
}
