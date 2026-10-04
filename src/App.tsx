import { useState } from "react";
import { Check, Eye, Pencil, Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<number | null>(null);
  // DeleteTaskFunction
  const deleteTask = () => {
    if (taskToDelete === null) return;

    setTasks(tasks.filter((_, index) => index !== taskToDelete));

    setTaskToDelete(null);

    toast.success("Task deleted successfully");
  };
  // EditTaskFunction
  const editTask = () => {
    if (taskToEdit === null) return;

    if (task.trim() === "") {
      toast.error("Task name must not be empty");
      return;
    }

    setTasks(
      tasks.map((taskItem, index) =>
        index === taskToEdit
          ? {
              title: task,
              description: description,
            }
          : taskItem,
      ),
    );

    setTask("");
    setDescription("");
    setTaskToEdit(null);

    toast.success("Task updated successfully");
  };
  const [tasks, setTasks] = useState<{ title: string; description: string }[]>(
    [],
  );

  // AddTaskFunction
  const addTask = () => {
    if (task.trim() === "") {
      toast.error("Task name must not be empty");
      return;
    }

    setTasks([
      ...tasks,
      {
        title: task,
        description: description,
      },
    ]);

    setTask("");
    setDescription("");

    toast.success("Task added successfully");
  };

  return (
    <div className="app">
      <Toaster />

      <div className="todo-card">
        <div className="header">
          <div>
            <h1>My Todo List</h1>
            <p className="subtitle">Stay organized and get things done.</p>
          </div>

          <div className="task-count">
            {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
          </div>
        </div>
        <div className="todo-input">
          <div className="input-fields">
            <input
              type="text"
              placeholder="What do you need to do?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />

            <textarea
              placeholder="Add a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            className="add-button"
            onClick={taskToEdit === null ? addTask : editTask}
          >
            <span>{taskToEdit === null ? "+" : "✓"}</span>
            {taskToEdit === null ? "Add Task" : "Update Task"}
          </button>
        </div>
        <div className="filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Completed</button>
        </div>
        <div className="task-list">
          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✓</div>
              <h2>No tasks yet</h2>
              <p>Add your first task to get started.</p>
            </div>
          ) : (
            tasks.map((task, index) => (
              <div className="task-item" key={index}>
                <div className="task-content">
                  <div className="task-number">{index + 1}</div>

                  <div className="task-info">
                    <h3>{task.title}</h3>
                    <p>{task.description || "No description"}</p>
                  </div>
                </div>

                <div className="task-actions">
                  <button
                    className="action-button view-button"
                    title="View details"
                  >
                    <Eye size={18} strokeWidth={2} />
                  </button>

                  <button
                    className="action-button edit-button"
                    title="Edit task"
                    onClick={() => {
                      setTaskToEdit(index);
                      setTask(task.title);
                      setDescription(task.description);
                    }}
                  >
                    <Pencil size={18} strokeWidth={2} />
                  </button>

                  <button
                    className="action-button delete-button"
                    title="Delete task"
                    onClick={() => setTaskToDelete(index)}
                  >
                    <Trash2 size={18} strokeWidth={2} />
                  </button>

                  <button
                    className="action-button complete-button"
                    title="Complete task"
                  >
                    <Check size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {taskToDelete !== null && (
          <div className="modal-overlay">
            <div className="confirmation-modal">
              <div className="confirmation-icon">
                <Trash2 size={24} />
              </div>

              <h2>Delete task?</h2>

              <p>
                Are you sure you want to delete this task? This action cannot be
                undone.
              </p>

              <div className="confirmation-actions">
                <button
                  className="cancel-button"
                  onClick={() => setTaskToDelete(null)}
                >
                  Cancel
                </button>

                <button className="confirm-delete-button" onClick={deleteTask}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="footer">
        {" "}
        <p>© 2026 Nassim. All rights reserved.</p>{" "}
      </footer>
    </div>
  );
}
<footer className="footer">
  {" "}
  <p>© 2026 Nassim. All rights reserved.</p>{" "}
</footer>;

export default App;
