const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const mongoose = require("mongoose");
// const postRoutes = require("./routes/postRoutes");
const japsRoutes = require("./routes/japsRoutes");

const app = express();


env.config();
console.log(process.env.PORT)
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB_DATABASE}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(()=>{
    console.log("connected")
}).catch(err => console.log(err));

// app.use('/api/v1/post',postRoutes);
app.use('/api/v1/japs',japsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
  });