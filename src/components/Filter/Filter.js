import React from 'react';
import "./Filter.css"
import PropTypes from 'prop-types';
const Filter = ({ filter, stateFilter }) => {
    return (
        <label className="labelSearch" >
            Find contacts by name
            <input
                className="inputSearch"
                name="filter"
                type="text"
                value={filter}
                onChange={stateFilter}
            />
        </label>
    );
};
export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    stateFilter: PropTypes.func.isRequired
}