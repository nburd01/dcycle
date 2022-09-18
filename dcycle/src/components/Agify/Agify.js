import React from "react";
import { useSelector } from "react-redux";
import { Article } from "../UI/Article";
import classes from "./Nationalize.module.css";

export const Agify = () => {
  const agifyData = useSelector((state) => state.agify.data);

  const renderAllData = () => {
    return(
        <>
        <h1>Agify</h1>
        <h2 id="gendercomponentnameh2">{agifyData.name}</h2>
            <ul className={classes.list}>
            <li className="list">
                <p className={classes.item}>Age:</p> <p className={classes.description}>{agifyData.age}</p>
            </li>
            <li className="list">
                <p className={classes.item}>Count</p>
                <p className={classes.description}>{agifyData.count}</p>
            </li>
            </ul>
        </>
    )
  }
  return (
    <Article  className={classes.article}>
          {(agifyData.name.length !== 0) && renderAllData()}
          {(agifyData.name.length === 0) && <p className={classes.empty}> Waiting for information </p>}
    </Article>
  );
};
