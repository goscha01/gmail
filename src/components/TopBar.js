import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    barContainer: {
      height: '70px',
      alignItems: 'center',
      borderBottom: '1px lightgray solid',
      color: 'gray',
    },
    logBar: {
      height: '45px',
    },
    burger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      display: 'flex',
      height: '45px',
    },
    searchBarContainer: {
    },
    searchBarWrapper: {
      width: '60%',
      height: '50px',
      display: 'flex',
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '5px',
      paddingLeft: '5px',
      paddingRight: '5px',
    },
    searchBar: {
        width: '90%',
        fontSize: '18px',
        backgroundColor: 'lightgray',
        border: 'none',
        outline:'none',
      },
    topBarIcons: {
      justifyContent: 'space-evenly',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }));

export default function TopBar () {

    const classes = useStyles();

    function handleClick (event) {
      console.log(event.target.id)
      alert(event.target.id)
    }

    return (
          <Grid className={classes.barContainer} container >
              <Grid className={classes.logBar} container item xs={2} >
                  <Grid className={classes.burger}  item xs={4}>
                      <MenuIcon />
                  </Grid>
                  <Grid  item xs={8}>
                      <img className={classes.logo}   src='./images/gmail-logo.png' alt='Gmail logo'/>
                  </Grid>
              </Grid>
              <Grid  className={classes.searchBarContainer} container item xs={9}>
                  <div className={classes.searchBarWrapper}>
                       <SearchIcon />
                          <input  className={classes.searchBar} type='search' placeholder="Search mail"/>
                        <TuneIcon />
                  </div>
              </Grid>
              <Grid className={classes.topBarIcons} container item xs={1} >
                        <HelpOutlineIcon
                        id='help'
                        onClick={(e)=>handleClick(e)} />
                        <SettingsIcon 
                        id='settings'
                        onClick={(e)=>handleClick(e)}/>
                        <AppsIcon 
                        id='more'
                        onClick={(e)=>handleClick(e)}/>
                        <AccountCircleIcon
                        id='user'
                        onClick={(e)=>handleClick(e)}/>
              </Grid>
          </Grid>
    );
    

}
