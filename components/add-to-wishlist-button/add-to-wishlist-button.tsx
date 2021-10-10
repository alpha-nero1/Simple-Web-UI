import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import React from 'react';
import utilStyles from '../../styles/utils.module.css';

interface Props {
    classNames?: string;
    onClickHandler?: () => void;
}

const autoHideTime = 2000;

export function AddToWishlistButton(props: Props) {
    const [open, setIsOpen] = useState(false);

    const onBtnClick = () => {
        if (typeof props.onClickHandler === 'function') props.onClickHandler();
        setIsOpen(true)
        setTimeout(() => {
            setIsOpen(false);
        }, autoHideTime)
    }

    return <>
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
        >
            <MuiAlert 
                elevation={6} 
                variant="filled" 
                onClose={() => setIsOpen(false)}
                severity="success"
                sx={{ width: '100%', backgroundColor: 'blue' }}
            >
                Added to wishlist!
            </MuiAlert>
        </Snackbar>
        <button onClick={onBtnClick} className={`${utilStyles.btnClear} ${props.classNames}`}>Add to wishlist</button>
    </>
}