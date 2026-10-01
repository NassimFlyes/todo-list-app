import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = () => {
    if (task.trim() === '') return

    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <div className="app">
      <div className="todo-card">
        <div className="header">
          <div>
            <h1>My Todo List</h1>
            <p className="subtitle">
              Stay organized and get things done.
            </p>
          </div>

          <div className="task-count">
            {tasks.length} {tasks.length === 1 ? 'Task' : 'Tasks'}
          </div>
        </div>

        <div className="todo-input">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTask()
              }
            }}
          />

          <button className="add-button" onClick={addTask}>
            <span>+</span>
            Add Task
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
                    <h3>{task}</h3>
                    <p>Task #{index + 1}</p>
                  </div>
                </div>

                <div className="task-actions">
                  <button
                    className="action-button complete-button"
                    title="Complete task"
                  >
                    ✓
                  </button>

                  <button
                    className="action-button view-button"
                    title="View details"
                  >
                    👁
                  </button>

                  <button
                    className="action-button edit-button"
                    title="Edit task"
                  >
                    ✎
                  </button>

                  <button
                    className="action-button delete-button"
                    title="Delete task"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
