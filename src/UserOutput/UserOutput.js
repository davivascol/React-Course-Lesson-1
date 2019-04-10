import React, {Component} from 'react';
import './UserOutput.css'

class UserOutput extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="UserOutput">
                <p>Whatever happened to my garden of black roses</p>
                <p>Oh nurturing years of so long</p>
                <p>{this.props.username}</p>
            </div>
        );
    }
}

export default UserOutput;