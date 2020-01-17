import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/filebase.utils';
// allows access to redux 
// can pass in two functions
import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectHidden} from '../../redux/cart/cart.selector';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

//SVG
import {Health as Logo} from '../../assets/logo';
import LogIn from '../../assets/account';
import SignOut from '../../assets/signout';
import Contact from '../../assets/contact';
import Browse from '../../assets/browse';


const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className = 'logo-container' to= '/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                <Browse />
            </Link>
            <Link className='option' to='/shop'>
                <Contact />
            </Link>
                
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>    
                  <SignOut className ='signout' />
                </div>
                ) : (
                <Link className='option' to='/signin'>
                    <LogIn className='login' /> 
                </Link>
                ) 
            }
        <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown/>
        }
     </div>
);


// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectHidden(state)
// }) ** functions the same as with createStructuredSelector

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header);