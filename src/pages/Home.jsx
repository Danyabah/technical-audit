import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import report from "../img/report2.png";
import reportmobile from "../img/reportmobile.png";
import background from "../img/aboutp.png";
import Footer from "../components/Footer";
import useWindowDimensions from "../hooks/useWindow";
import MailForm from "../components/MailForm";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Header />
      <main>
        <section className="report">
          <div className="container">
            <div className="report__row">
              <div className="report__content">
                <h2 className="title report__title">
                  Найди отчет <br /> о производителе
                </h2>
                <p className="report__subtitle">
                  В каталоге более 1000 компаний, проверенных нашими
                  специалистами
                </p>
                <Search />
              </div>
              <div className="report__img">
                {width > 500 ? (
                  <img src={report} alt="" />
                ) : (
                  <img src={reportmobile} alt="" />
                )}
              </div>
            </div>
          </div>
        </section>
        <section
          className="about"
          style={{
            backgroundImage: `linear-gradient(180deg, #f4f6fb 0%, rgba(244, 246, 251, 0) 100%),url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="about__row">
              <h2 className="title about__title" id="report">
                Как формируется отчет
              </h2>
              <div className="about__column">
                <div className="about__item">
                  <div className="about__number">1</div>
                  <div className="item__categ">опытные эксперты</div>
                  <h3 className="item__title">
                    Мы отбираем экспертов с десятилетним опытом в сфере
                  </h3>
                  <p className="item__subtitle">
                    Любые другие проверки слишком легко фальсифицировать
                  </p>
                </div>
                <div className="about__item">
                  <div className="about__number">2</div>
                  <div className="item__categ">личный контроль</div>
                  <h3 className="item__title">
                    Наши эксперты лично приезжают на производства
                  </h3>
                  <p className="item__subtitle">В том числе за границей</p>
                </div>
                <div className="about__item">
                  <div className="about__number">3</div>
                  <div className="item__categ">общепринятые критерии</div>
                  <h3 className="item__title">
                    Критерии проверки тщательно подобраны
                  </h3>
                  <p className="item__subtitle">
                    Основаны на общепризнанных стандартах и на отобранных нами в
                    течение несколько лет критериях
                  </p>
                </div>
                <div className="about__item">
                  <div className="about__number">4</div>
                  <div className="item__categ">доставляем</div>
                  <h3 className="item__title">
                    Данные проверяются и выгружаются в базу
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="catalog">
          <div className="container">
            <h2 className="title catalog__title">Каталог отчетов</h2>
            <div className="catalog__row">
              <div className="catalog__list">
                <div className="catalog__search">
                  <img src="img" alt="" />
                  <input type="text" />
                </div>
                <ul className="catalog__items">
                  <li className="catalog__item">Трубопроводная арматура</li>
                  <li className="catalog__item">Трубная продукция</li>
                  <li className="catalog__item">Детали трубопроводов</li>
                  <li className="catalog__item">Механическое оборудование</li>
                  <li className="catalog__item">Блочное оборудование</li>
                  <li className="catalog__item">
                    Нефтепромысловое оборудование
                  </li>
                  <li className="catalog__item">Спецодежда и СИЗ</li>
                  <li className="catalog__item">
                    Строительные и защитные материалы
                  </li>
                  <li className="catalog__item">
                    Технологическое оборудование
                  </li>
                  <li className="catalog__item">Химическая продукция</li>
                  <li className="catalog__item">Электроника и материалы</li>
                  <li className="catalog__item">Разное</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <div className="container">
            <div className="info__row">
              <div className="info__content">
                <h2 className="title info__title">
                  Не нашли компанию,
                  <br />
                  которую искали?
                </h2>
                <p className="info__subtitle">
                  Оставьте свою почту и мы свяжемся с вами, чтобы организовать
                  ее проверку
                </p>
                <MailForm />
              </div>
              <ul className="info__list">
                <li className="info__item">Заключения эксперта</li>
                <li className="info__item">Выявленные недостатки</li>
                <li className="info__item">
                  Техническое оснащение предприятия
                </li>
                <li className="info__item">Контроль качества</li>
                <li className="info__item">
                  Транспортные и логистические возможности
                </li>
                <li className="info__item">Промышленная безопасность</li>
                <li className="info__item">Разрешительная документация</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
