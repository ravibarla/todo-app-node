import express, { urlencoded } from "express";
import { router } from "./routes/index.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { db } from "./config/mongoose.js";

const PORT = 3000;

const app = express();

// // Set the view engine to use EJS
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

//set up express ejs layout
app.use(expressEjsLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set up url encoded
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("server running in port :", PORT);
});
app.use("/",router);
