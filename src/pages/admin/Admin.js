import React, { Component } from 'react';
import novaLogo from '../../images/novaLogo.png';
import Navbar from '../navbar/Navbar';


class Admin extends Component {
    constructor(props){
        super()
        this.state = {
          pageViews: 0,
          reset: false,
        }
    }
    redirectPhishing = () => {
        this.props.history.push('/phishingStats');
    }

    redirectUSB = () => {
        this.props.history.push('/');
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
                this.setState({pageViews: data.views})
            })
    }

    resetViews = () => {
        this.setState({reset:true})
        var data = JSON.stringify({views: this.state.pageViews});
        console.log("Input data:"+data);
        var url="/usbstat";
        fetch(url, {
            method: 'DELETE',
            headers: new Headers(),
            body: JSON.stringify({views: this.state.pageViews})
        })
            .then(res => {
                res.json();
            })
        }

    componentDidMount = () => {
        this.getNumViews();
        console.log("Page Views:"+this.state.pageViews);
    }

    printResetMessage = () => {
        if(this.state.reset == true){
            return (
                <div>
                    <p className="homePageText">
                        Successfully reset the number of views from {this.state.pageViews} to 0.
                    </p>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div>
                <Navbar />
                    <div className="container"><br />
                        <div className="mainPageButtons">
                            <button className="mainOptionButton" onClick={() => this.resetViews()}>
                                Reset Number of Views
                            </button><br/><br/>
                        </div>
                        {this.printResetMessage()}
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

export default Admin;