
import React, { useEffect, useState } from 'react';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from  '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  gmailLine: {
    fontFamily: 'Arial',
    paddingLeft: '20px',
    width: '100%',
    display: "flex", 
    borderTop: '1px lightgray solid',
     
  },
  gmailLineText: {
    width:'100%',
    display:'flex',
    justifyContent: 'space-between',
     margin:'auto',
     paddingLeft: '5px'
   }


}));

export default function EmailLine  (props) {

  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [star, setStar] = useState(false)
  const [label, setLabel] = useState(props.important)

  useEffect(() => {
    setChecked(props.checked)
  },[props]) 

  const handleChange = (event) => {
      setChecked(event.target.checked);
  };

  return(
    <div  className={classes.gmailLine}  > 
      <Checkbox 
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <IconButton onClick={()=>setStar(!star)}>
        {star? <StarIcon htmlColor='yellow'/> : <StarOutlineOutlinedIcon />  }
        
      </IconButton>
      <IconButton onClick={()=>label?setLabel(false):setLabel(true)}>
        {label? <LabelImportantIcon htmlColor='yellow'/> : <LabelImportantIcon /> }    
      </IconButton>
      
        <div className={classes.gmailLineText}>
             <p>{props.email}</p>  
             <p> {props.title}</p>
              <p>{props.date}</p>
        </div>
    </div>
  )

}
