import React from "react";

import {BigContactStyle, Text} from '../styles/Contacts';

export default function BigContacts(props) {
    return (<BigContactStyle dimensions={props}>
        <Text>email: joecooper2991@gmail.com</Text>
        <Text>github: www.github.com/joecooper1</Text>
    </BigContactStyle>)
};