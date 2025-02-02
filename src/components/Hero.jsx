import React from "react";
import earthWebp from "../shared/image/EARTH.webp";
import earthJpg from "../shared/image/EARTH.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__leftSection">
        <h1 className="hero__title">
          Discover the vast expanses of{" "}
          <span className="hero__title--color">space</span>
        </h1>
        <p className="hero__text">
          Where the possibilities are{" "}
          <span className="hero__text--color">endless!</span>
        </p>
        <button className="btn__v1 hero__btn">Learn more</button>
      </div>
      <div className="hero__rightSection">
        <picture>
          <source src={earthWebp} type="image/webp" />
          <source src={earthJpg} type="image/jpeg" />
          <img src={earthJpg} width="330" height="370" alt="Планета земля" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
