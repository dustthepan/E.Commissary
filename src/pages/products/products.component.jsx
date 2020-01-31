import React from 'react';
import {connect} from 'react-redux'
import DisplayItem from '../../components/display-item/display-item.component';
import {selectCollection} from '../../redux/products/products.selector';
import './products.styles.scss';

const Products = ({inventory}) => {
    
   const {title,items} = inventory
    return (
    <div className ='inventory-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                   <DisplayItem key ={item.id} item={item}/> 
                ))
            }
        </div>
    </div>
    )
}

const mapStateToProps = (state,ownProps) => ({

    inventory: selectCollection(ownProps.match.params.productID)(state)

});







export default connect(mapStateToProps)(Products);

