import React, {Component} from 'react';
import {connect} from 'react-redux';

class Input extends Component {

    render() {
        const content = this.props.success ? null
        : (
            <form className = "form-inline">
                <input
                id = "input-box"
                className = "mb-2 mx-sm-3"
                type = "text"
                placeholder = "Enter your guess"
                />
            <button 
            id = "submit-button"
            className = "btn btn-primary"
            type = "submit">
            submit
            </button>
            
            </form>
        )
        return (
       <div id = "component-input">
           {content}
       </div>
        )
    }
};

const mapStateToProps = (success) => {
    return success;
}

export default connect(mapStateToProps)(Input);
