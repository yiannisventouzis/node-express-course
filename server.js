const express = require("express");

const app = express();

app.use(express.json());

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

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

//Listening
app.listen(8000, () => console.log("Server is running"));
