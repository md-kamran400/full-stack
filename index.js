const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route");
const PostRouter = require("./routes/post.route");
const auth = require("./middleware/auth.middleware");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_LIN);
    console.log("conncted");
  } catch (error) {
    console.log(error);
  }
};

app.use("/users", userRouter);
app.use("/posts", PostRouter);


const PORT = 4040
app.listen(PORT, () => {
  connect();
  console.log(`server run on ${PORT}`);
});
