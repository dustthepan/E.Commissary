import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import {Switch, Route} from 'react-router-dom';
import {auth ,createUserProfileDocument} from '../src/firebase/filebase.utils';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null // default state
    }
  }
  
  unsubscribeAuth = null;

  componentDidMount() { // fetching credentials
    this.unsubscribeAuth= auth.onAuthStateChanged( async userAuth => { // authState built in method in firebase
      
      // createUserProfileDocument(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // checks to see if database has updated at reference (userRef)
          
        userRef.onSnapshot(snapshot => {
            
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          }) // returns snapShot object with data related to new and old users
          // must use .data method to see snapshot data
      }
    
  });
}


  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path= '/' component={HomePage} /> 
          <Route path= '/shop' component={ShopPage} />
          <Route path= '/signin' component={Sign} />
        </Switch>
      </div>
    )
  }
}

export default App;
