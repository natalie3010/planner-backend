import express from "express";
import bodyParser from "body-parser";
import authenticationRoutes from "./src/routes/authenticationRoutes";
import protectedRoutes from "./src/routes/protectedRoutes";
import cors from "cors";
import dotenv from "dotenv";
import https from "https";
import fs from "fs";

const app = express();
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 2;
const OPTIONS = {
  origin: ["http://localhost:4200", "https://wpp.capdigiops.com"],
};

dotenv.config();

app.use(cors(OPTIONS));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use("/api/", protectedRoutes);
app.use("/auth/", authenticationRoutes);

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

console.log(__dirname);
// https
//   .createServer(
//     {
//       ca: fs.readFileSync("/mnt/sqlite-volume/cabundle.crt"),
//       key: fs.readFileSync("/mnt/sqlite-volume/server.key"),
//       cert: fs.readFileSync("/mnt/sqlite-volume/server.crt"),
//     },
//     app
//   )
//   .listen(PORT, function () {
//     console.log(
//       `Express server listening on port ${PORT}! Go to https://localhost:${PORT}/`
//     );
//   });
