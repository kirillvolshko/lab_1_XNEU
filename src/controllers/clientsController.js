import Client from "../models/Client.js";

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

export const createClient = async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).json(client);
};

export const getClientById = async (req, res) => {
  const client = await Client.findById(req.params.id);
  client
    ? res.json(client)
    : res.status(404).json({ message: "Клиент не найден" });
};

export const updateClient = async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  client
    ? res.json(client)
    : res.status(404).json({ message: "Клиент не найден" });
};

export const deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Клиент удалён" });
};
