const express = require("express");

const app = express();

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    users: req.params.id,
  });
});

//Listening
app.listen(8000, () => console.log("Server is running"));
