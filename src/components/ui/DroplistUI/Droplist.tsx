import React, { useState } from "react";
import Arrow from "../../../assets/arrow-droplist.svg";
import ArrowRe from "../../../assets/arrow-droplist-reverse.svg";
import { CATALOG_SORT } from "./variables";
import CheckboxUI from "../Checkbox/CheckboxUI";
import "./Droplist.scss";

const Droplist = () => {
  const [drop, setDrop] = useState<boolean>(false);

  const isDroped = () => {
    if (drop) {
      return "scale-up-ver-top droplist__sort-true";
    } else {
      return "scale-down-ver-top droplist__sort-false";
    }
  };
  return (
    <div className="droplist">
      <div
        onClick={() => setDrop(!drop)}
        className="droplist__sort"
      >
        <span>Сортировка по</span>
        <img src={drop ? ArrowRe : Arrow} alt="" />
      </div>
      <div className={isDroped()}>
        {drop
          ? CATALOG_SORT.map((sort) => (
              <div key={sort.key}>
                <CheckboxUI /> <span>{sort.name}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Droplist;
