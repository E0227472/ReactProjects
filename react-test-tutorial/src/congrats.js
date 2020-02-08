import React from 'react';
import PropTypes from 'prop-types';


const Congrats = (props) => {
    return (
        <div id = "component">
            {props.success === true ? (<div id= "component-congrats">
                <span id = "congrats-message">
                    Congragulations! You guessed the message correctly !
                </span>
            </div>) : <div id = "component-congrats"></div>}
            </div>
    );
}
/*
    Sets the prop's expected type
 */
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}
export default Congrats;