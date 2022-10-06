const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const colors = require('colors')
const cors = require('cors')
const PORT = process.env.PORT || 5000;


dotenv.config();
app.use(express.json());
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  
  })
  .then(console.log(`server is now connected to Mongo DataBase on port: ${process.env.PORT}`.blue.underline))
  .catch((err) => console.log(err));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/client/build')));
  
  app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port : ${process.env.PORT}`.yellow);
})

mongoose.set('useFindAndModify', false);
