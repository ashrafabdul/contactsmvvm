import React, { Component } from 'react';

class ContactsRowView extends React.Component {


    render() {

        console.log(this.constructor.name," : ","In render");
        console.log(this.constructor.name," : ","Props:",this.props);

        const contact = this.props.contact;
        return (<tr>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
        </tr>);
    }
}

export default ContactsRowView;