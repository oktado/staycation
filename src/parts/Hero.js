import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import Button from "components/Button";
import formatNumber from "utils/formatNumber";

export default function Hero({ data, refMostPicked }) {
  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show me
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTraveler} />
              <h6 className="mt-3">
                {formatNumber(data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTreasure} />
              <h6 className="mt-3">
                {formatNumber(data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img width="36" height="36" src={IconCities} />
              <h6 className="mt-3">
                {formatNumber(data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="room with coouches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            ></img>
            <img
              src={ImageHeroFrame}
              alt="frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
