import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import React from 'react';
import utilStyles from '../../styles/utils.module.css';

interface Props {
    classNames?: string;
}

export function AddToCartButton(props: Props) {
    const [open, setIsOpen] = useState(false);

    return <>
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
            autoHideDuration={6000}
        >
            <MuiAlert 
                elevation={6} 
                variant="filled" 
                onClose={() => setIsOpen(false)}
                severity="success" 
                sx={{ width: '100%', backgroundColor: 'orange' }}
            >
                Item added to cart!
            </MuiAlert>
        </Snackbar>
        <button onClick={() => setIsOpen(true)} className={`${utilStyles.btnWarn} ${props.classNames}`}>Add to cart</button>
    </>
}