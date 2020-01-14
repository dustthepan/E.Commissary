import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {green,blue} from '@material-ui/core/colors';
//import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux'
import {hideCart} from '../../redux/cart/cart.action';



// const CartIcon = ({cartAction}) => (

//     <div className = 'cart-icon'>
//         <ShopIcon className='shopping-icon' onClick={cartAction}/>
//         <span className='item-count'>0</span>
//     </div>
// );

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
  
    function CartIcon({hideCart}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ShoppingCartIcon
          color="primary"
          fontSize="large"
          style={{fontSize: 56}}
          onClick={hideCart}
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
  
  const mapDispatchToProps = dispatch => ({
  hideCart: () => dispatch(hideCart())
});

export default connect(null, mapDispatchToProps)(CartIcon)