import { useState, useEffect } from 'react'
import type { Todo, FilterType } from './types/todo'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItem'
import { TodoFilter } from './components/TodoFilter'
import './App.css'

const STORAGE_KEY = 'todo_app_tasks'

const DEFAULT_TODOS: Todo[] = [
  {
    id: '1',
    text: 'Cek tiket insiden jaringan dan status monitoring server',
    completed: true,
    createdAt: Date.now() - 3600000,
  },
  {
    id: '2',
    text: 'Olahraga ringan 30 menit',
    completed: false,
    createdAt: Date.now() - 1800000,
  },
  {
    id: '3',
    text: 'Backup konfigurasi router dan database lokal',
    completed: false,
    createdAt: Date.now(),
  },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved !== null) {
        return JSON.parse(saved) as Todo[]
      }
    } catch (err) {
      console.error('Gagal memuat tugas dari localStorage:', err)
    }
    return DEFAULT_TODOS
  })

  const [filter, setFilter] = useState<FilterType>('all')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (err) {
      console.error('Gagal menyimpan tugas ke localStorage:', err)
    }
  }, [todos])

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const handleUpdateTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }

  const totalCount = todos.length
  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = totalCount - activeCount
  const completionPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="todo-app">
      <header className="app-header">
        <div className="header-badge">Tugas 2 - Technical Assessment</div>
        <h1>Todo App</h1>
        <p className="app-subtitle">
          Aplikasi manajemen tugas harian interaktif berbasis React &amp; TypeScript
        </p>

        {totalCount > 0 && (
          <div className="progress-container">
            <div className="progress-label">
              <span>Progres Selesai</span>
              <span>
                {completedCount} dari {totalCount} ({completionPercent}%)
              </span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
        )}
      </header>

      <main className="app-main">
        <TodoForm onAddTodo={handleAddTodo} />

        {totalCount > 0 && (
          <TodoFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            totalCount={totalCount}
            onClearCompleted={handleClearCompleted}
          />
        )}

        <div className="todo-list-wrapper">
          {filteredTodos.length > 0 ? (
            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                  onUpdate={handleUpdateTodo}
                />
              ))}
            </ul>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                {filter === 'completed' ? '📝' : filter === 'active' ? '🎉' : '✨'}
              </div>
              <p className="empty-title">
                {totalCount === 0
                  ? 'Belum ada tugas'
                  : filter === 'active'
                  ? 'Tidak ada tugas aktif'
                  : 'Belum ada tugas selesai'}
              </p>
              <p className="empty-desc">
                {totalCount === 0
                  ? 'Mulai rencanakan hari Anda dengan menambahkan tugas pertama di atas.'
                  : filter === 'active'
                  ? 'Semua tugas telah diselesaikan! Bagus sekali.'
                  : 'Selesaikan tugas untuk melihatnya tercantum di sini.'}
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="tips">
          <span>💡 <strong>Tip:</strong> Klik dua kali pada teks tugas untuk mengedit dengan cepat</span>
        </div>
      </footer>
    </div>
  )
}

export default App
