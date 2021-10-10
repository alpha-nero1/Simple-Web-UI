
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import utilStyles from '../../styles/utils.module.css';

interface Props {
    classNames?: string;
    onClickHandler?: () => void;
}

const autoHideTime = 2000;

export function AddToCartButton(props: Props) {
    const [open, setIsOpen] = useState(false);
    const [timeoutRef, setTimeoutRef] = useState<any>(null);

    const onBtnClick = () => {
        if (typeof props.onClickHandler === 'function') props.onClickHandler();
        setIsOpen(true)
        setTimeoutRef(setTimeout(() => {
            setIsOpen(false);
        }, autoHideTime));
    }

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef);
        }
    }, [])

    return <>
        {
            open && 
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
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
        }
        <button onClick={onBtnClick} className={`${utilStyles.btnWarn} ${props.classNames}`}>Add to cart</button>
    </>
}