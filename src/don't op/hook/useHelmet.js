import { Helmet } from 'react-helmet';
import React from 'react';

function useHelmet(props) {
  return (
    <Helmet>
      <title>{props}</title>
    </Helmet>

  );
}

export default useHelmet;