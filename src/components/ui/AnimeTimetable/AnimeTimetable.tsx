import React from "react";
import "./animeTimetable.scss"
interface AnimeTimetableProps {
  anime: {
    time: string;
    name: string;
    episode: number;
  }[];
}

const AnimeTimetable: React.FC<AnimeTimetableProps> = ({ anime }) => {
  return <div className="anime-timetable">
    {anime.map(({time, name, episode}) => <div className="anime-timetable__wrapper">
      <div className="time">{time}</div>
      <div className="episode">
        <div className="name">{name}</div>
        <div className="episode-number">Эпизод {episode}</div>
      </div>
    </div>)}
  </div>;
};

export default AnimeTimetable;
