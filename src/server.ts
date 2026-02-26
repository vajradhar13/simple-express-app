import express from "express";
export const app = express();
app.use(express.json());

// 👇 THIS IS WHAT YOU'RE MISSING
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
