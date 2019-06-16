import React, { useState } from 'react';
import { Typography, Fab, Theme } from '@material-ui/core';
import { MediaCard } from '../../components/MediaCard/MediaCard';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, createStyles } from '@material-ui/styles';
import { AddPostDialog } from '../../components/AddPostDialog/AddPostDialog';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            width: 500,
            position: 'relative',
            minHeight: 200,
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
);

export const Feed: React.FC = () => {
    const styles = useStyles();
    const [dialogVisible, setDialogVisible] = useState(false);

    return (
        <div>
            <MediaCard image="/images/logo.jpg" title="Witojcie">
                Yo
            </MediaCard>

            <AddPostDialog open={dialogVisible} onClose={() => setDialogVisible(false)}/>
            <Fab aria-label="Add post" className={styles.fab} color="primary" onClick={() => setDialogVisible(true)}>
                <EditIcon />
            </Fab>
        </div>
    );
}
