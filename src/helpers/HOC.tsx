/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import { WithRouterProps } from 'entities/main.interface';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

const withRouter = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  return function (props: Omit<Props, keyof WithRouterProps>) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const title = '';
    return (
      <Component
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
        title={title}
      />
    );
  };
};

export default withRouter;
