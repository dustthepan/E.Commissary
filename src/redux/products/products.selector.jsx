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
    (product) => product.collections
);

export const selectPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(key => collections[key])
);

export const selectCollection= productUrl => 
      createSelector(
        [selectCollections],
        (collections) => collections[productUrl]
    );
      
    


