import React, { Component } from 'react';
import novaLogo from '../../images/novaLogo.png';
import Navbar from '../navbar/Navbar';

class phishingStats extends Component {
    constructor(props){
        super()
        this.state = {
          pageViews: 0,
        }
    }
    redirectAdmin = () => {
        this.props.history.push('/admin');
    }
    
    render() {
        return (
            <div>
                <Navbar />
                    <div className="container">
                        <div className="welcomeText">
                        <strong><i>{"Phishing Stats"}</i></strong>
                        </div><br />
                        <div className="centerImage">
                            <img className='novaLogo' alt='Nova Logo' src={novaLogo}/>
                        </div><br/>
                        <table className="formatStatsTable">
                            <tbody>
                                <tr className="headerCol">
                                    <th className="listHeadings col1Width"></th>
                                    <th className="listHeadings col2Width">Number of Students</th>
                                </tr>
                                <tr key='1' className="formatStatsRow">
                                    <td className="listNames">Phising Emails sent out:</td>
                                    <td className="listOther">52</td>
                                </tr>
                                <tr key='4' className="formatStatsRow">
                                    <td className="listNames">Phishing Emails Opened:</td>
                                    <td className="listOther">54</td>
                                </tr>
                                <tr key='2' className="formatStatsRow">
                                    <td className="listNames">Phishing Emails Submitted Data:</td>
                                    <td className="listOther">54</td>
                                </tr>
                                <tr key='3' className="formatStatsRow">
                                    <td className="listNames">Percent:</td>
                                    <td className="listOther">35%</td>
                                </tr>
                            </tbody>
                        </table><br />
                        <div className="seperatePar">
                            <p>
                                *Disclaimer: No personal information is stored during this survey.
                            </p>
                            <button onClick={() => this.redirectAdmin()}>*</button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default phishingStats;