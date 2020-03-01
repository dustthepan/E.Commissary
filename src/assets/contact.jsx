import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {green,blue} from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(-2.25),
    },
  },
  iconHover: {
    '&:hover': {
      color: green[500],
    },
  },
}));

export default function Contact() {
  const signout = useStyles();

  return (
    <div className={signout.root}>
    
      <ContactSupportIcon
        color="primary"
        fontSize="large"
        style={{fontSize: 50}}
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