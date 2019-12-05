import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Cesar Augusto",
    email: "csr2314@gmail.com",
    password_hash: "CesarEsas"
  });
  return res.json(user);
});
export default routes;
