import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center',
    borderRight: '1px lightgray solid',
    fontFamily: 'Arial',
    padding: 0,
    margin: 0,
  },
  button: {
    height: '50px',
    textTransform: 'capitalize',
    boxShadow: '0 2px 3px 0 gray',
    width: '140px',
    borderRadius: '50px',
    alignItems: 'center',
    marginLeft: '5px',
    marginTop: '5px',
    justifyContent: 'left',
    '&:hover': {
      boxShadow: '0 4px 6px 0 gray',
     }
  },
  add: {
    color:'green',
    fontSize: '32px',
    marginRight: '10px',
  },
  inbox: {
     fontWeight: 'bold',
    "& [class*='MuiListItemText']": {
      fontWeight: "bold"
    },
    "&:hover": {
      backgroundColor:'lightgray',
      cursor: 'pointer',
      borderRadius: '0 15px 15px 0'
    },

  },
  menu: {
        "&:hover": {
      backgroundColor:'lightgray',
      cursor: 'pointer',
      borderRadius: '0 15px 15px 0'
    }
  }
}));


export default function SideBar (props) {
  const classes = useStyles();
  const [hover, setHover] = useState (false);

  const handleClick = () => {
    setHover(!hover);
  };

  return (
   <List className={classes.root}>
        <ListItem>
          <Button className={classes.button}>
          <AddIcon className={classes.add}  /> 
              Compose
          </Button>
        </ListItem>
      <div className={classes.list}>
      <ListItem className={classes.inbox} onClick={()=>handleClick()} >
           <ListItemIcon>
             {
               hover? <InboxIcon htmlColor='red'/> :<InboxIcon />
             }
           
           </ListItemIcon>
           <ListItemText primary="Inbox" style={hover?{color:'red'}: {color:'gray'}}/>
            <p style={hover?{color:'red'}: {color:'gray'}}>{props.count }</p>
        </ListItem>
      </div>

        <ListItem className={classes.menu}>
            <ListItemIcon>
                  <StarBorder />
             </ListItemIcon>
             <ListItemText primary="Starred" />
        </ListItem>
        <ListItem className={classes.menu}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem className={classes.menu}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
    </List>
  );
}