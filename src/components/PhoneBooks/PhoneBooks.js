import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import { v4 as uuidv4 } from 'uuid';


class PhoneBooks extends Component {
    state = {
        contacts: [],
        filter: ''
    }
    componentDidMount() {
        const perContacts = localStorage.getItem("contacts")
        if (perContacts) {
            this.setState({
                contacts: JSON.parse(perContacts)
            })
        }
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
        }
    }
    addContact = (objContact) => {
        console.log(objContact);
        this.state.contacts.some(contact => contact.name === objContact.name)
            ? alert(`Контакт с именем ${objContact.name} уже существует!`)

            : this.setState((prev) => ({
                contacts: [...prev.contacts, {
                    ...objContact, id: uuidv4()
                }]
            }))
    }
    deleteContact = id => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== id)
        })
    }
    filterName = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    }
    stateFilter = (e) => {
        this.setState({ filter: e.target.value })
    }


    render() {
        return (
            <>
                <h1 className="title">Phonebook</h1>
                <ContactForm
                    addContact={this.addContact} />
                <Filter stateFilter={this.stateFilter} filter={this.state.filter} />
                <h2 className="subTitle">Contacts</h2>
                <ul className="contactList">
                    {this.filterName().map(contact => <ContactList
                        key={contact.id}
                        {...contact}
                        deleteContact={this.deleteContact} />)}
                </ul>
            </>
        );
    }
}

export default PhoneBooks;