import React from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';

const AllCountry = ({country}) => {
    return (
        <div className="row">
            {
                country.map((country)=>{
                    return <CountryDetail key={country.alpha3Code} country={country} />
                })
            }
        </div>
    );
};

export default AllCountry;