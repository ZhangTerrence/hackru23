const express = require("express");
const database = require("./config/database");
const cors = require("cors");
const subjectRoutes = require("./routes/subjectRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

require("dotenv/config");

const app = express();

database();

app.use(cors());
app.use(express.json());

app.use("/api/subject", subjectRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
