import React, { Component } from 'react';
import ContactsFilterView from "./ContactsFilterView";
import ContactsTableView from "./ContactsTableView";
import Binder from "../utils/Binder"

class ContactsFilterContainerView extends Component {

    constructor(props) {
        super(props);

        this.getFilterText = this.getFilterText.bind(this);
        this.setFilterText = this.setFilterText.bind(this);
        this.getFilteredContacts = this.getFilteredContacts.bind(this);
        this.setFilteredContacts = this.setFilteredContacts.bind(this);

        this.state = {
            filterText: '',
            filteredContacts:[]
        };
    }

    getFilterText(){
        console.log(this.constructor.name," : ","In getFilterText");
        return this.state.filterText;
    }

    setFilterText(filterText){
        console.log(this.constructor.name," : ","In setFilterText",filterText);
        this.setState({filterText: filterText}, function () {
            Binder.updateValue(this.constructor.name,"filterText",filterText);
        });
    }

    getFilteredContacts(){
        console.log(this.constructor.name," : ","In getFilteredContacts");
        return this.state.filteredContacts;
    }

    setFilteredContacts(filteredContacts){
        console.log(this.constructor.name," : ","In setfilteredContacts",filteredContacts);
        this.setState({filteredContacts: filteredContacts}, function () {
            //Binder.updateValue(this.constructor.name,"filteredContacts",filteredContacts);
        });
    }

    componentDidMount() {
        Binder.viewReady(this.constructor.name);
        Binder.onValueChange(this.constructor.name,"filterText",this.setFilterText);
        Binder.onValueChange(this.constructor.name,"filteredContacts",this.setFilteredContacts);
        console.log(this.constructor.name," : ","In componentDidMount");
        this.setFilterText("");
    }



    render() {
        console.log(this.constructor.name," : ","In render");
        console.log(this.constructor.name," : ","State:",this.state);
        console.log(this.constructor.name," : ","filterContacts Length:",this.state.filteredContacts.length);
            return (<div>
                <ContactsFilterView onFilterTextChange={this.setFilterText}/>
                <ContactsTableView filteredContacts={this.state.filteredContacts} />
            </div>);


    }
}

export default ContactsFilterContainerView;