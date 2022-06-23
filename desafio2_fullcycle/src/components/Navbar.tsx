import {makeStyles, AppBar, Toolbar,IconButton, Typography, Box} from '@material-ui/core';
import Chat from "@material-ui/icons/Chat";
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
   
    boxTitle:{ 
        textAlign: 'center',
        color: '#fff',
        fontSize: 27,
        width: '70%',  
    },
})


interface navbarProps{
    title: string,
}

const Navbar = (props: navbarProps) =>{
    const styles = useStyles();
    const navigate = useNavigate();
  
    return(
        <AppBar position='static'>
            <Toolbar >
                <IconButton 
                    edge="start" color="inherit" aria-label="menu" 
                    onClick={() => navigate('/')}
                >
                    <Chat />
                </IconButton>

                <Typography variant="h6">Imersão FullCycle</Typography>
                
                <Box className={styles.boxTitle}>
                    {props.title}
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;