const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");
const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController")

const app = express();

// Connect DB
mongoose.connect("mongodb+srv://ersinuluagac:f3dCcSrdvN8QjFtN@cluster0.trwbwog.mongodb.net/?retryWrites=true&w=majority&appName=cbdb")
.then(() => {
  console.log("DB Connected")
}).catch((err) => {
  console.log(err)
});

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Routes
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/posts/edit/:id", pageController.getEditPage);

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port}'de başladı!`);
});