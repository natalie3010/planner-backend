import { Router } from "express";
import skillsRoutes from "./skillsRoutes";
import clientsRoutes from "./clientsRoutes";
import userRoutes from "./userRoutes";
import { verifyToken } from "../helpers/jwtTokenHelper";
import supplyRoutesV2 from "./supplyRoutesV2";
import demandRoutesV2 from "./demandRoutesV2";

const protectedRoutes = Router();

protectedRoutes.route("/*").all(function (req, res, next) {
  const token = req.headers["x-access-token"];
  let decodedToken = verifyToken(token, process.env.TOKEN_KEY);
  if (decodedToken) {
    req.decodedToken = decodedToken;
    next();
  } else {
    res.status(401).send("User not authenticated");
  }
});

protectedRoutes.use("/skills", skillsRoutes);
protectedRoutes.use("/clients", clientsRoutes);
protectedRoutes.use("/user", userRoutes);

protectedRoutes.use("/supply", supplyRoutesV2);
protectedRoutes.use("/v2/supply", supplyRoutesV2);
protectedRoutes.use("/demand", demandRoutesV2);
protectedRoutes.use("/v2/demand", demandRoutesV2);

export default protectedRoutes;
