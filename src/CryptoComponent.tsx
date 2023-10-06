import React,  { useState } from 'react';
import { sha256 } from 'js-sha256';
import md5 from 'md5'
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send"


function CryptoComponent() {
    const [inputValue, setInputValue] = useState('');
    const [hashedValue, setHashedValue] = useState('');
    const [hashAlgorithm, setHashAlgorithm] = useState('md5');

    const handleHash = () => {
        let hashedInput = '';

        if (hashAlgorithm === 'md5') {
            hashedInput = md5(inputValue);
        } else if (hashAlgorithm === 'sha256') {
            hashedInput = sha256(inputValue);
        }

        setHashedValue(hashedInput);
    };

    return (
        <div>
            <label>
                Choisissez l'algorithme de hachage :
                <select
                    value={hashAlgorithm}
                    onChange={(e) =>
                    {
                        setHashedValue('');
                        setHashAlgorithm(e.target.value)}
                    }
                >
                    <option value="md5">MD5</option>
                    <option value="sha256">SHA-256</option>
                </select>
            </label>
            <br />
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleHash}>Hacher</button>
            <p>Valeur hachée en {hashAlgorithm}: {hashedValue === ""
                ? "veillez Entrer la valeur à hacher et ensuite cliquer sur le bouton": hashedValue}
            </p>

            <div className="form-outline">
                <input type="text" id="formTextExample1" className="form-control" aria-describedby="textExample1"/>
                <label className="form-label" htmlFor="formTextExample1">Example label</label>
            </div>
            <div id="textExample1" className="form-text">
                We'll never share your email with anyone else.
            </div>

            <TextField
                id="outlined-controlled"
                label="Controlled"
                value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(event.target.value);
                }}
            />
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleHash}
                size="large"
            >
                Send
            </Button>
        </div>
    );
}

export default CryptoComponent;