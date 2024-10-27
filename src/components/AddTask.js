import {useState} from 'react';

const AddTask = ({addTask}) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({text: taskText, completed: false, id: Date.now()});
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
