const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/auth/callback", (req, res) => {
  res.send(
    "<h1>Login Successful</h1><p>Welcome! You have successfully logged in with Facebook.</p>"
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
