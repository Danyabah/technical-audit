import React from "react";
import tg from "../img/tg.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="header footer">
      <div className="container">
        <div className="header__row">
          <nav className="header__left">
            <h2 className="header__title">
              <Link to={"/"}>техаудит</Link>
            </h2>
            <a className="header__link" href="#report">
              Как составляется отчет
            </a>
            <a className="header__link" href="">
              Каталог
            </a>
          </nav>
          <div className="header__right">
            <a
              href="https://t.me/iauditor_bot"
              target="_blank"
              rel="noreferrer"
              className="btn header__btn header__btn-t"
            >
              <img src={tg} alt="" />
              <span>Телеграм-бот</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
