import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import clientsRoutes from "./routes/clients.js";
import itemsRoutes from "./routes/items.js";
import pawnRoutes from "./routes/pawn.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB подключен"))
  .catch((err) => console.error("Ошибка подключения MongoDB:", err));

// Swagger-документация
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Роуты
app.use("/api/clients", clientsRoutes);
app.use("/api/items", itemsRoutes);
app.use("/api/pawns", pawnRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
