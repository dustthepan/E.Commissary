const INITIAL_STATE = {
    sections : [
        {
          title: 'cold,allergy,fever',
          imageUrl: "/datascrape-e/HomePage/cold.jpeg",
          id: 1,
          linkUrl: 'shop/cold'
        },
        {
          title: 'oral care',
          imageUrl: "/datascrape-e/HomePage/oral2.gif",
          id: 2,
          linkUrl: 'shop/oral'
        },
        {
          title: 'pain relief',
          imageUrl: "/datascrape-e/HomePage/pain.png",
          id: 3,
          linkUrl: 'shop/pain'
        },
        {
          title: 'diabetic',
          imageUrl: "/datascrape-e/HomePage/diabetes2.gif",
          size: 'large',
          id: 4,
          linkUrl: 'shop/diabetic'
        },
        {
          title: 'diagnostics',
          imageUrl: "/datascrape-e/HomePage/diagnostics.gif",
          size: 'large',
          id: 5,
          linkUrl: 'shop/diagnostics'
        }
      ]
};

//no action needed
const directoryReducer = (state=INITIAL_STATE, action) => {

    if (action.type) {
        return state;
    }
}

export default directoryReducer;

