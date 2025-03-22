import Pawn from "../models/Pawn.js";
import Client from "../models/Client.js";
import Item from "../models/Item.js";

export const getPawns = async (req, res) => {
  try {
    const pawns = await Pawn.find().populate("clientId itemId");
    res.json(pawns);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении сдачи" });
  }
};

export const createPawn = async (req, res) => {
  try {
    const {
      clientId,
      itemId,
      description,
      pawnDate,
      returnDate,
      amount,
      commission,
    } = req.body;

    const client = await Client.findById(clientId);
    const item = await Item.findById(itemId);

    if (!client || !item) {
      return res.status(400).json({ message: "Клиент или товар не найден" });
    }

    const pawn = new Pawn({
      clientId: clientId,
      itemId: itemId,
      description,
      pawnDate,
      returnDate,
      amount,
      commission,
    });

    await pawn.save();
    res.status(201).json(pawn);
  } catch (error) {
    res.status(400).json({ message: "Ошибка при создании сдачи" });
  }
};

export const getPawnById = async (req, res) => {
  try {
    const pawn = await Pawn.findById(req.params.id).populate("client item");
    if (pawn) {
      res.json(pawn);
    } else {
      res.status(404).json({ message: "Сдача не найдена" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении сдачи" });
  }
};

export const updatePawn = async (req, res) => {
  try {
    const pawn = await Pawn.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (pawn) {
      res.json(pawn);
    } else {
      res.status(404).json({ message: "Сдача не найдена" });
    }
  } catch (error) {
    res.status(400).json({ message: "Ошибка при обновлении сдачи" });
  }
};

export const deletePawn = async (req, res) => {
  try {
    const pawn = await Pawn.findByIdAndDelete(req.params.id);
    if (pawn) {
      res.json({ message: "Сдача удалена" });
    } else {
      res.status(404).json({ message: "Сдача не найдена" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка при удалении сдачи" });
  }
};
