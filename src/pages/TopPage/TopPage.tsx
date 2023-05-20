import React, { useState } from "react";
import './topPage.scss'
import Pagination from '@mui/material/Pagination';
import Naruto from '../../assets/topPage/naruto.png'
import Star from '../../assets/topPage/star.png'
import Kadr1 from '../../assets/topPage/kadr1.png'
import Kadr2 from '../../assets/topPage/kadr2.png'
import Kadr3 from '../../assets/topPage/kadr3.png'
import Kadr4 from '../../assets/topPage/kadr4.png'
import video from '../../assets/topPage/video.png'
import ButtonUI from "../../components/ui/ButtonUI/ButtonUI";
import { products } from "../../pages/topPage/products";


const TopPage = () => {
  const [searchEpisode, setSearchEpisode] = useState(0)

  const handleEpisode = (e: any) => {
    setSearchEpisode(e.target.value)
  }

  return <div>
    <div className="top-page">
      <div className="top-page__left">
        <img src={Naruto} alt="" className="top-page__image" />
        <p>16+</p>
      </div>
      <div className="center">
        <div className="center__title">
          <h1>Наруто</h1>
          <div className="center__raiting">
            <img src={Star} alt="" />
            <p>9.2/10</p>
          </div>
        </div>
        <div className="center__name">
          <p>Naruto / ナルト</p>
        </div>
        <div className="center__genre">
          <h5>Тип</h5>
          <p>ТВ Сериал</p>
        </div>
        <div className="center__genre">
          <h5>Эпизоды</h5>
          <p>220 серий</p>
        </div>
        <div className="center__genre">
          <h5>Статус</h5>
          <p>Завершён</p>
        </div>
        <div className="center__genre">
          <h5>Жанр</h5>
          <p>Боевик,  Приключения, Фэнтези</p>
        </div>
        <div className="center__genre">
          <h5>Длительность</h5>
          <p>0:25:00</p>
        </div>
        <div className="center__genre">
          <h5>Озвучка</h5>
          <p>SHIZA Project, 2х2</p>
        </div>
        <div className="center__btn">
          <ButtonUI size='medium' style={{ marginRight: '20px' }} >Смотреть</ButtonUI>
          <ButtonUI size='medium' variant="outlined">Трейлер</ButtonUI>

        </div>
      </div>
      <div className="right">
        <p>В день рождения Наруто Узумаки на деревню под названием Коноха напал легендарный демон, Девятихвостый лис. Четвёртый Хокагэ ценой своей жизни спас деревню, запечатав демона в новорождённом Наруто, неосознанно обрекая его на жизнь
          в ненависти односельчан.Несмотря
          на недостаток таланта во многих областях ниндзюцу, неусидчивость и задиристость,
          у Наруто есть мечта — стать Хокагэ, сильнейшим ниндзя в деревне. Желая признания, которого не получал, он упорно работает и тренируется вместе со своими напарниками, Саскэ Учихой и Сакурой Харуно , а также со своим наставником Какаши Хатакэ. Ему и его напарникам придётся пройти через многое по пути к своим заветным мечтам: сражения, любовь, дружба, предательство, жажда силы...
        </p>
      </div>
    </div>

    <div className="kadr">
      <h1>Кадры</h1>
      <div className="kadr__image-kadr">
        <img src={Kadr1} alt="" />
        <img src={Kadr2} alt="" />
        <img src={Kadr3} alt="" />
        <img src={Kadr4} alt="" />
      </div>
    </div>

    <div className="video-player">
      <h2>Наруто 120 серия(Трио! Испытание на выживание)</h2>
      <img src={video} alt="" />
      <div className="video-player__pagination">
        <div className="video-player__seria">
          <h3>Серия №</h3>
          <input onChange={handleEpisode} type="number" value={searchEpisode} />
        </div>
        <div className="video-player__number">
          <h3>Серия</h3>
          <Pagination count={10} color="primary" variant="outlined" shape="rounded" size="large" />
        </div>
        <div className="video-player__right">
          <span>NARUTO</span>
        </div>
      </div>
    </div>

    <div className="simular">
      <h2>Связанные</h2>
      <div className="simular__cards">
        {products.map((item) => (
          <div className="simular__card" key={item.id}>
            <img src={item.image} alt="" className="simular__image" />
            <p>{item.paragraph}</p>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="comments">
      <h3>Коментарии</h3>
      <div className="comments__box">
        
      </div>
    </div>
  </div>;
};

export default TopPage;
