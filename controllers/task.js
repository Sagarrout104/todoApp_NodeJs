import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";
export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description, user: req.user });

    res.status(201).json({ success: true, message: "Task added successfully" });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    const task = await Task.find({ user: id });

    res.json({ success: true, task });
  } catch (error) {
    next(error);
  }
};

export const updateMyTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler("Invalid"));
    }

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.json({ success: true, message: "Task updated" });
  } catch (error) {
    next(error);
  }
};

export const deleteMyTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler("Invalid"));
    }

    await task.deleteOne();

    res.json({ success: true, message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
