import React from "react";
import { useEffect, useState } from "react";

function Card(props) {
  const { title, descP1, descP2, isImageLeft, imgUrl, alt } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let descriptionPosition = "card__right_section";
  let imagePosition = "card__left_section";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
  }, []);

  if (windowWidth < 1024) {
    imagePosition = "card__left_section";
    descriptionPosition = "card__right_section";
  } else {
    isImageLeft
      ? (descriptionPosition = "card__right_section")
      : (descriptionPosition = "card__left_section");
    isImageLeft
      ? (imagePosition = "card__left_section")
      : (imagePosition = "card__right_section");
  }

  return (
    <div className="card__wrapper">
      <div className={descriptionPosition}>
        <div className="card__descrption_wrapper">
          <div>
            <h3 className="card__title">{title}</h3>
          </div>
          <div>
            {descP1 && <p className="card__description">{descP1}</p>}
            {descP2 && <p className="card__description">{descP2}</p>}
          </div>
          <div>
            <button className="card__button"> Read More </button>
          </div>
        </div>
      </div>
      <div className={imagePosition}>
        <img className="card__img" src={imgUrl} alt={alt} />
      </div>
    </div>
  );
}

export default Card;
