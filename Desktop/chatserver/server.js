const express = require("express");
const app = express();
const { Server } = require("socket.io");
const helmet = require("helmet");
const server = require("http").createServer(app);
const cors = require("cors");
const authRouter  = require("./routers/authRouter");

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

app.use("/auth", authRouter);

io.on("connection", (socket) => {});

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
