import React from 'react';
import { useHistory } from 'react-router';

const CountryDetail = ({country}) => {
    
    const history=useHistory()
    const handleClick=(name)=>{
        history.push(`/country/${name}`)

    }
    return (
        <div className="col-md-3">
            <div className="card mt-4">
            <img className="img-fluid" src={country.flag} alt=''/>
            <div className="card-body">
                <h5>Name:{country.name}</h5>
                <h5>Population:{country.population}</h5>
                <h5>Region:{country.region}</h5>
                
                <p>Area:{country.area}</p>

                <button onClick={()=>handleClick(country.name)} className="btn btn-outline-primary">Show More</button>
            </div>
            </div>
        </div>
    );
};

export default CountryDetail;