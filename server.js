import express from "express";
import apiRouter from "./routes/apiRouter.js";
import cors from "cors";
const PORT = process.env.PORT || 8000;

/*
The user can filter by the following properties: industry, country, continent, is_seeking_funding, has_mvp 
*/

const app = express();

app.use(cors({ origin: "*" }));

app.use("/api", apiRouter);
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});
app.set("json spaces", 2);
app.listen(PORT, () => console.log("Server connected on Port : ", PORT));
