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

//Listening
app.listen(8000, () => console.log("Server is running"));
