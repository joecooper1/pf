import React from "react";

import {BigContactStyle, Text} from '../styles/Contacts';

export default function BigContacts(props) {
    return (<BigContactStyle dimensions={props}>
        <Text>email: joecooper2991@gmail.com</Text>
        <Text>github: <a href="https://www.github.com/joecooper1">www.github.com/joecooper1</a></Text>
        <Text>linkedin: <a href="https://www.linkedin.com/in/joe-cooper-202b2689/">https://www.linkedin.com/in/joe-cooper-202b2689/</a></Text>
    </BigContactStyle>)
};