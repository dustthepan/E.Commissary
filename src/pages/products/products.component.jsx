import React from 'react';
import {connect} from 'react-redux'
import DisplayItem from '../../components/display-item/display-item.component';
import {selectCollection} from '../../redux/products/products.selector';
import './products.styles.scss';

const Products = ({collections}) => {
    console.log(collections)
   const {title,items} = collections
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

    collections: selectCollection(ownProps.match.params.productID)(state)

});







export default connect(mapStateToProps)(Products);

