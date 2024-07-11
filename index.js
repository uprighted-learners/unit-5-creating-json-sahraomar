const express = require("express");
const path = require("path"); //path module required
const app = express();

const PORT = 3000;

// route to server the JSON file
app.get("/api/answers", (req, res) => {
  res.sendFile(path.join(__dirname, "api", "answers.json")); // Use __dirname with two underscores
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
