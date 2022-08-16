import {Button, Card, Typography} from '@mui/material'
import {Link} from 'react-router-dom';
export default function DefaultPage(){

    return(
        <>

            <Card
                sx={{
                    maxWidth : 300,
                    margin : "auto",
                    marginTop : 10
                    
                }}
            >
                <Typography padding={3} textAlign="center"> 
                    Route not matching
                </Typography>

                <Button
                    fullWidth
                    variant='contained'
                    component = {Link}
                    to = "/login"
                    // startIcon = ""
                >
                    Login
                </Button>
            </Card>
        
        
        </>
    )
}