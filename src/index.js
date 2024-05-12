import dotenv from "dotenv";
import connectDB from "./db/index.db.js";
import { app } from "./app.js";
dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error" + error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed: " + error);
    process.exit(1);
  });
