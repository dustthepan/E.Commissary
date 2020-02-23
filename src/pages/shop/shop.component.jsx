import React from 'react';
import {Route} from 'react-router-dom';
import renderInventory from '../../components/inventory/inventory.component';
import Products from '../products/products.component';
import {firestore, collectionstoObjects} from '../../firebase/filebase.utils';

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

// convert shop page to class component in order to move data into Firebase
class ShopPage extends React.Component {

        //make unsubscribe snapchot for shop page items
        unsubscribeSnapshot = null

        componentDidMount () {
                const collectionRef = firestore.collection('collections')

                collectionRef.onSnapshot(async snapshot => {
                        collectionstoObjects(snapshot)
                })
        }


render() {
        
        const {match} = this.props
        return (
                <div className='display'>
                <Route exact path={`${match.path}`} component={renderInventory} />
                <Route path ={`${match.path}/:productID`} component ={Products} />
                </div>
        );    
}}

    

//removed added to inventory component
//  const mapStateToProps = createStructuredSelector({
//      inventory: selectInventory
//  })

export default ShopPage;

