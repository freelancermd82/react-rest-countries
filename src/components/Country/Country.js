
import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name, area, region, population, flags} = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Area: {area}</h4>
            <h5>Region: {region}</h5>
            <h6>Population: {population}</h6>

        </div>
    );
};

export default Country;