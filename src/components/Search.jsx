import React, { useEffect, useRef, useState } from "react";
import searchImg from "../img/search.svg";
import axios from "axios";
import { baseUrl } from "../utils";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const ref = useRef();
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/companies`)
      .then((data) => {
        setCompanies(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/report/${id}`);
  }

  function handleSelect(item) {
    setSearch(item.name);
    setOpen(false);
    setDisabled(false);
    setId(item.company_id);
  }

  function filterList(search) {
    const result = companies.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    return result;
  }

  return (
    <form onSubmit={handleSearch} className="search">
      <div className="search__input" ref={ref}>
        <img src={searchImg} alt="" />
        <input
          onFocus={(e) => {
            ref.current.style.border = "1px solid #5066ff";
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
            setDisabled(true);
          }}
          onBlur={(e) => {
            ref.current.style.border = "1px solid #cad1ff";
          }}
          type="text"
          placeholder="Например, Промнефтегаз"
        />
        {search.trim() !== "" && filterList(search).length && open ? (
          <ul className="company__list">
            {filterList(search).map((item) => {
              return (
                <li
                  key={item.company_id}
                  onClick={() => handleSelect(item)}
                  className="company__item"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>

      <button className="btn search__btn" disabled={disabled}>
        Найти
      </button>
    </form>
  );
}
