import React, { Component } from 'react';
import axios from 'axios';
import { Navbar } from '../../containers';

class SpecificCommunity extends Component {
    state = {
        community: []
    };
    async componentDidMount() {
        const { data: comData} = await axios.get(`http://localhost:5000/communities/${this.props.match.params.name}`);
        this.setState({community: comData});
    }
    render() {
        return(
            <React.Fragment>
                <Navbar />
                {this.state.community.map(
                        community => 
                            <div key={community._id} >
                                <h2>{community.name}</h2>
                                <p>Members: {community.members}</p>
                                <p>Type: {community.type}</p>
                            </div>        
                    )}
            </React.Fragment>
        );
    }
}

export default SpecificCommunity;