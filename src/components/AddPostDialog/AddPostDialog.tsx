import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { Post } from '../../model';
import { DialogContent, DialogContentText, DialogActions, TextField } from '@material-ui/core';
import uuid from 'uuid/v4';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    }),
);
export interface AddPostDialogProps {
    open: boolean;
    onClose: (value: Post | null) => void;
}

export const AddPostDialog = ({ onClose, open }: AddPostDialogProps) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const styles = useStyles();

    const handleClose = () => {
        onClose(null);
    };

    const handleAccept = () => {
        onClose({
            id: uuid(),
            image: "/images/logo.jpg",
            text,
            title
        });
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="add-post-dialog-title">Add post</DialogTitle>
            <DialogContent>
                <DialogContentText id="add-post-dialog-description">Write new post</DialogContentText>
                <div className={styles.container}>
                    <TextField
                        id="post-title"
                        className={styles.textField}
                        label="Title"
                        value={title}
                        onChange={evt => setTitle(evt.target.value)}
                        margin="normal"
                    />
                    <TextField
                        id="post-text"
                        className={styles.textField}
                        label="Text"
                        value={text}
                        onChange={evt => setText(evt.target.value)}
                        margin="normal"
                        multiline
                        rows="5"
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleAccept} color="primary" autoFocus>Post</Button>
            </DialogActions>

        </Dialog>
    );
};
