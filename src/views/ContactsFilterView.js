import React, { PureComponent } from 'react';

class ContactsFilterView extends PureComponent {

    filterContacts = (event) => {
        event.preventDefault();
        this.props.onFilterTextChange(event.target.value);
    };

    render() {

        console.log(this.constructor.name," : ","In render");
        console.log(this.constructor.name," : ","Props:",this.props);

        return (<div>
            <span><label>Name</label><input name="contactName" type="text" onChange={this.filterContacts}></input></span>

        </div>);

    }

    // //Hacky solution
    // componentDidMount() {
    //     console.log(this.constructor.name," : ","In componentDidMount");
    //     this.props.onFilterTextChange("");
    // }
};

export default ContactsFilterView;
