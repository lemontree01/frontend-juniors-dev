import React from "react";
import Header from "../../components/ui/Header/Header";
import "./collections.scss";
import MyCollection from "../../assets/collectionsPage/MyCollection.png";
import Component19 from "../../assets/collectionsPage/Component 19.png";
import Component20 from "../../assets/collectionsPage/Component 20.png";
import Component21 from "../../assets/collectionsPage/Component 21.png";
import Component22 from "../../assets/collectionsPage/Component 22.png";
import Component23 from "../../assets/collectionsPage/Component 23.png";
import Component24 from "../../assets/collectionsPage/Component 24.png";
import Component25 from "../../assets/collectionsPage/Component 25.png";
import Component26 from "../../assets/collectionsPage/Component 26.png";
import AuthModal from "../../components/Auth/AuthModal";

const Collections = () => {
  return (
    <main className="collections">
      <Header>Коллекции</Header>
      <section className="collections__wrapper">
        <img src={MyCollection} />
        <img src={Component19} />
        <img src={Component20} />
        <img src={Component21} />
        <img src={Component22} />
        <img src={Component23} />
        <img src={Component24} />
        <img src={Component25} />
        <img src={Component26} />
      </section>
      <AuthModal />
    </main>
  );
};

export default Collections;
