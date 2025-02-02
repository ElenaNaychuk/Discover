import React from "react";

const JourneyBlock = () => {
  
  return (
    <section className="journey">
      <h3 className="journey__title">Embark on a space journey </h3>
      <input type="checkbox" id="toggle-text" className="journey__checkbox" />
      <p className="journey__text">
        Traveling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space.
      </p>
      <p className="journey__text--mode">
        {" "}
        We offer various options for space excursions. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptate consequuntur officiis
        quidem corrupti aspernatur! Temporibus recusandae commodi molestias et
        ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        inventore enim et cumque cupiditate sapiente recusandae animi
        doloremque? Dolore modi consequatur eum ex vero aspernatur dolorum
        molestias, facere fugiat sapiente eligendi quos fuga reprehenderit illo
        animi sunt. Placeat, molestiae. Accusantium rem, ipsa esse a rerum
        perspiciatis illum, voluptatum dolor nisi beatae quasi voluptatem
        dolorum placeat! Molestias eum saepe fugit, eius aspernatur excepturi
        ipsa hic maxime fuga ratione id esse illo rerum. Obcaecati qui quos
        rerum dignissimos deserunt quae dicta explicabo necessitatibus ad
        accusamus in provident, inventore vitae aliquid perferendis, quisquam
        error cumque non enim impedit quod ipsum modi exercitationem! Quibusdam.
      </p>
      <label htmlFor="toggle-text" className="journey__btn"></label>
    </section>
  );
};

export default JourneyBlock;
