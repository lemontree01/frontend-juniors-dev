import React from "react";
import { AnimeStatus } from "../AnimeStatus/AnimeStatus";
import "./CatalogueCard.scss";

type CatalogueCardProps = {
  img?: string;
  name?: string;
  subname?: string;
  category?: string;
  year?: string;
  currentEpisodes?: string;
  overallEpisodes?: string;
  status?: AnimeStatus 
};

const CatalogueCard: React.FC<CatalogueCardProps> = ({
  img = "",
  name = "???",
  subname = "???",
  category = "???",
  year = "???",
  currentEpisodes = "???",
  overallEpisodes = "???",
  status = "ongoing"
}) => {
  return (
    <div className="catalogue-card">
      <img src={img} alt="" />
      <div className="catalogue-card__info">
        <div className="catalogue-card__name">{name}</div>
        <div className="catalogue-card__subname">{subname}</div>
        <div className="catalogue-card__caregory"><span>{category}</span> / <span>{year}</span></div>
        <div className="catalogue-card__episodes">{currentEpisodes} / {overallEpisodes} эпизодов  <div className="catalogue-card__status">{status}</div></div>
       
      </div>
    </div>
  );
};

export default CatalogueCard;
