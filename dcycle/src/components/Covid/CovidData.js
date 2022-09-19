import React, { useEffect, useState } from "react";
import "./CovidData.css";

function CovidData() {

    const [showDatas, setShowDatas] = useState("")
    const apiURL= 'https://api.covidtracking.com/v2/us/daily.json'

    let displayData
    function pullJson() {
        fetch(apiURL)
        .then(response => response.json())
        .then(responseData => {
            displayData = responseData.data.map(function(todo) {
                return(
                    <p key={todo.id}>{todo.date}</p>
                )
            })
            console.log(responseData)
            setShowDatas(displayData)
        })
        return
    }

    useEffect(() => {
        pullJson()
    }, [])


    // useEffect(() => {
    //     fetch("https://api.covidtracking.com/v2/us/daily.json")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //     });
    // }, []);

    // const setData = ({
    //     // country,
    //     // cases,
    //     // deaths,
    //     // recovered,
    //     // todayCases, 
    //     // todayDeaths,
    //     // todayRecovered,
    //     date,
    // }) => {
    //     // setCountry(country);
    //     // setCases(cases);
    //     // setRecovered(recovered);
    //     // setDeaths(deaths);
    //     // setTodayCases(todayCases);
    //     // setDeathCases(todayDeaths);
    //     // setRecoveredCases(todayRecovered);
    //     setDate(date);
    // };

    // const handleSearch = (e) => {
    //     setUserInput(e.target.value);
    // };
    // const handleSubmit = (props) => {
    //     props.preventDefault();
    //     fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //     });
    // };

    return (
        <div>
            <h1>COVID-19 CASES COUNTRY WISE</h1>
            <p>{showDatas}</p>
        </div>
    );
}

export default CovidData;

