import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import './Navbar.css';
import novaLogo from '../../images/novaLogo.png'
//import goalieIcon from '../../images/hockeyGoalieIcon.jpg'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settingOpen: false
        };
    }

    redirectPhishing = () => {
        this.props.history.push('/phishingStats');
    }

    redirectUSB = () => {
        this.props.history.push('/');
    }

    redirectHome = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
        <div>
          <nav className="navbar navbar-expand-lg">
            <img className="navbarLogo novaIcon" src={novaLogo} alt='novaNavbarLogo'  onClick={() => this.redirectHome()}/>
            <div className="homeButtons">
                <button className="navbarButtons" onClick={() => this.redirectHome()}>
                    Home
                </button><br/><br/>
                <button className="navbarButtons" onClick={() => this.redirectPhishing()}>
                    View Phishing Stats
                </button><br/><br/>
                <button className="navbarButtons" onClick={() => this.redirectUSB()}>
                    View USB Stats
                </button><br/><br/>
            </div>
          </nav>
        </div>
        );
      }
}

export default withRouter(Navbar);