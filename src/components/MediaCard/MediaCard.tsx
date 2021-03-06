import React, { PropsWithChildren } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 345,
            margin: theme.spacing(2)
        },
        media: {
            height: 140,
        }
    }),
);

export interface MediaCardProps {
    image: string,
    title: string,
};

export const MediaCard: React.FC<MediaCardProps> = (props: PropsWithChildren<MediaCardProps>) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    {props.children}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share <ShareIcon/></Button>
            </CardActions>
        </Card>
    );
}