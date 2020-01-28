import React from 'react';
import {Route} from 'react-router-dom';
import renderInventory from '../../components/inventory/inventory.component';
import Products from '../products/products.component';

//removed for inventory page
// import Display from '../../components/display/display.component';
// import {connect} from 'react-redux';
// import {selectInventory} from '../../redux/products/products.selector';
// import {createStructuredSelector} from 'reselect';


//redux implement
// class ShopPage extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

const ShopPage = ({match}) => (

    <div className='display'>
            <Route exact path={`${match.path}`} component={renderInventory} />
            <Route path ={`${match.path}/:productID`} component ={Products} />
    </div>
 );

//removed added to inventory component
//  const mapStateToProps = createStructuredSelector({
//      inventory: selectInventory
//  })


export default ShopPage;