import { makeStyles, Box, Grid, Container} from '@material-ui/core'
import { useEffect, useState } from 'react';

import Post from "../components/Post";
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom'


const useStyles = makeStyles({
    root:{
        padding: 20,
    }
})


interface typePost{
    userId: string;
    id: string;
    title: string;
    body: string;
}

const ShowPost = () =>{
    const styles = useStyles();
    const navigate = useNavigate();
    const [ posts, setPosts] = useState<typePost[]>([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((data) => data.json())
        .then((data) => setPosts(data));
    }, [])

    return(
        <>
            <Navbar title='Posts'/>
            <Box className={styles.root}>
                <Grid container spacing={2} >
                    {posts.map((post) =>(
                        <Grid item xs={12} sm={4}  key={post.id}>               
                            <Post
                                title={post.title}
                                onClick={() => navigate(`showSelectedPost/${post.id}`)}
                            />            
                        </Grid>
                    ))}
                </Grid>    
            </Box>
        </>
    )

}

export default ShowPost;