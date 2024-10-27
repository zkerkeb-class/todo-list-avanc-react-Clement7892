import TaskManager from './TaskManager'; // Importez TaskManager
import {TasksProvider} from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <TaskManager />
    </TasksProvider>
  );
}

export default App;
