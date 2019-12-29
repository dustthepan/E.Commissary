import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {auth ,createUserProfileDocument} from './firebase/filebase.utils';
import './App.css';

class App extends React.Component {
  
  //**REMOVED FOR REDUX */
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null // default state
  //   }
  // }
  
  unsubscribeAuth = null;

  componentDidMount() { // fetching credentials

    const {setCurrentUser} = this.props

    this.unsubscribeAuth= auth.onAuthStateChanged( async userAuth => { // authState built in method in firebase
      
      // storing data into firebase database
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // checks to see if database has updated at reference (userRef)
          
        userRef.onSnapshot(snapshot => {
            
              setCurrentUser({
                id: snapshot.id,  // returns snapShot object with data related to new and old users
                // must use .data method to see snapshot data
                ...snapshot.data()
              })
            
            console.log(this.state) // null from redux
          })
      } 

      //this.setState({currentUser: userAuth})

      setCurrentUser(userAuth);
    
  });
}


  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path= '/' component={HomePage} /> 
          <Route path= '/shop' component={ShopPage} />
          <Route path= '/signin' component={Sign} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  // dispatch lets redux know any object passed in is an action object
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
