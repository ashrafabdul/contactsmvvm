class ContactsFilterModel {

    constructor() {
        this.contacts = [];
        this.filteredContacts = [];
        this.fetchData();

        this.setModelChangeCallback = this.setModelChangeCallback.bind(this);
    }


    fetchData() {

        fetch('http://localhost:8080/contacts')
            .then(function (response) {
                return response.json();
            })
            .then(data =>
                this.initData(data)
            ).catch(error => {
            console.log(this.constructor.name, " : ", "Error fetching contacts from server", error);
        });
    }

    initData(data) {
        data.forEach((item, i) => {
            //this.contacts.push(new PersonModel(data.name,data.number));
            //this.filteredContacts.push(new PersonModel(data.name,data.number));
            item.key = i;
            console.log(this.constructor.name, " : ", "In initData", " TypeOf item", typeof (item));
            this.contacts.push(item);
            this.filteredContacts.push(item);

        });

        // Notify the callback
        this.onModelChange();

        console.log(this.constructor.name, " : ", "In initData", " TypeOf contacts", typeof (this.contacts));
        console.log(this.constructor.name, " : ", "In initData", " TypeOf filteredContacts", typeof (this.filteredContacts));
    }

    filterContacts(filterText) {
        console.log(this.constructor.name, " : ", "In filterContacts");
        console.log(this.constructor.name, " : ", "filterText:", this.filterText);
        const regex = new RegExp('^' + filterText, 'gi');
        this.filteredContacts = this.contacts.filter(contact => contact.name.match(regex));
        this.onModelChange();
        console.log(this.constructor.name, " : ", "In filterContacts", " TypeOf contacts", typeof (this.contacts));
        console.log(this.constructor.name, " : ", "In filterContacts", " TypeOf filteredContacts", typeof (this.filteredContacts));
    }

    setModelChangeCallback(modelChangeCallback) {
        this.modelChangeCallback = modelChangeCallback;
    }

    onModelChange() {
        if (this.modelChangeCallback) {
            this.modelChangeCallback();
        }
    }

}

export default ContactsFilterModel;