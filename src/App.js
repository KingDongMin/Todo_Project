
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodosFilter from './components/TodosFilter/TodosFilter';

const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const handleChange = (updated)=>setFilter(updated);
  return (
    <>
      <TodosFilter filters={filters} onChange={handleChange}></TodosFilter>
      <TodoList filter={filter}></TodoList>
    </>
  );
}

export default App;
