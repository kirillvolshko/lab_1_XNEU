import express from "express";
import {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientsController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Clients
 *     description: Операції з клієнтами ломбардної системи
 */

/**
 * @swagger
 * /api/clients:
 *   get:
 *     tags:
 *       - Clients
 *     summary: Отримати список клієнтів
 *     responses:
 *       200:
 *         description: Список клієнтів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 */
router.get("/", getClients);

/**
 * @swagger
 * /api/clients:
 *   post:
 *     tags:
 *       - Clients
 *     summary: Додати нового клієнта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Клієнт доданий
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 */
router.post("/", createClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     tags:
 *       - Clients
 *     summary: Отримати клієнта за ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID клієнта
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Клієнт знайдений
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Клієнт не знайдений
 */
router.get("/:id", getClientById);

/**
 * @swagger
 * /api/clients/{id}:
 *   patch:
 *     tags:
 *       - Clients
 *     summary: Оновити інформацію клієнта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID клієнта
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Клієнт оновлений
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Клієнт не знайдений
 */
router.patch("/:id", updateClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     tags:
 *       - Clients
 *     summary: Видалити клієнта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID клієнта
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Клієнт видалений
 *       404:
 *         description: Клієнт не знайдений
 */
router.delete("/:id", deleteClient);

export default router;
