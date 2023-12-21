import mongoose from "mongoose";
// define habit schema
const todoSchema = mongoose.Schema([
  {
    title: "String",
    status: { type: String, enum: ["done", "notdone"], default: "notdone" },
    createdAt: { type: Date, default: Date.now, get: formatCreatedAt },
  },
]);
function formatCreatedAt(createdAt) {
  return createdAt.toLocalString();
}

export const Todos = mongoose.model("Todos", todoSchema);
