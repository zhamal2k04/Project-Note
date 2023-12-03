import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-note-ac6k.onrender.com/api/notes');
        setTableData(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей для выполнения эффекта только один раз при монтировании

  return (
    <div className="container mt-5 vh-100">
    <h2 className="text-center mb-4">Все нужные данные из Базы</h2>
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Дата</th>
            <th>Номер Вагона</th>
            <th>Наименование Продукции</th>
            <th>Номер Партии</th>
            <th>Время Погрузки</th>
            <th>Дата Выпуска</th>
            <th>Зона Отгрузка</th>
            <th>И.Ф.О Карачика</th>
            <th>И.Ф.О Контроля</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data._id}>
              <td>{data.date}</td>
              <td>{data.wagonNumber}</td>
              <td>{data.cargoName}</td>
              <td>{data.batchNumber}</td>
              <td>{data.loadingTime}</td>
              <td>{data.productionDate}</td>
              <td>{data.shippingZone}</td>
              <td>{data.fullName1}</td>
              <td>{data.fullName2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  );
};

export default TableComponent;
