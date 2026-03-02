const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const AAS_API = process.env.AAS_API;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>Digital Battery Passport</h1>
    <form action="/passport" method="get">
      <input type="text" name="id" placeholder="Enter Passport ID" />
      <button type="submit">Open</button>
    </form>
  `);
});

app.get("/passport", async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.redirect("/");
  }

  try {
    const response = await axios.get(`${AAS_API}/shells/${id}`);
    res.send(`
      <h2>Battery Passport: ${id}</h2>
      <pre>${JSON.stringify(response.data, null, 2)}</pre>
      <a href="/">Back</a>
    `);
  } catch (error) {
    res.send(`
      <h2>Passport not found</h2>
      <a href="/">Back</a>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`DBP Frontend running on port ${PORT}`);
});