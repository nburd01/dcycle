import React, { useEffect, useState } from "react";
import "./CovidData.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CovidData() {

    const [showDatas, setShowDatas] = useState("")
    const apiURL= 'https://api.covidtracking.com/v2/us/daily.json'

    let displayData
    function pullJson() {
        fetch(apiURL)
        .then(response => response.json())
        .then(responseData => {
            displayData = responseData.data.map(function(cvd) {
                return(
                    <ul key={cvd.id}>
                        <li>{cvd.date}</li>
                        <li>{cvd.cases.total.value}</li>
                    </ul>

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
            <h1>COVID-19 CASES IN THE US</h1>
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={displayData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="value"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="date" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            <p>{showDatas}</p>

        </div>
    );
}

export default CovidData;

