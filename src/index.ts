import express from "express";
export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a + b;

  res.json({
    answer,
  });
});

// 👇 THIS IS WHAT YOU'RE MISSING
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
