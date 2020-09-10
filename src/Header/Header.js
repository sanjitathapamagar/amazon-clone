import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {auth} from "../Firebase";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthetication = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div className='header__option header__signInButton' onClick={handleAuthetication}>
                        <span
                            className='header__optionLineOne'>Hello, {user ? user.email.substring(0, user.email.lastIndexOf("@")) : 'Guest'}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Order</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className={'header__optionLineTwo header__basketCount'}>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
