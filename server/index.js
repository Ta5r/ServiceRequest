const express = require("express");
const app = express();
const PORT = 8000;
  require("./db/conn");
  app.use(express.json());
  app.use(require("./router/routes"));
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });