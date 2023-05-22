import React, { useState } from "react";
import "./catalog.scss";
import AnimeCard from "../../components/ui/AnimeCard/AnimeCard";
import IdolChild from "../../assets/asd.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import Droplist from "../../components/ui/DroplistUI/Droplist";

const Catalog = () => {
  const episodes = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="catalog">
      <div className="catalog__header">
        <h2>Каталог</h2>
        <Droplist />
      </div>

      <div className="catalog__content">
        <Sidebar />

        <div className="catalog__content_cards">
          {episodes.map((episode, i) => (
            <AnimeCard
              key={i}
              img={IdolChild}
              name="Ребенок идола"
              lastEpisode={episode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
