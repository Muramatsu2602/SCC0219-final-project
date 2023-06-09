import React from 'react';

import {AuthProvider} from './contexts/Auth';

import ShopRouter from './ShopRouter';

export default function ShopApp() {
  return (
    <AuthProvider>
      <ShopRouter />
    </AuthProvider>
  );
}
