import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении товаров" });
  }
};

export const createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Ошибка при создании товара" });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Товар не найден" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении товара" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Товар не найден" });
    }
  } catch (error) {
    res.status(400).json({ message: "Ошибка при обновлении товара" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (item) {
      res.json({ message: "Товар удален" });
    } else {
      res.status(404).json({ message: "Товар не найден" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка при удалении товара" });
  }
};
