import React from "react";
import { useSelector } from "react-redux";
import { Article } from "../UI/Article";
import classes from "../../style/style.module.css";

export const Nationalize = () => {
  const nationalizeData = useSelector((state) => state.nationalize.data);

  const renderAllData = () => {
    return(
        <>
        <h1>Nationalize</h1>
            <ul className={classes.list}>
            <li className="list">
                <p className={classes.item}>Country: </p> <p className={classes.description}>{nationalizeData.country.country_id}</p>
            </li>
              <ul>
                {nationalizeData.country.map((country, index) => (

                    <li key={index}>
                        <p>{country?.country_id}</p>
                        <p>{(country?.probability * 100).toFixed(2) + "%"}</p>
                    </li>
                ))}
              </ul>
            </ul>
        </>
    )
  }
  return (
    <Article  className={classes.article}>
          {(nationalizeData.name.length !== 0) && renderAllData()}
          {(nationalizeData.name.length === 0) && <p className={classes.empty}> Waiting for information </p>}
    </Article>
  );
};
