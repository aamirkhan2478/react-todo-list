import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  const headingStyle = {
    fontSize: '6rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: '#ececec',
    textTransform: 'lowercase',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>todos</h1>
    </header>
  );
};

export default Header;
