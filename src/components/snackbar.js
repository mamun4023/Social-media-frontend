import {Snackbar, Button} from '@mui/material';
import React from 'react'
export default function SnackBar() {
    const [open, setOpen] = React.useState(true);
    
    const handleClick = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return (
      <>
        <Button onClick={handleClick}>Open simple snackbar</Button>
            <Snackbar
                 open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                // action={action}
            />
      </>
    );
  }