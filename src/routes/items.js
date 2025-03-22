import express from "express";
import {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
} from "../controllers/itemsController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Товар
 *     description: Операції з товарами ломбардної системи
 */

/**
 * @swagger
 * /api/items:
 *   get:
 *     tags:
 *       - Items
 *     summary: Отримати список товарів
 *     responses:
 *       200:
 *         description: Список товарів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/items:
 *   post:
 *     tags:
 *       - Items
 *     summary: Додати новий товар
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Товар доданий
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.post("/", createItem);

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     tags:
 *       - Items
 *     summary: Отримати товар за ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID товару
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Товар знайдений
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Товар не знайдений
 */
router.get("/:id", getItemById);

/**
 * @swagger
 * /api/items/{id}:
 *   patch:
 *     tags:
 *       - Items
 *     summary: Оновити інформацію товару
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID товару
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: Товар оновлений
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Товар не знайдений
 */
router.patch("/:id", updateItem);

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     tags:
 *       - Items
 *     summary: Видалити товар
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID товару
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Товар видалений
 *       404:
 *         description: Товар не знайдений
 */
router.delete("/:id", deleteItem);

export default router;
