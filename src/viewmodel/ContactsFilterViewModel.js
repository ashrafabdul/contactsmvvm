import ContactsFilterModel from "../models/ContactsFilterModel"
import Binder from "../utils/Binder"

class ContactsFilterViewModel {

    constructor() {

        this.filterText = "";
        this.filteredContacts = [];

        this.getFilterText = this.getFilterText.bind(this);
        this.setFilterText = this.setFilterText.bind(this);
        this.getFilteredContacts = this.getFilteredContacts.bind(this);
        this.setFilteredContacts = this.setFilteredContacts.bind(this);

        this.onFilterTextChange = this.onFilterTextChange.bind(this);

        this.onModelChange = this.onModelChange.bind(this);
        this.contactsFilterModel = new ContactsFilterModel();
        this.contactsFilterModel.setModelChangeCallback(this.onModelChange);

        Binder.onValueChange(this.constructor.name,"filterText",this.setFilterText);
        Binder.onValueChange(this.constructor.name,"filteredContacts",this.setFilteredContacts);

    }

    getFilterText(){
        console.log(this.constructor.name," : ","In getFilterText");
        return this.filterText;
    }

    setFilterText(filterText){
        console.log(this.constructor.name, " : ", "In setFilterText",filterText);
        this.onFilterTextChange(filterText);
        this.filterText = filterText;
        //Binder.updateValue(this.constructor.name,"filterText",filterText);
    }

    getFilteredContacts(){
        console.log(this.constructor.name," : ","In getFilteredContacts");
        return this.filteredContacts;
    }

    setFilteredContacts(filteredContacts){
        console.log(this.constructor.name, " : ", "In setFilteredContacts",filteredContacts);
        this.filteredContacts = filteredContacts;
        Binder.updateValue(this.constructor.name,"filteredContacts",filteredContacts);
    }

    onFilterTextChange(filterText) {
        console.log(this.constructor.name, " : ", "In onFilterTextChange");
        console.log(this.constructor.name, " : ", "filterText:", filterText);
        if (filterText === "") {
            this.contactsFilterModel.filterContacts(".*");
        } else {
            this.contactsFilterModel.filterContacts(filterText);
        }
    }

    onModelChange() {
        this.setFilteredContacts(this.contactsFilterModel.filteredContacts);
    }

}

export default ContactsFilterViewModel;