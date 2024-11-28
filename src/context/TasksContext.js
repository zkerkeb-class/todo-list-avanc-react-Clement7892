import {createContext, useContext} from 'react';
import useTasks from '../hooks/useTasks';

const TasksContext = createContext();

export const TasksProvider = ({children}) => {
  const {tasks, addTask, removeTask, toggleTask} = useTasks();

  return (
    <TasksContext.Provider value={{tasks, addTask, removeTask, toggleTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
