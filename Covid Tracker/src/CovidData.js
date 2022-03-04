import React, {useState, useEffect} from 'react';
import './CovidData.css'

export const CovidData = () => {
    const [country, setCountry] = useState('');
    const [cases, setCases] = useState('');
    const [recovered, setRecovered] = useState('');
    const [deaths, setDeaths] = useState('');
    const [todayCases, setTodayCases] = useState('');
    const [input, setInput] = useState('');

     useEffect(() => {
         fetch('https://corona.lmao.ninja/v2/countries/'+country+'?today&strict&query%20')
         .then(res => res.json())
         .then(data => {
             setData(data)
         })
     }, [country]);
     const setData = ({
         country,
         cases,
         recovered,
         deaths,
         todayCases,
     }) => {
         setCountry(country);
         setCases(cases);
         setRecovered(recovered);
         setDeaths(deaths);
         setTodayCases(todayCases);
     }

    const handleSearch = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://corona.lmao.ninja/v2/countries/'+input+'?today&strict&query%20')
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }

    return (
        <div>
            <h1>COVID COUNTRY TRACKER</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleSearch} placeholder='Enter Country' />
                    <button type='submit'>Search</button>
                </form>
            </div>

            <div>
                <p>Country : <span>{country}</span></p>
                <p>Cases : <span>{cases}</span></p>
                <p>Cases Today: <span>{todayCases}</span></p>
                <p>Recovered : <span>{recovered}</span></p>
                <p>Deaths : <span>{deaths}</span></p>
            </div>
        </div>
    )
}
