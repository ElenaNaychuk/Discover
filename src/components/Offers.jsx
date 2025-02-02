import React from "react";

const list = [
  {
    title: "Move the borders of reality!",
    text: "Go on a space adventure",
    bgi: "/img/card1.png",
    link: "/#",
  },
  {
    title: "Space is not just stars and planets",
    text: "it is a majestic journey to ",
    bgi: "/img/card2.png",
    link: "/#",
  },
  {
    title: "For those who dream of stars ",
    text: "Our offer: make your dream come true",
    bgi: "/img/card3.png",
    link: "/#",
  },
  {
    title: "Fulfill your fantastic dreams",
    text: "Space has never been so close",
    bgi: "/img/card4.png",
    link: "/#",
  },
];

const Offers = () => {
  
  return (
    <section className="info-list">
      <h2 className="info-list__title">Offers</h2>
      <ul className="info-list__list offers">
        {list.map((item, i) => (
          <li
            className="offers__item"
            style={{ backgroundImage: `url(${item.bgi})` }}
            key={i}
          >
            <h3 className="offers__title">{item.title}</h3>
            <p className="offers__text">{item.text}</p>
            <a className="offers__link btn__v2" href={item.link}>
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Offers;
