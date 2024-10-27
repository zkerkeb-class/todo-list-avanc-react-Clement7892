import TaskItem from './TaskItem';

const TaskList = ({tasks, removeTask, toggleTask}) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))
      ) : (
        <p>No tasks yet</p>
      )}
    </div>
  );
};

export default TaskList;
