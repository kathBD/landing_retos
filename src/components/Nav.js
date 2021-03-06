import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar  color="#3489eb" aria-label="menu">
          <Typography variant="h6">
            Galería de Retos
          </Typography>
          
        </Toolbar>
      </AppBar>
     
  
     
    </div>
  );
}
