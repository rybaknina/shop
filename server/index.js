const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

const catalogPath = path.resolve(__dirname, "./data/catalog.json");
const cartPath = path.resolve(__dirname, "./data/cart.json");
const staticDir = path.resolve(__dirname, "../dist/");

app.use(express.static(staticDir));
app.use(express.json());

app.get("/api/v1/catalog", (req, res) => {
  fs.readFile(catalogPath, "utf-8", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send(err);
    }
  });
});

app.get("/api/v1/cart", (req, res) => {
  fs.readFile(cartPath, "utf-8", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send(err);
    }
  });
});

app.post("/api/v1/cart", (req, res) => {
  fs.readFile(cartPath, "utf-8", (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);
      const index = cart.findIndex(p => p.id === +req.body.id);
      if (index < 0) {
        const product = req.body;
        cart.push(Object.assign({ quantity: 1 }, product));
      } else {
        cart[index].quantity++;
      }

      fs.writeFile(cartPath, JSON.stringify(cart), "utf-8", () => {
        res.sendStatus(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});

app.delete("/api/v1/cart/:id", (req, res) => {
  fs.readFile(cartPath, "utf-8", (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);
      const index = cart.findIndex(p => p.id === +req.params.id);
      cart.splice(index, 1);

      fs.writeFile(cartPath, JSON.stringify(cart), "utf-8", () => {
        res.sendStatus(200);
      });
    } else {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
