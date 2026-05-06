const app = require("./app");
require("dotenv").config();
const conn = require("./conn");
conn()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;