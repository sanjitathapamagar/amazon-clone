import React,{useState} from 'react';
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from "../Firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));
    };
    const register = e => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
               console.log(auth);
               if (auth) {
                   history.push('/');
               }
            })
            .catch(error => alert(error.message));
        e.preventDefault()
    };
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                     alt=''/>
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see your Privacy
                    Notice
                </p>
                <button className='login__registerButton' onClick={register}>Create you amazon account</button>
            </div>
        </div>
    )
}

export default Login;
