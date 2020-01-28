import React from 'react';
import Display from '../../components/display/display.component';
import {connect} from 'react-redux';
import {selectInventory} from '../../redux/products/products.selector';
import {createStructuredSelector} from 'reselect';


//redux implement
// class ShopPage extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

const ShopPage = ({inventory}) => (

<div className='display'>
         {
            inventory.map(({id, ...otherParts}) => (
                 <Display key={id} {...otherParts} />
             ))
          }
        </div>
 );

 const mapStateToProps = createStructuredSelector({
     inventory: selectInventory
 })


export default connect(mapStateToProps) (ShopPage);