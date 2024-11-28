import {useState, useEffect, useCallback} from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(task => {
    setTasks(prevTasks => [...prevTasks, task]);
  }, []);

  const removeTask = useCallback(taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  const toggleTask = useCallback(taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    );
  }, []);

  return {tasks, addTask, removeTask, toggleTask};
};

export default useTasks;
