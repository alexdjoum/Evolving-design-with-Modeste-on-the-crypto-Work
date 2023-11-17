import React from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoComponent from "./CryptoComponent";
import HachageFichier from "./HachageFichier";
import CryptoComponent2 from "./CryptoComponent2";
//import {Provider} from "react-redux";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';

function App() {
  return (
    <>
      {/*<CryptoComponent />*/}
       {/* <HachageFichier />*/}
        <CssVarsProvider>
            <CryptoComponent2 />
            <HachageFichier />
        </CssVarsProvider>
    </>
  );
}

export default App;
