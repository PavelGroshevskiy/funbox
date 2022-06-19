import React, { useState } from "react";
import classNames from "classnames";

const CatCard = ({
  borderColor,
  tasty,
  portion,
  countMouse,
  satisfied,
  weight,
  children,
  cicleColor,
  disabled,
  underText,
}) => {
  const [choise, setChoise] = useState(false);
  const [disable, setDisaple] = useState(disabled);

  const choiseTasty = () => {
    disable ? alert("Извините, товар закончился") : setChoise(!choise);
  };

  return (
    <div className="cat-wrapper">
      <div className="cat-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="320"
          height="480"
        >
          <defs>
            <clipPath id="cp">
              <polygon points="45,0 320,0 320,480 0,480 0,48" />
            </clipPath>
          </defs>
          <g stroke={borderColor} strokeWidth="4">
            <rect
              x="2"
              y="2"
              rx="14"
              clipPath="url(#cp)"
              width="316"
              height="476"
              fill="#f2f2f2"
            />
            <line x1="2" y1="48" x2="45" y2="2" />
          </g>
        </svg>

        {/* {disable ? <div className={} style={{ color: "#fff" }}>Some</div> : null} */}

        <div
          className={classNames("position-wrapper", {
            "position-wrapper--disabled": disable,
          })}
          onClick={choiseTasty}
        >
          {choise && <div className="cat-card_selected"> </div>}
          <div className="cat-card_header">Сказочное заморское явство</div>
          <div className="cat-card_title">Нямушка </div>
          <div className="cat-card_subtitle">с {tasty}</div>
          <div className="cat-card_text">
            {`${portion} порций `}
            <br />
            {countMouse === undefined ? null : `${countMouse} мышь в подарок`}
            <br />
            {satisfied && `Заказчик доволен`}
          </div>
          <div className="cat-card_img-wrapper">
            <div className="cat-card_img"></div>
          </div>
          <div
            className="cat-card_circle"
            style={{ backgroundColor: cicleColor }}
          >
            <div className="cat-card_weight">
              {weight}
              <br />
              <span className="cat-card_weight-metric">кг</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames("cat-card_underCard", {
          "cat-card_underCard--disabled": disable,
        })}
      >
        {children}
        {", "}
        {!disabled ? (
          <a
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={choiseTasty}
          >
            купи.
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default CatCard;
