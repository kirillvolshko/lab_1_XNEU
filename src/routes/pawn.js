import express from "express";
import {
  getPawns,
  createPawn,
  getPawnById,
  updatePawn,
  deletePawn,
} from "../controllers/pawnController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Позика
 *     description: Операції з позиками у ломбарді
 */

/**
 * @swagger
 * /api/pawns:
 *   get:
 *     tags:
 *       - Pawns
 *     summary: Отримати список позик
 *     responses:
 *       200:
 *         description: Список позик
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pawn'
 */
router.get("/", getPawns);

/**
 * @swagger
 * /api/pawns:
 *   post:
 *     tags:
 *       - Pawns
 *     summary: Додати нову позику
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pawn'
 *     responses:
 *       201:
 *         description: Позику додано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pawn'
 */
router.post("/", createPawn);

/**
 * @swagger
 * /api/pawns/{id}:
 *   get:
 *     tags:
 *       - Pawns
 *     summary: Отримати позику за ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID позики
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Позику знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pawn'
 *       404:
 *         description: Позику не знайдено
 */
router.get("/:id", getPawnById);

/**
 * @swagger
 * /api/pawns/{id}:
 *   patch:
 *     tags:
 *       - Pawns
 *     summary: Оновити інформацію позики
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID позики
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pawn'
 *     responses:
 *       200:
 *         description: Позику оновлено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pawn'
 *       404:
 *         description: Позику не знайдено
 */
router.put("/:id", updatePawn);

/**
 * @swagger
 * /api/pawns/{id}:
 *   delete:
 *     tags:
 *       - Pawns
 *     summary: Видалити позику
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID позики
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Позику видалено
 *       404:
 *         description: Позику не знайдено
 */
router.delete("/:id", deletePawn);

export default router;
