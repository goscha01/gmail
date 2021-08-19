import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
      },
}));


export default function Menu () {
  const classes = useStyles();

 return(
    <MenuList className={classes.root}>
    <MenuItem>Item1</MenuItem>
    <MenuItem>Item2</MenuItem>
    <MenuItem>Item3</MenuItem>
  </MenuList>
 )
  

}
