import express from "express";

import { usersRoutes } from "./routes/users.routes";

//SWAGGER
import swagger from "swagger-ui-express";

import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve);
app.get("/api-docs", swagger.setup(swaggerFile));


app.use("/users", usersRoutes);

export { app };