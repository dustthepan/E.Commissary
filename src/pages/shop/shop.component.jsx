import React from 'react';
import Display from '../../components/display/display.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
        <div className='display'>
            {
                collections.map(({id, ...otherParts}) => (
                    <Display key={id} {...otherParts} />
                ))
            }
        </div>
        );
    }
}

export default ShopPage;