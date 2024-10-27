const TaskItem = ({task, removeTask, toggleTask}) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
