import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailLine from './EmailLine'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RefreshIcon from '@material-ui/icons/Refresh';
import Axios from 'axios'
import Grid from '@material-ui/core/Grid';
import SideBar from './SideBar';
import IconsBar from './IconsBar'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  gmailContainer: {
    width: '100%',
 },
 topIcons: {
  borderBottom: '1px solid lightgray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
 },
  topIconsLeft: {
    paddingLeft: '20px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topIconsRight: {
    alignContent: 'center',
    textAlign: 'right',
    verticalAlign: 'middle',
    placeItem: 'center'
  },
  gmailLine: {
    paddingLeft: '21px',
    width: '100%',
    display: "inline-block", 
    borderTop: '1px lightgray solid',
  },
  icon: {
    textTransform: 'capitalize'
  },
  iconsBar: {
    // maxWidth: '30px'
    // display: 'flex',
    // maxWidth: 'auto',
    // justify: 'flex-end',
    // alignItems: 'flex-end',
    // textAlign:'flex-end',
    // alignContent: 'flex-end'
  }

}));

const url = "db.json";

export default function Gmail () {
  const classes = useStyles();

  const [emails, setEmails] = React.useState([])
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [allChacked, setAllChcked] = useState(false)
  const [count, setCount] = useState(0)


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event) => {
    console.log(event.currentTarget);
  };
  const handleTabChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const handleChangeAll = () => {
      setAllChcked(!allChacked)

  };

  useEffect( () =>  {
        const fetchData = async () => {
          setLoading(true);
          const response = await Axios(url);
          setEmails(response.data.emails)
          setCount(response.data.emails.length)
          document.title = `Inbox ${count} emails`
        }
        fetchData()
        .catch ((err) => {
            setError(error);
              console.log(err)
           })
      .finally(() => {
        setLoading(false);
      });
    },[count, error])

    if (loading) {
      return <p>Data is loading...</p>;
    } 
  
      return <React.Fragment>
      <Grid className={classes.root}  container >
          <Grid container item xs={2} >
              <SideBar count={count}/>
          </Grid>
          <Grid className={classes.gmailContainer} container item xs={9} >
          <Grid  className={classes.topIcons} container item xs={12} >
              <Grid className={classes.topIconsLeft} item xs={2}>
                <Checkbox 
                              checked={allChacked}
                              onChange={handleChangeAll}
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                 <RefreshIcon />
                <IconButton onClick={handleClick}>
                     <MoreVertIcon />
       
                </IconButton>
            
       
              </Grid>
              <Grid className={classes.topIconsRight} item xs={10}>
              <TablePagination
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                 </Grid>

          </Grid>
               <Tabs
                      className={classes.tabs}
                      value={value}
                      onChange={handleTabChange}
                      variant="fullWidth"
                      indicatorColor="secondary"
                      textColor="secondary"
                      aria-label="icon label tabs example"
                  >
                  <Tab className={classes.icon} icon={<InboxIcon style={{ display: "inline-block", marginRight:"100px", marginBottom:'-25px' }}/> } label="Primary"  />
                  <Tab className={classes.icon} icon={<GroupIcon style={{ display: "inline-block", marginRight:"100px", marginBottom:'-25px' }}/>} label="Social" />
                  <Tab className={classes.icon} icon={<LocalOfferIcon style={{ display: "inline-block", marginRight:"120px", marginBottom:'-25px' }}/>} label="Promotion" />
               </Tabs>

                    {emails.map((item) => (
                      <EmailLine 
                        key={item.id}
                        email={item.email}
                        title={item.title}
                        date={item.date}
                        important={item.important}
                        checked={allChacked}
                        />
       
                      ))}

   

          </Grid>
          <Grid className={classes.iconsBar}  item xs={1} style={{ minWidth: '30px' }}>
            <IconsBar />
          </Grid>
      </Grid>

  </React.Fragment>


    

}
