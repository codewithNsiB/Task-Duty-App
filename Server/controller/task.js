import Task from "../model/task.js";

//  Get all tasks
export const getTasks = async (req, res) => {
  console.log(req);
  try {
    const tasks = await Task.find({user: req.user.id});
    res.status(200).json(tasks);
    if (tasks.length === 0) {
      return res.status(200).json({ message: "You have no tasks yet." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Add Task
export const createTask = async (req, res) => 
{
  try {
    const { title, description, tags, status } = req.body;
    console.log(req.user, title, description, tags, status);
    const task = Task({
      user: req.user.id,
      title,
      description,
      tags,
      status
    });
    const newTask = await task.save();
    res.status(201).json(newTask);

  } catch (error) {
    res.status(500).json({ message: "Error adding task", error });
  }
};


// Edit Task

export const editTask = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};


// delete Tasks
export const deleteTask = async (req, res) => {
  try {
     await Task.findByIdAndRemove(req.params.id);
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
