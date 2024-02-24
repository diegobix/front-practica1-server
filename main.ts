// @deno-types="npm:@types/express"
import express from "npm:express";
import cors from "npm:cors";

const app = express();
app.use(cors());

app.get("/lesson", async (_req, res) => {
  try {
    const resp = await fetch("https://learnyourlesson.deno.dev/");
    const data = await resp.text();
    res.send(data);
  } catch (e) {
    throw e;
  }
});

app.listen(8080);
