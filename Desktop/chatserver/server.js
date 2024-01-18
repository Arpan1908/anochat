const express = require("express");
const app = express();
const { Server } = require("socket.io");
const helmet = require("helmet");
const server = require("http").createServer(app);
const session = require("express-session");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
require("dotenv").config();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  name:"sid",
  credentials:true,
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:process.env.ENVIRONMENT === "production" ? "true" : "auto",
    httpOnly:true,
    sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
  }
}));

app.use("/auth", authRouter);

io.on("connection", (socket) => {});

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
