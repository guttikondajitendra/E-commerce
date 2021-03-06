import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/homepage.components.jsx';
import ShopPage from './Pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SigninSignup from './Pages/Sign-in and Sign-up page/sign-in&sign-up.component.jsx';
import { auth, createuserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
           setCurrentUser({
               
                 id: snapShot.id,
                 ...snapShot.data()
              
               
               
               
        })});
       
      }
        setCurrentUser( userAuth);
      
    } )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div >
      <Header  />
    <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SigninSignup />)} />
     </Switch>    
    </div>
    );
  }
}

const mapStateToProps = ({user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App);
