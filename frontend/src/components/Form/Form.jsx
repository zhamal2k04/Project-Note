import React, { useState } from "react";
import axios from "axios"; // Предполагается, что у вас установлен axios для отправки запросов

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    date: "",
    wagonNumber: "",
    cargoName: "",
    batchNumber: "",
    loadingTime: "",
    productionDate: "",
    shippingZone: "",
    fullName1: "",
    fullName2: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка данных на сервер
      const response = await axios.post('https://project-note-ac6k.onrender.com/api/notes', formData); // Предположим, что '/api/notes' - это ваше API endpoint для сохранения данных

      // Проверка успешности отправки данных
      if (response.status === 200) {
        // Данные успешно отправлены, можно сделать что-то здесь, например, очистить форму или показать сообщение об успехе
        console.log("Данные успешно отправлены!");
        window.location.replace("zhamal2k04-note.netlify.app/table")
      }

    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      // Обработка ошибки, например, вывод сообщения об ошибке пользователю
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2>Для отправки данных пишите все данные</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="date" className="form-label fs-5">Дата</label>
              <input type="date" className="form-control" id="date" name="date" onChange={handleChange} value={formData.date} />
            </div>
            {/* Добавьте остальные поля формы в каждую col аналогичным образом */}

          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5">Номер Вагона</label>
              <input type="text" className="form-control" name="wagonNumber" onChange={handleChange} value={formData.wagonNumber} placeholder="Номер вагона" />
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">Наименование Продукции</label>
              <input type="text" className="form-control" name="cargoName" onChange={handleChange} value={formData.cargoName} placeholder="Наименование Продукции"/>
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">Номер Партии</label>
              <input type="text" className="form-control" name="batchNumber" onChange={handleChange} value={formData.batchNumber} placeholder="Номер Партии"/>
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">Время Погрузки</label>
              <input type="text" className="form-control" name="loadingTime" onChange={handleChange} value={formData.loadingTime} placeholder="Время Погрузки"/>
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">Дата Выпуска</label>
              <input type="date" className="form-control" name="productionDate" onChange={handleChange} value={formData.productionDate} />
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">Зона Отгрузка</label>
              <input type="text" className="form-control" name="shippingZone" onChange={handleChange} value={formData.shippingZone} placeholder="Зона Отгрузка"/>
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">И.Ф.О Карачика</label>
              <input type="text" className="form-control" name="fullName1" onChange={handleChange} value={formData.fullName1} placeholder="И.Ф.О Карачика"/>
            {/* Вторая колонка */}
          </div>
          <div className="col-md-6">
              <label htmlFor="date" className="form-label fs-5 mt-3">И.Ф.О Контроля</label>
              <input type="text" className="form-control" name="fullName2" onChange={handleChange} value={formData.fullName2} placeholder="И.Ф.О Контроля"/>
            {/* Вторая колонка */}
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5">Отправить</button>
      </form><br />
    </div>
  );
};

export default YourFormComponent;
