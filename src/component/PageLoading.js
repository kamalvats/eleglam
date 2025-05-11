import React from 'react';
import { makeStyles, Box, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: "#7E563D",
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        padding: theme.spacing(3),
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 2000,
    },
    loader: {
        width: "auto",
        maxWidth: "130px",
        [theme.breakpoints.only("xs")]:{
            maxWidth: "80px",
        },
    },
    progressBar: {
        height: "3px",
    },
}));

export default function PageLoading() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box align="center">
                {/* <LinearProgress height={10} /> */}
                <img className={classes.loader} src="/Image/eg-logo.jpg" alt="loader" />
            </Box>
        </div>
    )
}
