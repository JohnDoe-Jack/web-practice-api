import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;

app.use(cors()); // CORS middleware

app.get("/reverse-geocode", async (req: Request, res: Response) => {
  try {
    const { lat, lon } = req.query as { lat: string; lon: string };
    const apiKey = "dj00aiZpPWx1bldQbzY0R2M3biZzPWNvbnN1bWVyc2VjcmV0Jng9MWM-";
    const apiUrl = `https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder?lat=${lat}&lon=${lon}&appid=${apiKey}&output=json`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
