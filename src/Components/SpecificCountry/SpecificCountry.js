import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SpecificCountry = () => {
    const [singleCountry,setSingleCountry]=useState({})
    const [language,setLanguage]=useState([])
    const {name}=useParams()
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res=>res.json())
        .then(data=>{
            setSingleCountry(data[0])
            setLanguage(data[0].languages)
            
            
            
          
            console.log(data[0].languages)
        })

    },[name])
    
   
    return (
    
        <div className="card mt-4">
            <img className="img-fluid" src={singleCountry.flag} alt=""/>
            <div className="card-body">
            <h5>Name:{singleCountry.name}</h5>
                <h5>Population:{singleCountry.population}</h5>
                <h5>Region:{singleCountry.region}</h5>
                
                <h5>Area:{singleCountry.area}</h5>
                <h5>Sub:{singleCountry.subregion}</h5>
                <h5>Native Name:{singleCountry.nativeName}</h5>
                <h5>Short Name:{singleCountry.demonym}</h5>
                <h5>Capital Country:{singleCountry.capital}</h5>
                <h5>languages:</h5>
                 {
                     language.map((lan)=>{

                         return <div>

                                 <li key={lan.iso639_2}>{lan.name}</li> 
                         </div>
                         
                       
                     })
                 }
                       
                <br/>    
            <Link to="/">

            <button className="btn btn-dark">Go back</button>
            </Link>
             
              
                    
                

            </div>
           
        </div>
    );
};

export default SpecificCountry;