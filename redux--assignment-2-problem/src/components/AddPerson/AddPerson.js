import React from 'react';

import './AddPerson.css';
// button component 
const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;