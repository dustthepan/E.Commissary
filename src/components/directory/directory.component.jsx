import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'cold,allergy,fever',
                  imageUrl: "/datascrape-e/HomePage/cold.jpeg",
                  id: 1,
                  linkUrl: 'shop/cold'
                },
                {
                  title: 'oral care',
                  imageUrl: "/datascrape-e/HomePage/oral.jpeg",
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'pain management',
                  imageUrl: "/datascrape-e/HomePage/pain.png",
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'diagnostics',
                  imageUrl: "/datascrape-e/HomePage/diagnostics.jpeg",
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'diabetics',
                  imageUrl: "/datascrape-e/HomePage/diabetes.jpeg",
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map((section) => (
                    <MenuItem key={section.id} title ={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                ))}
               </div> 
        )
    }
}

export default Directory;