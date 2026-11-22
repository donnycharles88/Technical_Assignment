import type { FilterType } from '../types/todo'

interface TodoFilterProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
  completedCount: number
  totalCount: number
  onClearCompleted: () => void
}

export function TodoFilter({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
  totalCount,
  onClearCompleted,
}: TodoFilterProps) {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'Semua', count: totalCount },
    { key: 'active', label: 'Aktif', count: activeCount },
    { key: 'completed', label: 'Selesai', count: completedCount },
  ]

  return (
    <div className="todo-filter-bar">
      <div className="todo-counter">
        {activeCount === 0 && totalCount > 0 ? (
          <span className="all-completed">Semua tugas selesai! 🎉</span>
        ) : (
          <span>
            <strong>{activeCount}</strong> {activeCount === 1 ? 'tugas tersisa' : 'tugas tersisa'}
          </span>
        )}
      </div>

      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-btn ${currentFilter === f.key ? 'active' : ''}`}
            onClick={() => onFilterChange(f.key)}
          >
            {f.label}
            <span className="count-badge">{f.count}</span>
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          className="btn-clear-completed"
          onClick={onClearCompleted}
          title="Hapus semua tugas yang telah diselesaikan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Hapus Selesai
        </button>
      )}
    </div>
  )
}
