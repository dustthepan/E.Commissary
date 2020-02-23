import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Sign from './pages/sign/sign.component';
import Checkout from './pages/checkout/checkout.component';
//header for navigation
import Header from './components/header/header.component';
//add redirect so that once logged in, sign page cannot be revisited
import {Switch, Route, Redirect} from 'react-router-dom'; 
//redux actions, reducers, selectors
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
//import {selectPreview} from './redux/products/products.selector'
import {createStructuredSelector} from 'reselect'
import {auth ,createUserProfileDocument} from './firebase/filebase.utils';
//styles
import './App.css';

class App extends React.Component {
  
  //**REMOVED FOR REDUX */ state is now rendered through Redux
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
        const userRef = await createUserProfileDocument(userAuth); // user UID passed in userAuth 
          
        userRef.onSnapshot(snapshot => {
            
              setCurrentUser({
                id: snapshot.id,  
                // returns snapShot object with data related to new and old users
                // must use .data method to see snapshot data
                ...snapshot.data()
              })
            
            //console.log(this.state) 
            //null from redux
          })
      } 
      //removed for redux
      //this.setState({currentUser: userAuth})

      // written to only to program product data into Firebase
      // setCurrentUser(userAuth);
      // addPatientDocsAndCollections('collections',collectionsArr.map(({title, items}) => 
      // ({title,items})))
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
          <Route exact path ='/checkout' component={Checkout} />
          <Route exact path= '/signin' render={()=> 
          this.props.currentUser ? 
          (<Redirect to ='/' />)
          :
          (<Sign/>)
          }
          />
        </Switch>
      </div>
    )
  }
}

//allows currentUser access as long as the account is signed in
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
 // collectionsArr: selectPreview 
})

const mapDispatchToProps = (dispatch) => ({
  // dispatch lets redux know any object passed in is an action object 
  //immediate action
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
