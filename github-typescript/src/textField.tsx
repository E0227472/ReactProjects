import React, { Component, FC } from 'react';

// interface merely tells compiler what shape should the object have; what properties it should have
interface Person {
    firstName: string;
    lastName: string;
}

// interface that defines properties that will be sent over to current component
 interface Props {
    text: string;
    bol?: boolean; // ? means field optional
    i?: number;
    fn?: () => void;
    obj: Person
}

const clickHandler = () => {
    console.log('test');
}
 
// FC => refers to functional component with type props 
const TextField: FC<Props> = ({ // => props object destructuring 
    text,
    bol,
    i,
    obj,
    fn
}) => {
    
    
    return (  
        <React.Fragment>
        <h1>{text}</h1>
        <button onClick = {fn}>click me</button>
        </React.Fragment >
    );
}
 
export default TextField;