import React, { useState } from "react";
import ChooseButtonUI from "../ui/ChooseButton/ChooseButtonUI";
import ButtonUI from "../ui/ButtonUI/ButtonUI";
import CheckboxUI from "../ui/Checkbox/CheckboxUI";
import { BsFilter } from "react-icons/bs";
import "./Sidebar.scss";
import {
  SIDEBAR_AGE_RATE,
  SIDEBAR_DUB,
  SIDEBAR_FORMATS,
  SIDEBAR_GENRES,
  SIDEBAR_STATUS,
} from "./variables";
import Slider from "react-slider";

const Sidebar = () => {
  const [values, setValues] = useState<number[]>([1990, 2023]);

  return (
    <div className="catalog__content_sidebar">
      <div className="sidebar__filter_title">
        <div>
          <BsFilter />
        </div>
        <span>Фильтр</span>
      </div>

      <div className="sidebar__filter_date">
        <span>Год выпуска</span>
        <Slider
          onChange={setValues}
          className={"slider"}
          value={values}
          min={1990}
          max={2023}
          pearling
          minDistance={1}
          renderThumb={(props, state) => (
            <div {...props}>{state.valueNow}</div>
          )}
        />
      </div>

      <div className="sidebar__filter_genres">
        <span>Жанры</span>

        <div className="genres__wrapper">
          {SIDEBAR_GENRES.map((genre) => (
            <>
              <div key={genre.key}>
                <CheckboxUI />
                {genre.name}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="sidebar__filter_format">
        <span>Формат выпуска</span>

        <div>
          {SIDEBAR_FORMATS.map((format) => (
            <ChooseButtonUI key={format.key}>
              {format.name}
            </ChooseButtonUI>
          ))}
        </div>
      </div>

      <div className="sidebar__filter_status">
        <span>Статус тайтла</span>
        <div>
          {SIDEBAR_STATUS.map((status) => (
            <ChooseButtonUI key={status.key}>
              {status.name}
            </ChooseButtonUI>
          ))}
        </div>
      </div>

      <div className="sidebar__filter_age-rate">
        <span>Возрастной рейтинг</span>
        <div>
          {SIDEBAR_AGE_RATE.map((age_rate) => (
            <ChooseButtonUI key={age_rate.key}>
              {age_rate.name}
            </ChooseButtonUI>
          ))}
        </div>
      </div>

      <div className="sidebar__filter_dub">
        <span>Озвучка</span>
        <div>
          {SIDEBAR_DUB.map((dub) => (
            <ChooseButtonUI key={dub.key}>{dub.name}</ChooseButtonUI>
          ))}
        </div>
      </div>

      <div className="sidebar__filter_btns">
        <ButtonUI size="big">Показать</ButtonUI>
        <ButtonUI size="big" variant="outlined">
          Сбросить
        </ButtonUI>
      </div>
    </div>
  );
};

export default Sidebar;
