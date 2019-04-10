import React, {Component} from 'react';
import './UserInput.css' 

class UserInput extends Component {

    
    render() {
        const style = {
            backgroudColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '6px'
        };
        return (
            <div className="UserInput">
                Artista: <input type="text" onChange={this.props.change} value={this.props.username} style={style}></input>
            </div>
        );
    }
}

export default UserInput
//Artista: <input type="text" onChange={() => this.props.change(event)}></input>