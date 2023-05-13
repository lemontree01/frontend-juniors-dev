import React from "react";
import "./main.scss";
import { useAppDispatch, useAppSelector } from "../../App";
import { toggleTheme } from "../../store/features/themeSlice";
import Header from "../../components/ui/Header/Header";
import IdolChild from "../../assets/mainPage/idol_child.png"
import AnimeCard from "../../components/ui/AnimeCard/AnimeCard";


const Main = () => {
  const { color } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <main className="main-page">
      <section className="main-page__lastly-uploaded">
        <Header>Последние обновления</Header>
        <AnimeCard name='asdsdasd' lastEpisode={8} img={IdolChild}/>
      </section>
    </main>
  );
};

export default Main;
