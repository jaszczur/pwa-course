import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
import { DialogContent, DialogContentText, DialogActions } from '@material-ui/core';


export interface AddPostDialogProps {
    open: boolean;
    onClose: (value: Post | null) => void;
}

export const AddPostDialog = ({ onClose, open }: AddPostDialogProps) => {
    const handleClose = () => {
        onClose(null);
    };

    const handleAccept = () => {
        onClose(null);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="add-post-dialog-title">Add post</DialogTitle>
            <DialogContent>
                <DialogContentText id="add-post-dialog-description">Write new post</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleAccept} color="primary" autoFocus>Post</Button>
            </DialogActions>

        </Dialog>
    );
};
