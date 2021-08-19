import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'grid',
        gridTemplateRows: 'repeat(4, 50px) 1px 50px',
        placeItems: 'end',
        '& img': {
            maxHeight: '25px',
            allignItems: 'end',
            paddingRight: '15px'
        },
    },
  }));

export default function TopBar () {

    const classes = useStyles();

    return (
      <div className={classes.root}>
                        <img src='./images/google-calendar.png' alt='google calendar icon' />
                        <img src='./images/google-keep.png' alt='google keep icon' />
                        <img src='./images/google-task.png' alt='google task icon' />
                        <img src='./images/google-contacts.png' alt='google contacts icon' />
     </div>

    );
    

}
