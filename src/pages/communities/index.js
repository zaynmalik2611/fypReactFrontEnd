import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../../containers';
import './style.css';

export default class Communities extends Component {
    state = {
        communities : [],
    }
    async componentDidMount() {
        const { data: comData} = await axios.get('http://localhost:5000/communities');
        this.setState({communities: comData});
        console.log(this.state.communities);
    }
    render () {
        return(
            <>
            <Navbar />
            <div className="communities">
                <div>
                    <h2>Top Communities</h2>
                    <p>
                        <b>What's going on in the world</b>
                    </p>
                </div>
                <div className="communityNav">
                    {this.state.communities.map(
                        community => 
                            <div key={community._id} >
                                <Link to={"communities/" + community.name}>{community.name}</Link>
                            </div>        
                    )}
                </div>
            </div>
            </>
        );
    }
    
};
