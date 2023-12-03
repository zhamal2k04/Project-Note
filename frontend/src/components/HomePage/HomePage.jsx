import React from "react";
import "./HomePage.css";
import bg from "../../container/Images/bg-about.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Добро пожаловать на наш сайт!</h1>
      <div className="row d-flex flex-row align-items-center">
        <div className="col-md-6" id="aboutUs">
          <h2>О нас</h2>
          <p>
            Мы являемся компанией, которая предоставляет высококачественные
            услуги и продукты для наших клиентов.
          </p>
          <p>
            Здесь можете быть информация о вашей компании, ее целях и миссии,
            достижениях и другие интересные факты.
          </p>
        </div>

        <div className="col-md-6">
          <h2>Наши услуги</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Услуга 1</h5>
                  <p className="card-text">Описание услуги 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Услуга 2</h5>
                  <p className="card-text">Описание услуги 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Услуга 1</h5>
                  <p className="card-text">Описание услуги 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Услуга 2</h5>
                  <p className="card-text">Описание услуги 2.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 ourWork">
          <div className="row">
            {/* Левая часть с фоновым изображением */}
            <div
              className="col-md-6 bgImg"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Дополнительный контент или заголовок, если нужно */}
            </div>

            {/* Правая часть с информацией */}
            <div className="col-md-6 bgText">
              <div className="text-center mb-4 pt-5">
                <h2>Наши работы</h2>
              </div>
              {/* Добавьте здесь информацию о ваших работах, клиентах, проектах */}
              <div>
                <p>Количество клиентов: ...</p>
                <p>Количество работ: ...</p>
                {/* Другая информация о вашей деятельности */}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
