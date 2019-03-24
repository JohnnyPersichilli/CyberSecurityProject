import React, { Component } from 'react';
import novaLogo from '../../images/novaLogo.png';
import Navbar from '../navbar/Navbar';

import './usbDrive.css';

class USBDrive extends Component {
    constructor(props){
        super()
        this.state = {
          pageViews: 0,
          numberOfDrives: 52,
        }
    }
    redirectPhishing = () => {
        this.props.history.push('/phishingStats');
    }

    redirectUSB = () => {
        this.props.history.push('/');
    }

    getNumViews2 = () => {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", '../../../public/numViews.txt', false);
            rawFile.onreadystatechange = () => {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        var allText = rawFile.responseText;
                        var num = parseInt(allText);
                        this.setState({
                            numViews: num
                        });
                    }
                }
            };
        rawFile.send(null);
    }

    getNumViews = () => {
        var url="/usbstat";
        fetch(url, {
            method: 'GET'
        })
            .then(res => {
                console.log(res);
                return res.json();
            }).then( data => {
                console.log(data)
                //this.setState({pageViews: data.views})
            })
    }

    updateNumViews = () => {
        var data = JSON.stringify({views: this.state.pageViews});
        console.log("Input data:"+data);
        var url="/usbstat";
        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({views: this.state.pageViews})
        })
            .then(res => {
                res.json();
            })
        }

    componentDidMount = () => {
        this.getNumViews();
        this.getNumViews2();
        this.updateNumViews();
        console.log("Page Views:"+this.state.pageViews);
    }
    
    render() {
        return (
            <div>
                <Navbar />
                    <div className="container">
                        <div className="welcomeText">
                        <strong><i>{"USB Stats"}</i></strong>
                        </div><br />
                        <div className="centerImage">
                            <img className='novaLogo' alt='Nova Logo' src={novaLogo}/>
                        </div>
                        <div>
                            <p className="homePageText">
                                You have failed Villanova Universitys Cyber Security Test.  This is a test conducted by John Persichilli, Kevin Calhoun, Jared Rymsza, and Matt O'Connell
                                designed to compare the students at Villanova's knowledge of cyber saftey to that of the general population.<br />  
                                Please refrain from plugging any device that is not yours into your computer such as the flash drive you previously found.  Below
                                are the statistics for the USB attack.
                            </p>
                        </div>
                        <table className="formatStatsTable">
                            <tbody>
                                <tr className="headerCol">
                                    <th className="listHeadings col1Width"></th>
                                    <th className="listHeadings col2Width">Number of Students</th>
                                </tr>
                                <tr key='1' className="formatStatsRow">
                                    <td className="listNames">USB Drives Plugged in and ran:</td>
                                    <td className="listOther">{this.state.pageViews}</td>
                                </tr>
                                <tr key='2' className="formatStatsRow">
                                    <td className="listNames">USB Drives Left Out:</td>
                                    <td className="listOther">{this.state.numberOfDrives}</td>
                                </tr>
                                <tr key='3' className="formatStatsRow">
                                    <td className="listNames">Percent:</td>
                                    <td className="listOther">{((this.state.pageViews/this.state.numberOfDrives)*100).toFixed(2)}%</td>
                                </tr>
                            </tbody>
                        </table><br />
                        <div className="seperatePar">
                            <p>
                                *Disclaimer: No personal information is stored during this survey.
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default USBDrive;