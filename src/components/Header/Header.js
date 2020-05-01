import React from 'react';
import './Header.scss';
import Search from '../Search/Search';
import logo from '../../images/logo.png';


class Header extends React.Component {

    render() {

        return (
            <header>
                <div className="wrapper">
                    <img src={logo} alt="logo" className="logo"/>
                    <Search/>
                </div>   
            </header>
        )
    }

}

export {Header};