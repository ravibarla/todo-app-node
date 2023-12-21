import { Todos } from "../model/Todos.js";

export const get = (req, res) => {
  Todos.find({}).then((todos) => {
    return res.render("home", { todos: todos, title: "home" });
  });
};

export const add = (req, res) => {
  // console.log("add :",req.body);
  const { title } = req.body;
  const newTodo = new Todos({ title: title });
  newTodo.save().then((succ) => {
    console.log("added successfully");
    return res.redirect("/");
  });
};

export const edit = (req, res) => {
  // console.log("edit:", req.body);
  const { id: habitId } = req.params;
  const { updatedTitle } = req.body;
  Todos.findByIdAndUpdate(habitId, { title: updatedTitle }, { new: true }).then(
    (succ) => {
      return res.redirect("/");
    }
  );
};

export const remove = (req, res) => {
  // console.log("remove :",req.params);
  const { id } = req.params;
  Todos.findOneAndDelete({ _id: id }).then((succ) => {
    console.log("deleted successfully");
    return res.redirect("/");
  });
};

export const getById = (req, res) => {
  console.log("get by id");
};

export const createTodo = (req, res) => {
  // console.log("create");
  return res.render("createTodo", { title: "create-todo" });
};

export const editTodo = (req, res) => {
  // console.log("create");
  const { id } = req.params;
  return res.render("editTodo", { title: "edit-todo", id: id });
};

export const toggleStatus = (req, res) => {
  const { id } = req.params;
  Todos.findById(id).then((data) => {
    let s = null;
    data.status == "done" ? (s = "notdone") : (s = "done");
    // console.log(s);
    Todos.findByIdAndUpdate(id, { status: s }, { new: true }).then((succ) =>
      res.redirect("/")
    );
    return;
  });
  // console.log("id :", id);
};
