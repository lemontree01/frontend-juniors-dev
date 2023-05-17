import React, { useState } from "react";
import "./catalog.scss";
import AnimeCard from "../../components/ui/AnimeCard/AnimeCard";
import IdolChild from "../../assets/asd.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__header">
        <h2>Каталог</h2>
        <div className="catalog__header_sort">Сортировка по</div>
      </div>

      <div className="catalog__content">
        <Sidebar />

        <div className="catalog__content_cards">
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />

          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
          <AnimeCard
            name="Ребенок идола"
            lastEpisode={8}
            img={IdolChild}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
