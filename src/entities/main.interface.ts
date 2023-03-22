import { FormEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface StateSearch {
  searchValue: string;
}

export interface PropsSearchField {
  placeholder?: string;
  defaultValue?: string;
  handleChange?: FormEventHandler<HTMLInputElement>;
}

export interface PropsHeader {
  title: string;
}

export interface WithRouterProps {
  location?: ReturnType<typeof useLocation>;
  params?: Record<string, string>;
  navigate?: ReturnType<typeof useNavigate>;
  title?: string;
}
