const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://zhamal.netlify.app"); // Замените * на ваш источник
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Подключение к MongoDB
mongoose.connect(
  "mongodb+srv://zhamal2k04:test12345@cluster0.ek0f7zz.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Схема и модель для данных в MongoDB
const yourSchema = new mongoose.Schema({
  date: String,
  wagonNumber: String,
  cargoName: String,
  batchNumber: String,
  loadingTime: String,
  productionDate: String,
  shippingZone: String,
  fullName1: String,
  fullName2: String,
});

const YourModel = mongoose.model("form", yourSchema);

// Обработчик POST запроса для сохранения данных в MongoDB
app.post("/api/notes", async (req, res) => {
  try {
    const newData = req.body;
    const createdData = await YourModel.create(newData);
    res.status(200).json(createdData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET запрос для получения данных из MongoDB
app.get("/api/notes", async (req, res) => {
  try {
    const allData = await YourModel.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Настройка Express для отдачи статических файлов из папки build (если используется)
/* app.use(express.static(path.join(__dirname, 'build'))); */

// Настройка Express для обработки маршрутов React приложения
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 */
// Старт сервера
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
