import React from "react";
import "./main.scss";
import Header from "../../components/ui/Header/Header";
import IdolChild from "../../assets/asd.jpg";
import AnimeCard from "../../components/ui/AnimeCard/AnimeCard";
import LeftSlider from "../../assets/sliders/slider-left.png";
import RightSlider from "../../assets/sliders/slider-right.png";
import CatalogueCard from "../../components/ui/CatalogueCard/CatalogueCard";

//to-do
const moveLeft = () => {};

const moveRight = () => {};

const Main = () => {
  return (
    <main className="main-page">
      <section className="main-page__lastly-uploaded lastly-uploaded">
        <Header>Последние обновления</Header>
        <div className="lastly-uploaded__anime-wrapper">
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={IdolChild} />
        </div>
      </section>
      <section className="main-page__season-anime season-anime">
        <Header>Аниме сезона</Header>
        <div className="season-anime__anime-wrapper">
          <CatalogueCard
            name={"Тень любви в тайной комнате"}
            subname={"Kidou Senshi Gundam: Suisei no Majo Season 2"}
            category="TV series"
            year="2023"
            currentEpisodes="6"
            overallEpisodes="12"
            img={IdolChild}
          />
          <CatalogueCard
            name={"Тень любви в тайной комнате"}
            subname={"Kidou Senshi Gundam: Suisei no Majo Season 2"}
            category="TV series"
            year="2023"
            currentEpisodes="6"
            overallEpisodes="12"
            img={IdolChild}
          />
          <CatalogueCard
            name={"Тень любви в тайной комнате"}
            subname={"Kidou Senshi Gundam: Suisei no Majo Season 2"}
            category="TV series"
            year="2023"
            currentEpisodes="6"
            overallEpisodes="12"
            img={IdolChild}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
