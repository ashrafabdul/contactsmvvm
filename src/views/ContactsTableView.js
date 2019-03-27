import React, { Component } from 'react';
import ContactsRowView from './ContactsRowView'

class ContactsTableView extends React.Component {



    render() {
        console.log(this.constructor.name," : ","In render");
        console.log(this.constructor.name," : ","Props:",this.props);
        const {filteredContacts} = this.props;
        console.log(this.constructor.name," : ","filteredContacts:",filteredContacts);

        var rows = [];

        console.log(this.constructor.name," : ","filteredContacts Length:",filteredContacts.length)

        for(var i=0, len=filteredContacts.length; i < len; i++){
            console.log(this.constructor.name," : ","In filteredContacts.forEach:",filteredContacts[i].key);
            rows.push(<ContactsRowView contact={filteredContacts[i]} key={filteredContacts[i].key}/>);
        }

        console.log(this.constructor.name," : ","Rows:",rows);
        return (<table><thead><tr><th>Name</th><th>Number</th></tr></thead><tbody>{rows}</tbody></table>);
    }


}

export default ContactsTableView;