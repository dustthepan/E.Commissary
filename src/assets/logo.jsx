import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {green,blue} from '@material-ui/core/colors';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(-3),
    },
  },
  iconHover: {
    '&:hover': {
      color: green[500],
    },
  },
}));

export function Health() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LocalHospitalIcon
        color="primary"
        fontSize="large"
        style={{fontSize: 100}}
        component={svgProps => {
          return (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="50%" stopColor={blue[300]} />
                  <stop offset="100%" stopColor={blue[500]} />
                </linearGradient>
              </defs>
              {React.cloneElement(svgProps.children[0], {
                fill: 'url(#gradient1)',
              })}
            </svg>
          );
        }}
      />
    </div>
  );
}
