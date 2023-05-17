import React from "react";
import "./droplist.scss";
import { AiOutlineDown } from "react-icons/ai";

const Droplist = () => {
  return (
    <div className="droplist">
      <span className="droplist__title">
        Сортировать по <AiOutlineDown />
      </span>
    </div>
  );
};

export default Droplist;
