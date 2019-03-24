import React, { Component } from 'react';
import './home.css';
import novaLogo from '../../images/novaLogo.png';

class Home extends Component {
    
    redirectPhishing = () => {
        this.props.history.push('/phishingStats');
    }

    redirectUSB = () => {
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div className="container">
                <div className="welcomeText">
                  <strong><i>{"Villanova Cyber Security Project"}</i></strong>
                </div><br />
                <div className="centerImage">
                    <img className='novaLogo' alt='Nova Logo' src={novaLogo}/>
                </div><br/>
                <div>
                    <p className="homePageText">
                     Welcome to Villanova Universitys Cyber Security Test.  This is a test conducted by John Persichilli, Kevin Calhoun, Jared Rymsza, and Matt O'Connell
                    designed to compare the students at Villanova's knowledge of cyber saftey to that of the general population.<br />  
                    Please refrain from plugging any device that is not yours into your computer
                    or submitting usernames on passwords on unsecure websites. <br />
                    Click on the "View Phishig Stats" button to view the success rate of the phishing scam. <br /> 
                    Click on the "View USB Stats" button to view the success rate of the USB attacks.<br />
                    </p>
                </div>
                <div className="mainPageButtons">
                    <button className="mainOptionButton" onClick={() => this.redirectPhishing()}>
                        View Phishing Stats
                    </button><br/><br/>
                    <button className="mainOptionButton" onClick={() => this.redirectUSB()}>
                        View USB Stats
                    </button><br/><br/>
                </div>
                <div>
                    <p>
                        *Disclaimer: No personal information is stored during this survey.
                    </p>
                </div>

            </div>
        );
    }
}

export default Home;