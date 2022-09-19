import React, { useEffect, useState } from "react";
import "./CovidData.css";
import France from "./France";
import GB from "./GB";
import Spain from "./Spain";

function CovidData() {

return(
    <div className="container">
        <div className="h1_title">
            <h1>COVID-19 CASES PER COUNTRY</h1>
        </div>

    <div className="coviddata">
        <div className="__coviddata_country">
        <France/>
        </div>
        <div className="__coviddata_country">
        <GB/>
        </div>
        <div className="__coviddata_country">
        <Spain/>
        </div>

    </div>
</div>
);
}

export default CovidData;
