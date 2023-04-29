import React from 'react';
import Header from './Layout/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
