import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();
const port = 5174;

app.use(cors({ origin: "http://localhost:5173", methods: "GET" }));

app.use("/api/data/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json"
    );
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching datas" });
  }
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
