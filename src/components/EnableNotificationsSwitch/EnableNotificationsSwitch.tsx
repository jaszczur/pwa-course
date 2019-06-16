import React, { useState } from 'react';
import { FormControlLabel, Switch, Box, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    box: {
        margin: theme.spacing(2)
    }
}));

export const EnableNotificationsSwitch: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const styles = useStyles();

    return (
        <Box className={styles.box}>
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={(e, chkd) => setChecked(chkd)} />
                }
                label="Notifications"
            />
        </Box>
    );

}