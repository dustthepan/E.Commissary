import React from 'react';
import Display from '../display/display.component';
import './inventory.styles.scss';
import {connect} from 'react-redux';
import {selectPreview} from '../../redux/products/products.selector';
import {createStructuredSelector} from 'reselect';



const renderInventory = ({inventory}) => (

    <div className ='inventory'>
        {
            inventory.map(({id, ...otherParts}) => (
                 <Display key={id} {...otherParts} />
             ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    inventory: selectPreview
})

export default connect(mapStateToProps)(renderInventory)