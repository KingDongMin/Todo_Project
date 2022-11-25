
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodosFilter from './components/TodosFilter/TodosFilter';
import {DarkModeProvider} from './context/DarkModeContext';

const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <TodosFilter filters={filters} filter={filter} onChange={setFilter}></TodosFilter>
      <TodoList filter={filter}></TodoList>
    </DarkModeProvider>
  );
}

export default App;
