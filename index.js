const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

//News server homepage
app.get("/", (req, res) => {
  res.send("The News data");
});

//for categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

//for getting news by category
app.get("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  if (categoryId === "0") {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === categoryId);
    res.send(categoryNews);
  }
});

//for all news
app.get("/news", (req, res) => {
  res.send(news);
});

//for getting news by id
app.get("/news/:id", (req, res) => {
  const newsId = req.params.id;
  const selectedNews = news.find((n) => n._id === newsId);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("server is running in port: ", port);
});
