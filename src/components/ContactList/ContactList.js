import React from 'react';
import "./ContactList.css"
import PropTypes from 'prop-types';
const ContactList = ({ name, number, id, deleteContact }) => {
    const deleteItem = () => {
        deleteContact(id)
    }
    return (
        <li className="contactItem">
            <p className="contactName">{name}</p>
            <p className="contactNumber">{number}</p>
            <button type="button" className="del_Btn" onClick={deleteItem}></button>
        </li>


    );
};

export default ContactList;

ContactList.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}