import React from "react";
import tg from "../img/tg.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleRedirect() {
    console.log(location);
    if (location.pathname.startsWith("/report")) {
      navigate("/");
    }
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <nav className="header__left">
            <h1 className="header__title">
              {" "}
              <Link to={"/"}>техаудит</Link>
            </h1>
            <a onClick={handleRedirect} className="header__link" href="#report">
              Как составляется отчет
            </a>
            {/* <a className="header__link" href="">
              Каталог
            </a> */}
          </nav>
          <div className="header__right">
            {/* <button className="btn header__btn headet__btn-l">
              Заказать отчет
            </button> */}
            <a
              href="https://t.me/iauditor_bot"
              target="_blank"
              rel="noreferrer"
              className="btn header__btn headet__btn-t"
            >
              <img src={tg} alt="" />
              <span>Телеграм-бот</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
