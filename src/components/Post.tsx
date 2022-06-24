import { makeStyles,  Container, Button} from '@material-ui/core'


const useStyles = makeStyles({
    container:{
        height: 150,
        backgroundColor: '#14161a',
        border: '1px solid grey',
        borderRadius: '12px',
        color: '#fff',
        alignItems: 'center',
        display: 'flex',
        textAlign: 'center'
        
    },
    ButtonPost: {
        borderRadius: '12px',
        backgroundColor: '#252627',
        margin: '0 auto',
        textAlign: 'center',
        color: 'success',
        padding: 10,
        fontSize: 14     
    }
})

interface propsPost {
    title: string,
    onClick: () => void
}


const Post = (props: propsPost) =>{
    const styles = useStyles();

    return(
        <Container 
            className={styles.container}    
        >
            <Button
                className={styles.ButtonPost}
                color='primary'
                variant='contained'
                onClick={props.onClick}     
            >            
                {props.title}           
            </Button>
        </Container>
    )
    
    }
    
    export default Post;