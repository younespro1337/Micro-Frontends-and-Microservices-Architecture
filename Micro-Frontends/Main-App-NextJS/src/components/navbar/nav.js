// src/pages/components/navbar/nav.js
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const navbarStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

const Navbar = () => {
  const inputValue = useSelector((state) => state.input.inputValue);
console.log(useSelector((state) => state))
  return (
<div style={navbarStyles.container}>
      <div style={navbarStyles.logo}>{inputValue}</div>
      <div style={navbarStyles.navLinks}>
        <Link href="/" style={navbarStyles.link}>Rename App</Link>
        <Link href="/about" style={navbarStyles.link}>About App</Link>
        <Link href="/blog" style={navbarStyles.link}>Blog App</Link>
        <Link href="/login" style={navbarStyles.link}>Login App</Link>
      </div>
    </div>
  );
};

export default Navbar;
