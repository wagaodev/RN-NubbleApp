import React from 'react';

import {SignIn} from './screens/commons/SignIn';
import {Providers} from './config/Providers';

export function App(): React.JSX.Element {
  return (
    <Providers>
      <SignIn />
    </Providers>
  );
}
