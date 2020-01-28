import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import {connect} from 'react-redux';
import {selectDirectoryItems} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
import './directory.styles.scss';

// class Directory extends React.Component {
   
  //Removed, added redux
  // constructor(){
    //     super();

    //     this.state = {
    //         sections : [
    //             {
    //               title: 'cold,allergy,fever',
    //               imageUrl: "/datascrape-e/HomePage/cold.jpeg",
    //               id: 1,
    //               linkUrl: 'shop/cold'
    //             },
    //             {
    //               title: 'oral care',
    //               imageUrl: "/datascrape-e/HomePage/oral2.gif",
    //               id: 2,
    //               linkUrl: 'shop/oral'
    //             },
    //             {
    //               title: 'pain relief',
    //               imageUrl: "/datascrape-e/HomePage/pain.png",
    //               id: 3,
    //               linkUrl: 'shop/pain'
    //             },
    //             {
    //               title: 'diabetic',
    //               imageUrl: "/datascrape-e/HomePage/diabetes2.gif",
    //               size: 'large',
    //               id: 4,
    //               linkUrl: 'shop/diabetic'
    //             },
    //             {
    //               title: 'diagnostics',
    //               imageUrl: "/datascrape-e/HomePage/diagnostics.gif",
    //               size: 'large',
    //               id: 5,
    //               linkUrl: 'shop/diagnostics'
    //             }
    //           ]
    //     }
    // }

    const Directory = ({sections}) => (

     <div className='directory-menu'>
        {sections.map(({id, ...otherProps}) => (
             <MenuItem key={id} {...otherProps}/>
            ))}
    </div> 
  )

  const mapStateToProps = createStructuredSelector({
    sections: selectDirectoryItems
  })


export default connect(mapStateToProps)(Directory);