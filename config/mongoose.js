import mongoose from "mongoose";

// mongoose.connect(`mongodb://127.0.0.1:27017/todos_db`);
mongoose.connect(
  `mongodb+srv://ravibarla1:bH8a3cUqM28UnXCQ@cluster0.amiwk1t.mongodb.net/?retryWrites=true&w=majority
  `
);

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to mongodb"));

db.once("open", () => {
  console.log("connect to database :: mongodb");
});
