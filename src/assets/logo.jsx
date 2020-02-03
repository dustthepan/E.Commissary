import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import {blue} from '@material-ui/core/colors';
//import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {ReactComponent as Logo} from './PHARM-EC.svg';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(-8),
    },
  },
 
}));

export function Health() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo color="primary"
      fontSize="small"/>
    </div>
  );
}
