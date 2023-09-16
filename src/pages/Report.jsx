import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import photo from "../img/photo.jpg";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import lock from "../img/lock.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl, parseDate } from "../utils";
import RequestForm from "../components/RequestForm";
export default function Report() {
  const { id } = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/api/company/data/${id}`).then((res) => {
      console.log(res.data.data);
      setCompany(res.data.data);
    });
  }, [id]);
  console.log();
  return (
    <>
      <Header />
      <main>
        <section className="record">
          <div className="container">
            <div className="record__info">
              <div className="record__row">
                <h2 className="title record__title">{company?.name}</h2>
                <div className="record__text">
                  <p className="record__subtitle">{company?.info}</p>
                  <p className="record__desc">
                    Проверка была проведена{" "}
                    {company?.date && parseDate(company.date)}
                  </p>
                </div>
              </div>
              <div className="record__row-r">
                <div className="record__item">
                  <p className="record__name">Опыт производства</p>
                  <p className="record__value">
                    {company?.experience} {company?.years_form}
                  </p>
                </div>
                <div className="record__item">
                  <p className="record__name">Сотрудников</p>
                  <p className="record__value">{company?.workers}</p>
                </div>
                <div className="record__item">
                  <p className="record__name">Страна</p>
                  <p className="record__value">{company?.country}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rept">
          <div className="container">
            <div className="rept__items">
              <div className="rept__item">
                <h3 className="rept__name">Адрес</h3>
                <div className="rept__info">
                  <p className="rept__text">{company?.address}</p>
                </div>
              </div>
              <div className="rept__item rept__swiper-item">
                <h3 className="rept__name">Фотоотчет</h3>
                <div className="rept__swiper-info">
                  <Swiper
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    className="rept__swiper"
                  >
                    {company?.photos?.map((ph, index) => (
                      <SwiperSlide key={index}>
                        <img src={ph} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Перечень проверенной продукции</h3>
                <div className="rept__info">
                  {company?.categories?.map((item) => (
                    <div key={item.category}>
                      <h4 className="rept__tub">{item.category}:</h4>
                      <ul className="tub__list">
                        {item.equipment.map((el, i) => (
                          <li key={i}>
                            <p className="rept__text">{el}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Стандарты</h3>
                <div className="rept__info">
                  <p className="rept__text rept__standarts">
                    {company?.standards?.map((st, i) => (
                      <span key={i}>{st}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">
                  Техническое оснащение предприятия
                </h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text">Недвижимое имущество</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Персонал предприятия</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text text-4">
                        Парк технологического оборудования
                      </p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">
                  Транспортные и логистические возможности
                </h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text text-1">
                        Складское хозяйство. Транспортировка. Маркировка.
                        Упаковка
                      </p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Разрешительная документация</h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text text-5">
                        Достаточность разрешительной документации
                      </p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Контроль качества</h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text">Отдел технического контроля</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Входной контроль</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Операционный контроль</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Приемо-сдаточные испытания</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text text-2">
                        Периодические, типовые и квалификационные испытания
                      </p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Лабораторное обеспечение</p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Промышленная безопасность</h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text">Бережливое производство</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">СМК</p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Выявленные недостатки</h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text">Критические обнаружения</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text text-3">
                        Существенные обнаружения, требующие обязательного
                        устранения или согласование применения
                      </p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Несущественные обнаружения</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text text-6">
                        Зоны обеспокоенности/риски для заказчика
                      </p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rept__item">
                <h3 className="rept__name">Заключения эксперта</h3>
                <div className="rept__info">
                  <ul className="rept__block">
                    <li>
                      <p className="rept__text">Итоги аудита</p>
                      <img src={lock} alt="" />
                    </li>
                    <li>
                      <p className="rept__text">Выводы и рекомендации</p>
                      <img src={lock} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="req">
          <div className="container">
            <div className="req__body">
              <h2 className="title req__title">
                Заполните заявку для получения полного отчета
              </h2>
              <p className="req__subtitle">
                Мы свяжемся с вами в течение 24 часов
              </p>
              <RequestForm company_name={company?.name} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
