import React, { useEffect, useState } from "react";
import "./CovidData.css";
import France from "./France";
import GB from "./GB";
import Spain from "./Spain";

function CovidData() {

return(
<div className="container">
    <France/>
    <GB/>
    <Spain/>
</div>
);
}

export default CovidData;
