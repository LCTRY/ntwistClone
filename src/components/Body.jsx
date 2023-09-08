import React from "react";
import Card from "./Card";
import BackToTopBtn from "../Features/BackToTop";
import Slide from "react-reveal/Slide";

const card1 = {
  src: "https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-scaled.jpg",
  alt: "factory picture",
  title: "Mine-To-Mill-To-Mine Optimization",
  descP1:
    "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
  descP2: null,
  isImageLeft: false,
};
const card2 = {
  src: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg",
  alt: "image of globe",
  title: "Sustainability",
  descP1:
    "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.",
  descP2:
    "With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",
  isImageLeft: true,
};
const card3 = {
  src: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",
  alt: "image of mineral processing",
  title: "Mineral Processing",
  descP1:
    "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
  descP2: null,
  isImageLeft: false,
};

const card4 = {
  src: "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
  alt: "image of oil and gas factory",
  title: "Oil & Gas",
  descP1:
    "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. ",
  descP2:
    "NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",
  isImageLeft: true,
};

function Body() {
  return (
    <div className="body__landingPage">
      <div class="body__home__section">
        <div className="body__landingPage__home">
          <div className="body__landingPage__home_left">
            <h1 className="body__landingPage__title">
              Data-powered solutions for Industrial Excellence
            </h1>
            <div>
              <button className="card__button body_home__section_btn effect__btn_hover">
                Read More
              </button>
            </div>
          </div>

          <div className="body__landingPage__home_right">
            <img
              className="body__landingPage__networking"
              src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
              alt="image of ntwist network"
            />
          </div>
        </div>
      </div>
      <Slide bottom>
        <Card
          title={card1.title}
          descP1={card1.descP1}
          descP2={card1.descP2}
          isImageLeft={card1.isImageLeft}
          imgUrl={card1.src}
          alt={card1.alt}
        />
        <Card
          title={card2.title}
          descP1={card2.descP1}
          descP2={card2.descP2}
          isImageLeft={card2.isImageLeft}
          imgUrl={card2.src}
          alt={card2.alt}
        />
        <Card
          title={card3.title}
          descP1={card3.descP1}
          descP2={card3.descP2}
          isImageLeft={card3.isImageLeft}
          imgUrl={card3.src}
          alt={card3.alt}
        />
        <Card
          title={card4.title}
          descP1={card4.descP1}
          descP2={card4.descP2}
          isImageLeft={card4.isImageLeft}
          imgUrl={card4.src}
          alt={card4.alt}
        />
      </Slide>
      <BackToTopBtn />
    </div>
  );
}

export default Body;
