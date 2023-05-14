import React from "react";
import "./animeCard.scss";

type AnimeCardProps = {
  img?: string;
  name: string;
  lastEpisode: number;
  onClick?: React.MouseEventHandler;
};

const AnimeCard: React.FC<AnimeCardProps> = ({
  name,
  lastEpisode,
  onClick,
  img = "",
}) => {
  return (
    <div className="anime-card" onClick={onClick}>
      <div className="anime-card__wrapper">
        <img src={img} alt="" />
        <div className="anime-card__episode">эпизод {lastEpisode}</div>
      </div>
      <div className="anime-card__name">{name}</div>
    </div>
  );
};

export default AnimeCard;
