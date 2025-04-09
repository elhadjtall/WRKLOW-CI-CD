const express = require('express');
const mongoose = require('mongoose');
const Car = require('./models/Car');
 
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
 
// Connexion à MongoDB
const mongoURL = process.env.MONGO_URL
 
console.log("mongoURL : " + mongoURL);
 
mongoose.connect(mongoURL)
  .then(async () => {
    console.log("✅ Connexion MongoDB réussie");
    await insertRandomCars(); // Insérer des données au démarrage ...
  })
  .catch(err => console.error("❌ Erreur de connexion MongoDB :", err));
 
// Fonction pour insérer des voitures aléatoires si la BDD est vide
async function insertRandomCars() {
  const count = await Car.countDocuments();
  if (count === 0) {
    console.log("🚗 Base de données vide, insertion de voitures aléatoires...");
    
    const fakeCars = [
      { brand: "Toyota", model: "Corolla", year: 2020 },
      { brand: "Tesla", model: "Model 3", year: 2023 },
      { brand: "BMW", model: "X5", year: 2019 },
      { brand: "Audi", model: "A4", year: 2021 },
      { brand: "Mercedes", model: "C-Class", year: 2022 }
    ];
 
    await Car.insertMany(fakeCars);
    console.log("✅ 5 voitures aléatoires ajoutées !");
  } else {
    console.log("🔹 La base contient déjà des voitures, pas d'insertion.");
  }
}
 
// Route principale
app.get('/', (req, res) => {
  res.json({
    message: "API Car fonctionne avec succès !",
    port: process.env.PORT,
    mongo_uri: "[SECURE]"
  });
});
 
// 🔹 Récupérer toutes les voitures
app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
module.exports = app;