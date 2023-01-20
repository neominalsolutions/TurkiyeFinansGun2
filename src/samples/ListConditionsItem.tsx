import React from "react";
import { IPerson } from "./ListConditions";

export default function ListConditionsItem({
  id,
  firstname,
  lastname,
  middlename,
}: IPerson) {
  const Delete = (id: number): void => {
    console.log("item-deleted", id);
  };

  return (
    <li>
      {/* <span>iki isimli mi ? {String(hasMiddleName)} </span> */}
      {firstname}{" "}
      {middlename && <span style={{ color: "red" }}>{middlename}</span>}{" "}
      {lastname}
      {/* ternaryif kullanımı */}{" "}
      {middlename ? <span>(2 adlı bir kişi)</span> : <span>(tek adlı)</span>}
      <button onClick={() => Delete(id)}> x </button>
    </li>
  );
}
