import React from "react";
import { useSelector } from "react-redux";
import { Article } from "../UI/Article";
import classes from "./Nationalize.module.css";


export const Nationalize = () => {

  const nationalizeData = useSelector((state) => state.nationalize.data);

  const renderAllData = () => {
    return(
        <>
        <h2 id="gendercomponentnameh2">{nationalizeData.name}</h2>
            <ul className={classes.list}>
            <li className="list">
                <p className={classes.item}>Gender:</p> <p className={classes.description}>{nationalizeData.gender}</p>
            </li>
            <li className="list">
                <p className={classes.item}>Probability</p>
                <p className={classes.description}>{nationalizeData.probability}</p>
            </li>
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
