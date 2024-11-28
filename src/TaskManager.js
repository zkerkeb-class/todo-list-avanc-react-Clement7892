import {useState, useMemo} from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import {useTasksContext} from './context/TasksContext';

function TaskManager() {
  const {tasks, addTask, removeTask, toggleTask} = useTasksContext();
  const [filter, setFilter] = useState('all');

  const filteredTasks = useMemo(() => {
    return filter === 'all'
      ? tasks
      : filter === 'completed'
        ? tasks.filter(task => task.completed)
        : tasks.filter(task => !task.completed);
  }, [tasks, filter]);

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-4xl mb-4 text-center">Todo List</h1>
      <AddTask addTask={addTask} />
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        removeTask={removeTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default TaskManager;
