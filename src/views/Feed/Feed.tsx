import React, { useState } from 'react';
import { Fab, Theme, Grid, } from '@material-ui/core';
import { MediaCard } from '../../components/MediaCard/MediaCard';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, createStyles } from '@material-ui/styles';
import { AddPostDialog } from '../../components/AddPostDialog/AddPostDialog';
import { Post } from '../../model';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../state';
import { FeedAction, ADD_POST } from '../../state/actions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardsContainer: {
            // flexDirection: "row"
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
);

export const Feed: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const styles = useStyles();
    const posts = useSelector((state: ApplicationState) => state.feed);
    const dispatch = useDispatch()

    const handleAddPostAction = (post: Post | null) => {
        setDialogVisible(false);
        if (post !== null) {
            dispatch({
                type: ADD_POST,
                post
            } as FeedAction);
        }
    };

    const cards = posts.map(post => (
        <Grid item key={post.id} xs={12} sm={6} md={3}>
            <MediaCard image={post.image} title={post.title}>{post.text}</MediaCard>
        </Grid>
    ));

    return (
        <div>
            <Grid container className={styles.cardsContainer}>
                {cards}
            </Grid>
            <AddPostDialog open={dialogVisible} onClose={handleAddPostAction} />
            <Fab aria-label="Add post" className={styles.fab} color="primary" onClick={() => setDialogVisible(true)}>
                <EditIcon />
            </Fab>
        </div>
    );
}
