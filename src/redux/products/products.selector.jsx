import {createSelector} from 'reselect';


// const INVENTORY_MAP = {
//     cold: 1,
//     oral: 2,
//     pain: 3,
//     diabetic: 4,
//     diagnostics: 5
//     }
    

const selectProduct = state => state.product;


export const selectCollections = createSelector(
    [selectProduct],
    (product) => product.inventory
);

export const selectPreview = createSelector(
    [selectCollections],
    (inventory) => Object.keys(inventory).map(key => inventory[key])
);

export const selectCollection= productUrl => 
      createSelector(
        [selectCollections],
        (inventory) => inventory[productUrl]
    );
      
    


