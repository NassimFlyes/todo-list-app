import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import { useTranslation } from "react-i18next";
import "./App.css";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState("Active");
  const [tasks, setTasks] = useState<Task[]>([]);
  const { t, i18n } = useTranslation();

  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<number | null>(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  // DeleteTaskFunction
  const deleteTask = () => {
    if (taskToDelete === null) return;

    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== taskToDelete),
    );

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

    setTasks((prevTasks) =>
      prevTasks.map((taskItem, index) =>
        index === taskToEdit
          ? {
              ...taskItem,
              title: task.trim(),
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

  // ToggleTaskFunction: Active <-> Completed
  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // AddTaskFunction
  const addTask = () => {
    if (task.trim() === "") {
      toast.error("Task name must not be empty");
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: task.trim(),
        description: description,
        completed: false,
      },
    ]);

    setTask("");
    setDescription("");

    toast.success("Task added successfully");
  };

  
return (
  <div className="app">
    <button
      className="language-switch"
      onClick={() =>
        i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
      }
    >
      🌐 {i18n.language === "en" ? "EN" : "DE"}
    </button>

    <Toaster />

    <div className="todo-card">
      <div className="header">
        <div>
          <h1>{t("title")}</h1>
          <p className="subtitle">{t("subtitle")}</p>
        </div>

        <div className="task-count">
          {tasks.length} {tasks.length === 1 ? t("task") : t("tasks")}
        </div>
      </div>

      <div className="todo-input">
        <div className="input-fields">
          <input
            type="text"
            placeholder={t("taskPlaceholder")}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <textarea
            placeholder={t("descriptionPlaceholder")}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="add-button"
          onClick={taskToEdit === null ? addTask : editTask}
        >
          <span>{taskToEdit === null ? "+" : "✓"}</span>
          {taskToEdit === null ? t("addTask") : t("updateTask")}
        </button>
      </div>

      <div className="filters">
        <button
          className={`filter-button ${filter === "All" ? "active" : ""}`}
          onClick={() => setFilter("All")}
        >
          {t("all")}
        </button>

        <button
          className={`filter-button ${filter === "Active" ? "active" : ""}`}
          onClick={() => setFilter("Active")}
        >
          {t("active")}
        </button>

        <button
          className={`filter-button ${filter === "Completed" ? "active" : ""}`}
          onClick={() => setFilter("Completed")}
        >
          {t("completed")}
        </button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✓</div>
            <h2>{t("noTasks")}</h2>
            <p>{t("emptyDescription")}</p>
          </div>
        ) : (
          filteredTasks.map((task, index) => (
            <div className="task-item" key={index}>
              <div className="task-content">
                <div className="task-number">{index + 1}</div>

                <div className="task-info">
                  <h3>{task.title}</h3>
                  <p>{task.description || t("noDescription")}</p>
                </div>
              </div>

              <div className="task-actions">
                <button
                  className="show-btn"
                  onClick={() => setSelectedTask(task)}
                  title={t("showTask")}
                >
                  <Eye size={18} />
                </button>

                <button
                  className="action-button edit-button"
                  title={t("editTask")}
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
                  title={t("delete")}
                  onClick={() => setTaskToDelete(index)}
                >
                  <Trash2 size={18} strokeWidth={2} />
                </button>

                <button
                  className={`done-btn ${task.completed ? "is-completed" : ""}`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed
                    ? `✓ ${t("completed")}`
                    : t("done")}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedTask && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{t("taskDetails")}</h2>

            <p>
              <strong>{t("name")}:</strong> {selectedTask.title}
            </p>

            <p>
              <strong>{t("description")}:</strong>{" "}
              {selectedTask.description || t("noDescription")}
            </p>

            <p>
              <strong>{t("status")}:</strong>{" "}
              {selectedTask.completed
                ? `✓ ${t("completed")}`
                : t("active")}
            </p>

            <button onClick={() => setSelectedTask(null)}>
              {t("close")}
            </button>
          </div>
        </div>
      )}

      {taskToDelete !== null && (
        <div className="modal-overlay">
          <div className="confirmation-modal">
            <div className="confirmation-icon">
              <Trash2 size={24} />
            </div>

            <h2>{t("deleteTask")}</h2>

            <p>{t("deleteConfirmation")}</p>

            <div className="confirmation-actions">
              <button
                className="cancel-button"
                onClick={() => setTaskToDelete(null)}
              >
                {t("cancel")}
              </button>

              <button
                className="confirm-delete-button"
                onClick={deleteTask}
              >
                {t("delete")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    <footer className="footer">
      {" "}
      <p>© 2026 Nassim. {t("allRightsReserved")}</p>{" "}
    </footer>
  </div>
);

}

export default App;
