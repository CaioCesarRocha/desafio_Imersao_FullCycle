import { useEffect, useState } from 'react';
import { makeStyles, Typography, Box, Container,IconButton} from '@material-ui/core'
import { useParams} from 'react-router-dom';
import Report from "@material-ui/icons/NewReleases";
import Like from "@material-ui/icons/ThumbUp";
import Deslike from "@material-ui/icons/ThumbDown";
import { useSnackbar } from "notistack";

import Navbar from '../components/Navbar';


const useStyles = makeStyles({
    containerAll:{
        width: '100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
    },
    containerPost:{
        width: 700,
        padding: 15,
        backgroundColor: '#14161a',
        border: '1px solid grey',
        borderRadius: '12px',
        color: '#fff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',     
    },
    titlePost: {
        borderRadius: '12px',
        backgroundColor: '#2e3540',
        margin: '0 auto',
        textAlign: 'center',
        color: '#fff',
        padding: 10
    },
    body:{
        marginTop: 15,
        fontSize: 25
    },
    boxIcons:{
        display: 'flex',
        flexDirection: 'row'
    },
    iconReport:{
        color: "#FFCD00",
        marginLeft: 5
    },
    iconDeslike:{
        color: '#d42b28'
    },
    iconLike:{
        color: '#30a321'
    }

})

interface typePost{
    userId: string;
    id: string;
    title: string;
    body: string;
}


const ShowSelectedPost = () =>{
    const styles = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [ post, setPost] = useState<typePost>({userId:'', id: '', title: '', body: ''})
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((data) => data.json())
        .then((data) => setPost(data));
    }, [id])

    function handleClickIcon(status: string){
        if(status === 'like')
        enqueueSnackbar(`Você curtiu o post!`, {
            variant: "success",
        });
        else if(status === 'deslike') {
            enqueueSnackbar(`Deslike adicionado, buscaremos novos posts com seu perfil!`, {
                variant: "error",
            }); 
        }else{
            enqueueSnackbar(`Post denunciado.`, {
                variant: "warning",
            }); 
        }
    }

    return(
        <>
            <Navbar title={`Post feito pelo usuário - ${post.userId}`}/>
            <Container className={styles.containerAll}>
                <Container className={styles.containerPost}>
                    <Box  className={styles.titlePost}>
                        <Typography variant='h3'>
                            {post.title}
                        </Typography>
                    </Box>
                        <Typography className={styles.body} >
                            {post.body}
                        </Typography>
                    <Box className={styles.boxIcons}>
                        <IconButton 
                            edge="start" ria-label="menu" className={styles.iconLike}
                            onClick={() => handleClickIcon('like')}
                        >
                            <Like/>
                        </IconButton>

                        <IconButton 
                            edge="end" ria-label="menu" className={styles.iconDeslike}
                            onClick={() => handleClickIcon('deslike')}
                        >
                            <Deslike/>
                        </IconButton>
                             
                        <IconButton 
                            edge="end" ria-label="menu" className={styles.iconReport}
                            onClick={() => handleClickIcon('report')}
                        >
                            <Report/>
                        </IconButton>             
                    </Box>                 
                </Container>
            </Container>
        </>
    )
    
}
    
    export default ShowSelectedPost