import React, { Component } from 'react';
import './style.css';
class AboutUs extends Component {
    state = {  
        address: {
            street: 105
        }
    }
    render() { 
        return ( 
            <div className="jumbotron text-center">
                { this.aboutInfo() }
            </div>  
        );
    }

    aboutInfo() {
        return(
            <h5>We are a family of people suffering from mental health issues and people
            trying to solve these issues through professional help.</h5>
        )
    }
}
 
export default AboutUs;