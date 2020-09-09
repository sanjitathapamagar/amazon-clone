import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import {auth} from "./Firebase";
import {useStateValue} from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        //will run only once
        auth.onAuthStateChanged(authUser => {
            console.log('The user is', authUser)
            if(authUser) {
                // auth usser logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // user logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    },[]);  // [] means it will run once, if there was something, it would have run everytime comp loads
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/checkout'>
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path=''>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
