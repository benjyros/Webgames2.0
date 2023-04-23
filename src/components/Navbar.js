import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

/*
import { auth } from '../config';
import { signOut } from 'firebase/auth';
*/

function Navbar() {
    //const navigate = useNavigate();
    const location = useLocation();

    // Event handler when signing out
    /*
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/login', { replace: true });
        }).catch((error) => {
            alert(error.message);
        })
    }
    */

    return (
        <div className="navbar bg-[#ffbfd5]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52">
                        <li className={`${location.pathname === '/tictactoe' ? 'bordered' : ''} text-white`}><Link to='/tictactoe'>TicTacToe</Link></li>
                        <li className={`${location.pathname === '/hangman' ? 'bordered' : ''} text-white`}><Link to='/hangman'>Hangman</Link></li>
                        <li className={`${location.pathname === '/speedclicker' ? 'bordered' : ''} text-white`}><Link to='/speedclicker'>Speedclicker</Link></li>
                        <li className={`${location.pathname === '/reactionclicker' ? 'bordered' : ''} text-white`}><Link to='/reactionclicker'>Reactionclicker</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn transition duration-150 ease-in-out bg-transparent border-transparent normal-case text-xl text-white hover:scale-105 hover:bg-transparent hover:border-transparent">Twäwis-Games</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1tabs">
                    <li className={`${location.pathname === '/tictactoe' ? 'tab-active' : ''} tab tab-bordered text-white`}><Link to='/tictactoe'>TicTacToe</Link></li>
                    <li className={`${location.pathname === '/hangman' ? 'tab-active' : ''} tab tab-bordered text-white`}><Link to='/hangman'>Hangman</Link></li>
                    <li className={`${location.pathname === '/speedclicker' ? 'tab-active' : ''} tab tab-bordered text-white`}><Link to='/speedclicker'>Speedclicker</Link></li>
                    <li className={`${location.pathname === '/reactionclicker' ? 'tab-active' : ''} tab tab-bordered text-white`}><Link to='/reactionclicker'>Reactionclicker</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
}

export default Navbar;
