import Modal from '@mui/material/Modal';
import React from 'react';
import Box from '@mui/material/Box';
export default function ModalCustom({ children, ...restProps }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: `white`,
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        display: 'block',
        maxWidth: '100%',
        maxHeight: "100%",
        overflow: 'hidden',
    };

    return (
        <Modal >
            <Box sx={style} {...restProps }>
                {children}
            </Box>
        </Modal>
    )
}


