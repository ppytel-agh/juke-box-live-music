import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import logo from '../../assets/logo.png';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute('src')).toEqual(logo);
  });

  it('renders the navigation links', () => {
    render(<Header />);
    const wydarzeniaLink = screen.getByText('Wydarzenia');
    const zalogujSieLink = screen.getByText('Zaloguj się');
    const zarejestrujSieLink = screen.getByText('Zarejestruj się');

    expect(wydarzeniaLink).toBeTruthy();
    expect(zalogujSieLink).toBeTruthy();
    expect(zarejestrujSieLink).toBeTruthy();
  });

  it('renders login/logout state', () => {
    render(<Header />);
    const zalogujSieLink = screen.getByText('Zaloguj się');
    expect(zalogujSieLink).toBeTruthy();

    const kontoLink = screen.queryByText('Konto');
    expect(kontoLink).toBeNull();

    const wylogujLink = screen.queryByText('Wyloguj');
    expect(wylogujLink).toBeNull();
  });
});
