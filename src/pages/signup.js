
import {
    Button,
    Card,
    TextField,
    Stack
    }
    from '@mui/material';
    
    export default function SignUp(){
    
        return(
            <>
                <Card
                    sx={{
                        maxWidth : 400,
                        textAlign : "center",
                        margin : 'auto',
                        marginTop : 10,
                        padding : 2
                       
                    }}
                >
                    <Stack
                        spacing = {2}
                    > 
                        <TextField 
                            fullWidth
                            label = "Name"
                            
                        />
                        <TextField 
                            fullWidth
                            label = "Email"
                        
                        />
    
                        <TextField
                            fullWidth
                            label = "Password"
                        />
    
                        <Button
                            variant='contained'
                            color='primary'
                            sx={{
                                padding : 1.5
                            }}
                        >
                            signup
                        </Button>
    
                    </Stack>
                </Card>
            </>
        )
    }