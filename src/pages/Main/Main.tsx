import React from "react";
import "./main.scss";
import Header from "../../components/ui/Header/Header";
import IdolChild from "../../assets/asd.jpg";
import I1 from "../../assets/mainPage/image21.png";
import I2 from "../../assets/mainPage/image22.png";
import I3 from "../../assets/mainPage/image23.png";
import I4 from "../../assets/mainPage/image24.png";
import AnimeCard from "../../components/ui/AnimeCard/AnimeCard";
import LeftSlider from "../../assets/sliders/slider-left.png";
import RightSlider from "../../assets/sliders/slider-right.png";
import CatalogueCard from "../../components/ui/CatalogueCard/CatalogueCard";
import DateTablet from "../../components/ui/DateTablet/DateTablet";
import AnimeTimetable from "../../components/ui/AnimeTimetable/AnimeTimetable";
import TopComedy from "../../assets/mainPage/top-comedy.png"
import TopRomance from "../../assets/mainPage/top-romance.png"
import TopHorror from "../../assets/mainPage/top-horror.png"
import { Link, useNavigate } from "react-router-dom";

//to-do
const moveLeft = () => {};

const moveRight = () => {};

const Main = () => {

  const navigate = useNavigate()

  const animeTimes: {
    time: string;
    name: string;
    episode: number;
  }[] = [
    {
      time: "15:00",
      name: "Мобильный воин Гандам: Ведьма с Меркурия 2",
      episode: 6,
    },
    { time: "15:30", name: "Волшебник-воин Орфен 4", episode: 6 },
    { time: "15:00", name: "Юри — это моя работа!", episode: 6 },
    { time: "15:00", name: "Долой безделье!", episode: 6 },
    {
      time: "15:00",
      name: "Мобильный воин Гандам: Ведьма с Меркурия 2",
      episode: 6,
    },
    {
      time: "15:00",
      name: "Мобильный воин Гандам: Ведьма с Меркурия 2",
      episode: 6,
    },
    {
      time: "15:00",
      name: "Мобильный воин Гандам: Ведьма с Меркурия 2",
      episode: 6,
    },
  ];

  return (
    <main className="main-page">
      <section className="main-page__lastly-uploaded lastly-uploaded">
        <Header>Последние обновления</Header>
        <div className="lastly-uploaded__anime-wrapper">
          <AnimeCard name="Ребенок идола" lastEpisode={8} img={I1} />
          <AnimeCard name="Идолмастер: Девушки-золушки — U149" lastEpisode={8} img={I2} />
          <AnimeCard name="Юри — это моя работа!" lastEpisode={8} img={I3} />
          <AnimeCard name="Я не посредственность, я просто дикий монстр" lastEpisode={8} img={I4} />
         
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
      <section className="main-page__relase-date release-date">
        <Header>Дата выхода аниме</Header>
        <div className="release-date__days">
          <DateTablet isSelected={true} date="15 мая" day="понедельник" />
          <DateTablet isSelected={false} date="16 мая" day="вторник" />
          <DateTablet isSelected={false} date="17 мая" day="среда" />
          <DateTablet isSelected={false} date="18 мая" day="четверг" />
          <DateTablet isSelected={false} date="19 мая" day="пятница" />
          <DateTablet isSelected={false} date="20 мая" day="суббота" />
          <DateTablet isSelected={false} date="21 мая" day="воскресенье" />
        </div>
        <AnimeTimetable anime={animeTimes} />
      </section>

      <section className="best-collections">
        <Header>Лучшие коллекции</Header>
        <div className="best-collections__wrap">
          <img src={TopComedy}/>
          <img src={TopHorror}/>
          <img src={TopRomance}/>
        </div>
        <div onClick={()=>navigate("/collections")} className="best-collections__button">
          Перейти в коллекции
        </div>
      </section>
    </main>
  );
};

export default Main;
