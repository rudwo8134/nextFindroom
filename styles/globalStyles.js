import { createGlobalStyle } from 'styled-components';

const Selection = process.env.Theme;

export const Theme = {
  colors: {
    primary: Number(Selection) === 1 ? '#0088ff' : '#FD3D19',
    secondary: Number(Selection) === 1 ? '#ff7700' : '#19d9fd',
    darkprimary: Number(Selection) === 1 ? '#003059' : '#BF2D13',
    darksecondary: Number(Selection) === 1 ? '#BF5900' : '#13A5BF',
    lightprimary: Number(Selection) === 1 ? '#007AE6' : '#E63617',
    lightsecondary: Number(Selection) === 1 ? '#E66B00' : '#17C7E6',
    black: '#000000',
    grey: '#2f2f2f',
    white: '#ffffff',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    xl: '3rem',
    l: '2rem',
    M: '1.6rem',
    s: '1.2rem',
    xs: '1rem',
  },
  margin: {
    xl: '5rem',
    l: '2.4rem',
    M: '1.2rem',
    s: '1rem',
    xs: '0.5rem',
  },
  shadow: {
    default: '14px 2px 2px rgba(206,89,55,0)',
  },
};

export const GlobalStyles = createGlobalStyle`
  *,body {
    font-size: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
  }
  a{
    text-decoration: none;
    background-color: transparent;
  }
  div,h1,h2,h3,h4,h5,span{
    background: transparent;
  }
`;

export default GlobalStyles;
